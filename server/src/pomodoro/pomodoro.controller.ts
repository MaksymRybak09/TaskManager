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
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { PomodoroRoundDTO, PomodoroSessionDTO } from './dto/pomodoro.dto'
import { PomodoroService } from './pomodoro.service'

@Controller('timer')
export class PomodoroController {
  constructor(private readonly pomodoroService: PomodoroService) {}

  @Get('today')
  @Auth()
  async getTodaySession(@CurrentUser('id') userID: string) {
    return this.pomodoroService.getTodaySession(userID)
  }

  @HttpCode(200)
  @Post()
  @Auth()
  async create(@CurrentUser('id') userID: string) {
    return this.pomodoroService.create(userID)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put('/round/:id')
  @Auth()
  async updateRound(@Param('id') id: string, @Body() dto: PomodoroRoundDTO) {
    return this.pomodoroService.updateRound(dto, id)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(':id')
  @Auth()
  async update(
    @Body() dto: PomodoroSessionDTO,
    @CurrentUser('id') userID: string,
    @Param('id') id: string,
  ) {
    return this.pomodoroService.update(dto, id, userID)
  }

  @HttpCode(200)
  @Delete(':id')
  @Auth()
  async deleteSession(
    @Param('id') id: string,
    @CurrentUser('id') userID: string,
  ) {
    return this.pomodoroService.deleteSession(id, userID)
  }
}
