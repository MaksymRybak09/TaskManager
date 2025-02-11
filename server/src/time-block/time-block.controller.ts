import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
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

  @ApiResponse({
    status: 200,
    description: 'Time blocks fetched successfully.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @Get()
  @Auth()
  async getAll(@CurrentUser('id') userID: string): Promise<TimeBlock[]> {
    return this.timeBlockService.getAll(userID)
  }

  @ApiResponse({
    status: 201,
    description: 'Time block created successfully.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @UsePipes(new ValidationPipe())
  @Post()
  @Auth()
  async create(
    @Body() dto: TimeBlockDTO,
    @CurrentUser('id') userID: string,
  ): Promise<TimeBlock> {
    return this.timeBlockService.create(dto, userID)
  }

  @ApiResponse({
    status: 201,
    description: 'Time blocks order updated successfully.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @UsePipes(new ValidationPipe())
  @Put('update-order')
  @Auth()
  updateOrder(@Body() updateOrderDto: UpdateOrderDTO): Promise<TimeBlock[]> {
    return this.timeBlockService.updateOrder(updateOrderDto.ids)
  }

  @ApiResponse({
    status: 201,
    description: 'Time block updated successfully.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @UsePipes(new ValidationPipe())
  @Put(':id')
  @Auth()
  async update(
    @Body() dto: Partial<TimeBlockDTO>,
    @CurrentUser('id') userID: string,
    @Param('id') id: string,
  ): Promise<TimeBlock> {
    return this.timeBlockService.update(dto, id, userID)
  }

  @ApiResponse({
    status: 204,
    description: 'Time block deleted successfully.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @Delete(':id')
  @Auth()
  async delete(
    @CurrentUser('id') userID: string,
    @Param('id') id: string,
  ): Promise<TimeBlock> {
    return this.timeBlockService.delete(id, userID)
  }
}
