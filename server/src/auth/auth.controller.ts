import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  Res,
  UnauthorizedException,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { Request, Response } from 'express'
import { AuthService } from './auth.service'
import { AuthDTO } from './dto/auth.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('register')
  async register(
    @Body() dto: AuthDTO,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { refreshToken, ...response } = await this.authService.register(dto)
    this.authService.addRedreshTokenToResponse(res, refreshToken)

    return response
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('log-in')
  async logIn(@Body() dto: AuthDTO, @Res({ passthrough: true }) res: Response) {
    const { refreshToken, ...response } = await this.authService.logIn(dto)
    this.authService.addRedreshTokenToResponse(res, refreshToken)

    return response
  }

  @HttpCode(200)
  @Get('log-in/access-token')
  async getNewToken(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const refreshTokenFromCookies =
      req.cookies[this.authService.REFRESH_TOKEN_NAME]

    if (!refreshTokenFromCookies) {
      this.authService.removeRedreshTokenToResponse(res)
      throw new UnauthorizedException('Refresh token not passed')
    }

    const { refreshToken, ...response } = await this.authService.getNewTokens(
      refreshTokenFromCookies,
    )

    this.authService.addRedreshTokenToResponse(res, refreshToken)

    return response
  }

  @HttpCode(200)
  @Get('log-out')
  async logOut(@Res({ passthrough: true }) res: Response) {
    this.authService.removeRedreshTokenToResponse(res)
    return true
  }
}
