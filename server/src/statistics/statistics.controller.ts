import { Controller, Get } from '@nestjs/common'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { StatisticsService } from './statistics.service'

@ApiTags('Statistics')
@Controller('statistics')
export class StatisticsController {
  constructor(private readonly statisticsService: StatisticsService) {}

  @ApiResponse({
    status: 200,
    description: 'Total tasks fetched successfully.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @Get('total-tasks')
  @Auth()
  async getTotalTasks(@CurrentUser('id') userID: string): Promise<number> {
    return this.statisticsService.getTotalTasks(userID)
  }

  @ApiResponse({
    status: 200,
    description: 'Completed tasks fetched successfully.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @Get('completed-tasks')
  @Auth()
  async getCompletedTasks(@CurrentUser('id') userID: string): Promise<number> {
    return this.statisticsService.getCompletedTasks(userID)
  }

  @ApiResponse({
    status: 200,
    description: 'Today tasks fetched successfully.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @Get('today-tasks')
  @Auth()
  async getTodayTasks(@CurrentUser('id') userID: string): Promise<number> {
    return this.statisticsService.getTodayTasks(userID)
  }

  @ApiResponse({
    status: 200,
    description: 'Week tasks fetched successfully.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @Get('week-tasks')
  @Auth()
  async getWeekTasks(@CurrentUser('id') userID: string): Promise<number> {
    return this.statisticsService.getWeekTasks(userID)
  }
}
