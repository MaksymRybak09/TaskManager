import { ApiProperty } from '@nestjs/swagger'
import { IsOptional, IsString, Matches, MinLength } from 'class-validator'

export class AuthDTO {
  @ApiProperty({ example: 'maksym' })
  @IsString()
  @IsOptional()
  name: string

  @ApiProperty({ example: 'maksymrybak@gmail.com' })
  @IsString()
  @Matches(/^[^\s@]+@[^\s@]+$/)
  email: string

  @ApiProperty({ example: '123456' })
  @IsString()
  @MinLength(6, {
    message: 'Password must be at least 6 characters long',
  })
  password: string
}
