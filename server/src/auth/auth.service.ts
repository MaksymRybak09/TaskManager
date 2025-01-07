import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UserService } from '../user/user.service'
import { AuthDTO } from './dto/auth.dto'
import { verify } from 'argon2'

@Injectable()
export class AuthService {
  constructor(
    private readonly JWTservice: JwtService,
    private readonly userService: UserService,
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
      tokens,
    }
  }

  async logIn(dto: AuthDTO) {
    const { password, ...user } = await this.validateUser(dto)
    const tokens = this.issueTokens(user.id)

    return {
      user,
      tokens,
    }
  }
}
