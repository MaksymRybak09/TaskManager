import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsString } from 'class-validator'

export class UpdateOrderDTO {
  @ApiProperty({ example: [1, 2, 3, 4] })
  @IsArray()
  @IsString({ each: true })
  ids: string[]
}
