import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { User } from '@prisma/client'
import { verify } from 'argon2'
import { Response } from 'express'
import { UserService } from '../user/user.service'
import { AuthDTO, OidcAuthDTO } from './dto/auth.dto'
import { AuthResponseDTO } from './dto/auth.response.dto'

@Injectable()
export class AuthService {
  constructor(
    private readonly JWTservice: JwtService,
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {}

  private issueTokens(userID: string) {
    const payload = { id: userID }
    return {
      accessToken: this.JWTservice.sign(payload, { expiresIn: '1h' }),
      refreshToken: this.JWTservice.sign(payload, { expiresIn: '7d' }),
    }
  }

  private async validateUser(dto: AuthDTO): Promise<User> {
    const user = await this.userService.getByEmail(dto.email)

    if (!user) throw new NotFoundException('User not found')

    const isPasswordValid = await verify(user.password, dto.password)

    if (!isPasswordValid) throw new BadRequestException('Invalid password')

    return user
  }

  async register(dto: AuthDTO): Promise<AuthResponseDTO> {
    const oldUser = await this.userService.getByEmail(dto.email)

    if (oldUser) throw new BadRequestException('User already exists')

    const { password, ...user } = await this.userService.createUser(dto)
    const tokens = this.issueTokens(user.id)

    return {
      user,
      ...tokens,
    }
  }

  async logIn(dto: AuthDTO): Promise<AuthResponseDTO> {
    const { password, ...user } = await this.validateUser(dto)
    const tokens = this.issueTokens(user.id)

    return {
      user,
      ...tokens,
    }
  }

  async getNewTokens(refreshToken: string): Promise<AuthResponseDTO> {
    try {
      const result = await this.JWTservice.verifyAsync(refreshToken)
      if (!result) throw new BadRequestException('Invalid refresh token')

      const { password, ...user } = await this.userService.getByID(result.id)
      const tokens = this.issueTokens(user.id)

      return {
        user,
        ...tokens,
      }
    } catch (error) {
      throw new BadRequestException('Invalid or expired refresh token')
    }
  }

  addRefreshTokenToResponse(res: Response, refreshToken: string) {
    const expiresIn = new Date()
    expiresIn.setDate(
      expiresIn.getDate() + process.env.EXPIRE_DAY_REFRESH_TOKEN,
    )

    res.cookie(process.env.REFRESH_TOKEN_NAME, refreshToken, {
      httpOnly: true,
      domain: this.configService.get<string>('CLIENT_DOMAIN'),
      expires: expiresIn,
      secure: true,
      sameSite: 'none',
    })
  }

  removeRefreshTokenToResponse(res: Response) {
    res.cookie(process.env.REFRESH_TOKEN_NAME, '', {
      httpOnly: true,
      domain: this.configService.get<string>('CLIENT_DOMAIN'),
      expires: new Date(0),
      secure: true,
      sameSite: 'none',
    })
  }

  async validateOidcLogIn(dto: OidcAuthDTO): Promise<AuthResponseDTO> {
    let user = await this.userService.getByEmail(dto.email)
    if (!user) {
      user = await this.userService.createUserWithoutPassword(dto)
    }

    const tokens = this.issueTokens(user.id)

    return {
      user,
      ...tokens,
    }
  }
}
