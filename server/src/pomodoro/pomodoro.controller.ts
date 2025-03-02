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
import { PomodoroTimer } from '@prisma/client'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { PomodoroTimerDTO } from './dto/pomodoro.dto'
import { PomodoroService } from './pomodoro.service'

@ApiTags('Timer')
@Controller('timer')
export class PomodoroController {
  constructor(private readonly pomodoroService: PomodoroService) {}

  @ApiResponse({
    status: 200,
    description: 'Pomodoro timer fetched successfully.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @Get()
  @Auth()
  async getTimerByUserID(
    @CurrentUser('id') userID: string,
  ): Promise<PomodoroTimer> {
    return this.pomodoroService.getByUserID(userID)
  }

  @ApiResponse({
    status: 201,
    description: 'Pomodoro timer created successfully.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 404, description: 'Not found.' })
  @Post()
  @Auth()
  async create(@CurrentUser('id') userID: string): Promise<PomodoroTimer> {
    return this.pomodoroService.create(userID)
  }

  @ApiResponse({
    status: 201,
    description: 'Pomodoro timer updated successfully.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @UsePipes(new ValidationPipe())
  @Put(':id')
  @Auth()
  async update(
    @Body() dto: PomodoroTimerDTO,
    @CurrentUser('id') userID: string,
    @Param('id') id: string,
  ): Promise<PomodoroTimer> {
    return this.pomodoroService.update(dto, id, userID)
  }

  @ApiResponse({
    status: 204,
    description: 'Timer deleted successfully.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @Delete(':id')
  @Auth()
  async deleteTimer(
    @Param('id') id: string,
    @CurrentUser('id') userID: string,
  ): Promise<PomodoroTimer> {
    return this.pomodoroService.deleteTimer(id, userID)
  }
}
