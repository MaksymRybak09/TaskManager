import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsOptional, IsString } from 'class-validator'

export class TimeBlockDTO {
  @ApiProperty({ example: 'Work' })
  @IsString()
  name: string

  @ApiProperty({ example: '#000' })
  @IsOptional()
  @IsString()
  color?: string

  @ApiProperty({ example: 360 })
  @IsNumber()
  duration: number

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsOptional()
  order: number
}
