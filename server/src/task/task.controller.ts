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
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { Task } from '@prisma/client'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { TaskDTO } from './dto/task.dto'
import { TaskService } from './task.service'

@ApiTags('Tasks')
@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @ApiResponse({
    status: 200,
    description: 'Tasks fetched successfully.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @Get()
  @Auth()
  async getAll(@CurrentUser('id') userID: string): Promise<Task[]> {
    return this.taskService.getAll(userID)
  }

  @ApiResponse({
    status: 201,
    description: 'Task created successfully.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @UsePipes(new ValidationPipe())
  @Post()
  @Auth()
  async create(
    @Body() dto: TaskDTO,
    @CurrentUser('id') userID: string,
  ): Promise<Task> {
    return this.taskService.create(dto, userID)
  }

  @ApiResponse({
    status: 201,
    description: 'Task updated successfully.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @UsePipes(new ValidationPipe())
  @Put(':id')
  @Auth()
  async update(
    @Body() dto: TaskDTO,
    @CurrentUser('id') userID: string,
    @Param('id') id: string,
  ): Promise<Task> {
    return this.taskService.update(dto, id, userID)
  }

  @ApiResponse({
    status: 204,
    description: 'Task deleted successfully.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @Delete(':id')
  @Auth()
  async delete(@Param('id') id: string): Promise<Task> {
    return this.taskService.delete(id)
  }
}
