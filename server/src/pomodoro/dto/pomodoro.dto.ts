import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsNumber, IsOptional } from 'class-validator'

export class PomodoroSessionDTO {
  @ApiProperty({ example: false })
  @IsOptional()
  @IsBoolean()
  isCompleted: boolean
}

export class PomodoroRoundDTO {
  @ApiProperty({ example: 60 })
  @IsNumber()
  totalSeconds: number

  @ApiProperty({ example: false })
  @IsOptional()
  @IsBoolean()
  isCompleted: boolean
}
