import { forwardRef, Inject, Injectable } from '@nestjs/common'
import { hash } from 'argon2'
import { AuthDTO } from 'src/auth/dto/auth.dto'
import { StatisticsService } from 'src/statistics/statistics.service'
import { PrismaService } from '../prima.service'
import { UserDTO } from './dto/user.dto'

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject(forwardRef(() => StatisticsService))
    private readonly statisticsService: StatisticsService,
  ) {}

  async createUser(dto: AuthDTO) {
    const user = {
      name: '',
      email: dto.email,
      password: await hash(dto.password),
    }
    return this.prisma.user.create({ data: user })
  }

  async updateUser(id: string, dto: UserDTO) {
    let data = dto

    if (dto.password) {
      data = { ...dto, password: await hash(dto.password) }
    }

    return this.prisma.user.update({
      where: { id },
      data,
      select: {
        name: true,
        email: true,
      },
    })
  }

  async getByID(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      include: {
        tasks: true,
      },
    })
  }

  async getByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    })
  }

  async getProfile(id: string) {
    const profile = await this.getByID(id)

    const totalTasks = this.statisticsService.getTotalTasks(id)
    const completedTasks = this.statisticsService.getCompletedTasks(id)
    const todayTasks = this.statisticsService.getTodayTasks(id)
    const weekTasks = this.statisticsService.getWeekTasks(id)

    const { password, ...rest } = profile

    return {
      user: rest,
      statistics: [
        { label: 'Total', value: totalTasks },
        { label: 'Completed tasks', value: completedTasks },
        { label: 'Today tasks', value: todayTasks },
        { label: 'Week tasks', value: weekTasks },
      ],
    }
  }
}
