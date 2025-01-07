import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-jwt'
import { UserService } from 'src/user/user.service'
import { ExtractJwt } from './../../node_modules/@types/passport-jwt/index.d'

type ValidatePayload = {
  id: string
}

@Injectable()
export class JWTStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UserService,
  ) {
    super({
      JwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretKey: configService.get<string>('JWT_SECRET'),
    })
  }

  async validate(payload: ValidatePayload) {
    return this.userService.getByID(payload.id)
  }
}
