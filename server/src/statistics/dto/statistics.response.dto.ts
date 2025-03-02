import { ApiProperty } from '@nestjs/swagger'
import { IsNumber } from 'class-validator'

export class StatisticsResponseDTO {
  @ApiProperty({ example: 4 })
  @IsNumber()
  totalTasks: number

  @ApiProperty({ example: 3 })
  @IsNumber()
  completedTasks: number

  @ApiProperty({ example: 2 })
  @IsNumber()
  todayTasks: number

  @ApiProperty({ example: 5 })
  @IsNumber()
  weekTasks: number
}
