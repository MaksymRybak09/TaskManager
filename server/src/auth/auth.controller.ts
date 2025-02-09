import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UnauthorizedException,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { ApiTags, ApiResponse } from '@nestjs/swagger'
import { Request, Response } from 'express'
import { AuthService } from './auth.service'
import { AuthDTO } from './dto/auth.dto'
import { AuthResponseDTO } from './dto/auth.response.dto'

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiResponse({
    status: 201,
    description: 'User registered successfully.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @UsePipes(new ValidationPipe())
  @Post('register')
  async register(
    @Body() dto: AuthDTO,
    @Res({ passthrough: true }) res: Response,
  ): Promise<AuthResponseDTO> {
    const { refreshToken, ...response } = await this.authService.register(dto)
    this.authService.addRefreshTokenToResponse(res, refreshToken)

    return response
  }

  @ApiResponse({
    status: 200,
    description: 'User log-ined successfully.',
  })
  @ApiResponse({ status: 404, description: 'User not found.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @UsePipes(new ValidationPipe())
  @Post('log-in')
  async logIn(
    @Body() dto: AuthDTO,
    @Res({ passthrough: true }) res: Response,
  ): Promise<AuthResponseDTO> {
    const { refreshToken, ...response } = await this.authService.logIn(dto)
    this.authService.addRefreshTokenToResponse(res, refreshToken)

    return response
  }

  @ApiResponse({
    status: 200,
    description: 'New token isued.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @Get('log-in/access-token')
  async getNewToken(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ): Promise<AuthResponseDTO> {
    const refreshTokenFromCookies = req.cookies[process.env.REFRESH_TOKEN_NAME]

    if (!refreshTokenFromCookies) {
      this.authService.removeRefreshTokenToResponse(res)
      throw new UnauthorizedException('Refresh token not passed')
    }

    const { refreshToken, ...response } = await this.authService.getNewTokens(
      refreshTokenFromCookies,
    )

    this.authService.addRefreshTokenToResponse(res, refreshToken)

    return response
  }

  @ApiResponse({
    status: 200,
    description: 'User log-outed successfully.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @Get('log-out')
  async logOut(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ): Promise<{ message: string }> {
    const refreshTokenFromCookies = req.cookies[process.env.REFRESH_TOKEN_NAME]

    if (!refreshTokenFromCookies) {
      throw new UnauthorizedException('Refresh token not passed')
    }

    this.authService.removeRefreshTokenToResponse(res)
    return { message: 'Logged out successfully' }
  }
}
