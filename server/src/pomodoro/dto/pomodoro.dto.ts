import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsNumber, IsOptional } from 'class-validator'

export class PomodoroTimerDTO {
  @ApiProperty({ example: false })
  @IsOptional()
  @IsBoolean()
  isCompleted?: boolean

  @ApiProperty({ example: 2 })
  @IsOptional()
  @IsNumber()
  currentRound?: number

  @ApiProperty({ example: true })
  @IsOptional()
  @IsBoolean()
  isWorkingTime?: boolean
}
