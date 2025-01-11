import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { verify } from 'argon2'
import { Response } from 'express'
import { UserService } from '../user/user.service'
import { AuthDTO } from './dto/auth.dto'

@Injectable()
export class AuthService {
  EXPIRE_DAY_REFRESH_TOKEN = 1
  REFRESH_TOKEN_NAME = 'refreshToken'

  constructor(
    private readonly JWTservice: JwtService,
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {}

  private issueTokens(userID: string) {
    const data = { id: userID }

    const accessToken = this.JWTservice.sign(data, { expiresIn: '1h' })
    const refreshToken = this.JWTservice.sign(data, { expiresIn: '7d' })

    return { accessToken, refreshToken }
  }

  private async validateUser(dto: AuthDTO) {
    const user = await this.userService.getByEmail(dto.email)

    if (!user) throw new NotFoundException('User not found')

    const isPasswordValid = await verify(user.password, dto.password)

    if (!isPasswordValid) throw new UnauthorizedException('Invalid password')

    return user
  }

  async register(dto: AuthDTO) {
    const oldUser = await this.userService.getByEmail(dto.email)

    if (oldUser) throw new BadRequestException('User already exists')

    const { password, ...user } = await this.userService.createUser(dto)
    const tokens = this.issueTokens(user.id)

    return {
      user,
      ...tokens,
    }
  }

  async logIn(dto: AuthDTO) {
    const { password, ...user } = await this.validateUser(dto)
    const tokens = this.issueTokens(user.id)

    return {
      user,
      ...tokens,
    }
  }

  async getNewTokens(refreshToken: string) {
    const result = await this.JWTservice.verifyAsync(refreshToken)
    if (!result) throw new UnauthorizedException('Invalid refresh token')

    const { password, ...user } = await this.userService.getByID(result.id)

    const tokens = this.issueTokens(user.id)

    return {
      user,
      ...tokens,
    }
  }

  addRedreshTokenToResponse(res: Response, refreshToken: string) {
    const expiresIn = new Date()
    expiresIn.setDate(expiresIn.getDate() + this.EXPIRE_DAY_REFRESH_TOKEN)

    res.cookie(this.REFRESH_TOKEN_NAME, refreshToken, {
      httpOnly: true,
      domain: this.configService.get<string>('CLIENT_DOMAIN'),
      expires: expiresIn,
      secure: true,
      sameSite: 'none',
    })
  }

  removeRedreshTokenToResponse(res: Response) {
    res.cookie(this.REFRESH_TOKEN_NAME, '', {
      httpOnly: true,
      domain: this.configService.get<string>('CLIENT_DOMAIN'),
      expires: new Date(0),
      secure: true,
      sameSite: 'none',
    })
  }
}
