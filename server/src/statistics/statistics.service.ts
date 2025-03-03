import { forwardRef, Inject, Injectable } from '@nestjs/common'
import { addDays, startOfDay } from 'date-fns'
import { UserService } from 'src/user/user.service'
import { PrismaService } from '../prima.service'
import { StatisticsResponseDTO } from './dto/statistics.response.dto'

@Injectable()
export class StatisticsService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
  ) {}

  async getTotalTasks(userID: string): Promise<number> {
    return (await this.userService.getByID(userID)).tasks.length
  }

  async getCompletedTasks(userID: string): Promise<number> {
    return await this.prisma.task.count({
      where: { userID: userID, isCompleted: true },
    })
  }

  async getTodayTasks(userID: string): Promise<number> {
    const todayStart = startOfDay(new Date())

    return await this.prisma.task.count({
      where: { userID: userID, createdAt: todayStart.toISOString() },
    })
  }

  async getWeekTasks(userID: string): Promise<number> {
    const weekStart = startOfDay(addDays(new Date(), 7))

    return await this.prisma.task.count({
      where: {
        userID: userID,
        createdAt: { lte: weekStart.toISOString() },
        isCompleted: false,
      },
    })
  }

  async getFullStats(userID: string): Promise<StatisticsResponseDTO> {
    const totalTasks = await this.getTotalTasks(userID)
    const completedTasks = await this.getCompletedTasks(userID)
    const todayTasks = await this.getTodayTasks(userID)
    const weekTasks = await this.getWeekTasks(userID)

    return [
      {
        label: 'Total tasks',
        value: totalTasks,
      },
      {
        label: 'Completed tasks',
        value: completedTasks,
      },
      {
        label: "Today's tasks",
        value: todayTasks,
      },
      {
        label: "Week's tasks",
        value: weekTasks,
      },
    ]
  }
}
