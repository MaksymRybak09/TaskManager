import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator'
import { PomodoroSettingsDTO } from './pomodoro-settings.dto'
import { ApiProperty } from '@nestjs/swagger'

export class UserDTO extends PomodoroSettingsDTO {
  @ApiProperty({ example: 'Maksym Rybak' })
  @IsOptional()
  @IsString()
  name?: string

  @ApiProperty({ example: 'maksymrybak@gmail.com' })
  @IsOptional()
  @IsString()
  @IsEmail()
  email?: string

  @ApiProperty({ example: '123456' })
  @IsOptional()
  @IsString()
  @MinLength(6, {
    message: 'Password must be at least 6 characters long',
  })
  password?: string
}
