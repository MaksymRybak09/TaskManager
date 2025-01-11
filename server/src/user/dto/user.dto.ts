import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator'
import { PomodoroSettingsDTO } from './pomodoro-settings.dto'

export class UserDTO extends PomodoroSettingsDTO {
  @IsOptional()
  @IsString()
  name?: string

  @IsOptional()
  @IsString()
  @IsEmail()
  email?: string

  @IsOptional()
  @IsString()
  @MinLength(6, {
    message: 'Password must be at least 6 characters long',
  })
  password?: string
}
