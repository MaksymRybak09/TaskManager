import { ApiProperty } from '@nestjs/swagger'
import { IsOptional, IsString } from 'class-validator'

export class AuthResponseDTO {
  @ApiProperty()
  user: any

  @ApiProperty()
  @IsString()
  accessToken: string

  @ApiProperty()
  @IsString()
  @IsOptional()
  refreshToken?: string
}
