import { Priority } from '@prisma/client'
import { Transform } from 'class-transformer'
import { IsBoolean, IsEnum, IsOptional, IsString } from 'class-validator'

export class TaskDTO {
  @IsString()
  @IsOptional()
  name: string

  @IsBoolean()
  @IsOptional()
  isCompleted?: boolean

  @IsString()
  @IsOptional()
  createdAt?: string

  @IsEnum(Priority)
  @IsOptional()
  @Transform(({ value }) => ('' + value) as Priority)
  priority?: Priority
}
