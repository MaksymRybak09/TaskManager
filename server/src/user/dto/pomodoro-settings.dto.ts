import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsOptional, Max, Min } from 'class-validator'

export class PomodoroSettingsDTO {
  @ApiProperty({ example: 60 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  workInterval?: number

  @ApiProperty({ example: 60 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  breakInterval?: number

  @ApiProperty({ example: 3 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(10)
  intervalsCount?: number
}
