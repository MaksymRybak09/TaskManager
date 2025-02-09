import { ApiProperty } from '@nestjs/swagger'
import { Priority } from '@prisma/client'
import { Transform } from 'class-transformer'
import { IsBoolean, IsEnum, IsOptional, IsString } from 'class-validator'

export class TaskDTO {
  @ApiProperty({ example: 'To do something' })
  @IsString()
  @IsOptional()
  name: string

  @ApiProperty({ example: false })
  @IsBoolean()
  @IsOptional()
  isCompleted?: boolean

  @ApiProperty({ example: '2025-02-09T07:38:25.885Z' })
  @IsString()
  @IsOptional()
  createdAt?: string

  @ApiProperty({ example: 'LOW' })
  @IsEnum(Priority)
  @IsOptional()
  @Transform(({ value }) => ('' + value) as Priority)
  priority?: Priority
}
