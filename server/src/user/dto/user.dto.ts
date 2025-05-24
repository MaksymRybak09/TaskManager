import { ApiProperty } from '@nestjs/swagger'
import { IsOptional, IsString, Matches, MinLength } from 'class-validator'
import { PomodoroSettingsDTO } from './pomodoro-settings.dto'

export class UserDTO extends PomodoroSettingsDTO {
  @ApiProperty({ example: 'Maksym Rybak' })
  @IsOptional()
  @IsString()
  name?: string

  @ApiProperty({ example: 'maksymrybak@gmail.com' })
  @IsOptional()
  @IsString()
  @Matches(/^[^\s@]+@[^\s@]+$/)
  email?: string

  @ApiProperty({ example: '123456' })
  @IsOptional()
  @IsString()
  @MinLength(6, {
    message: 'Password must be at least 6 characters long',
  })
  password?: string
}
