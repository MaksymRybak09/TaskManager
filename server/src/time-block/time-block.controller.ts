import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { TimeBlock } from '@prisma/client'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { TimeBlockDTO } from './dto/time-block.dto'
import { UpdateOrderDTO } from './dto/update-order.dto'
import { TimeBlockService } from './time-block.service'

@ApiTags('Time blocks')
@Controller('time-blocks')
export class TimeBlockController {
  constructor(private readonly timeBlockService: TimeBlockService) {}

  @Get()
  @Auth()
  async getAll(@CurrentUser('id') userID: string): Promise<TimeBlock[]> {
    return this.timeBlockService.getAll(userID)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post()
  @Auth()
  async create(
    @Body() dto: TimeBlockDTO,
    @CurrentUser('id') userID: string,
  ): Promise<TimeBlock> {
    return this.timeBlockService.create(dto, userID)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put('update-order')
  @Auth()
  updateOrder(@Body() updateOrderDto: UpdateOrderDTO): Promise<TimeBlock[]> {
    return this.timeBlockService.updateOrder(updateOrderDto.ids)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(':id')
  @Auth()
  async update(
    @Body() dto: TimeBlockDTO,
    @CurrentUser('id') userID: string,
    @Param('id') id: string,
  ): Promise<TimeBlock> {
    return this.timeBlockService.update(dto, id, userID)
  }

  @HttpCode(200)
  @Delete(':id')
  @Auth()
  async delete(
    @CurrentUser('id') userID: string,
    @Param('id') id: string,
  ): Promise<TimeBlock> {
    return this.timeBlockService.delete(id, userID)
  }
}
