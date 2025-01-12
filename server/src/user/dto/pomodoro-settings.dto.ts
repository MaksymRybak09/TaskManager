import { IsNumber, IsOptional, Max, Min } from 'class-validator'

export class PomodoroSettingsDTO {
  @IsOptional()
  @IsNumber()
  @Min(1)
  workInerval?: number

  @IsOptional()
  @IsNumber()
  @Min(1)
  breakInerval?: number

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(10)
  inervalsCount?: number
}
