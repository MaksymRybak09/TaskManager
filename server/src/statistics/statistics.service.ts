import { forwardRef, Inject, Injectable } from '@nestjs/common'
import { startOfDay, subDays } from 'date-fns'
import { UserService } from 'src/user/user.service'
import { PrismaService } from '../prima.service'

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
      where: { userID: userID, createdAt: { gte: todayStart.toISOString() } },
    })
  }

  async getWeekTasks(userID: string): Promise<number> {
    const weekStart = startOfDay(subDays(new Date(), 7))

    return await this.prisma.task.count({
      where: { userID: userID, createdAt: { gte: weekStart.toISOString() } },
    })
  }
}
