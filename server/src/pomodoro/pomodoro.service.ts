import { Injectable, NotFoundException } from '@nestjs/common'
import { PomodoroTimer } from '@prisma/client'
import { UserService } from 'src/user/user.service'
import { PrismaService } from './../prima.service'
import { PomodoroTimerDTO } from './dto/pomodoro.dto'

@Injectable()
export class PomodoroService {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
  ) {}

  async getByUserID(userID: string): Promise<PomodoroTimer> {
    return this.prisma.pomodoroTimer.findFirst({
      where: {
        userID,
      },
    })
  }

  async create(userID: string): Promise<PomodoroTimer> {
    const timer = await this.getByUserID(userID)

    if (timer) return timer

    const user = await this.userService.getByID(userID)

    if (!user) throw new NotFoundException('User not found')

    return this.prisma.pomodoroTimer.create({
      data: {
        currentRound: 1,
        isWorkingTime: true,
        isCompleted: false,
        rounds: user.intervalsCount,
        user: {
          connect: {
            id: userID,
          },
        },
      },
    })
  }

  async update(
    dto: PomodoroTimerDTO,
    pomodoroId: string,
    userID: string,
  ): Promise<PomodoroTimer> {
    return this.prisma.pomodoroTimer.update({
      where: {
        userID,
        id: pomodoroId,
      },
      data: dto,
    })
  }

  async deleteTimer(sessionId: string, userID: string): Promise<PomodoroTimer> {
    return this.prisma.pomodoroTimer.delete({
      where: {
        id: sessionId,
        userID,
      },
    })
  }
}
