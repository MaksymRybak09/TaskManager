import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from './../prima.service'
import { PomodoroRoundDTO, PomodoroSessionDTO } from './dto/pomodoro.dto'

@Injectable()
export class PomodoroService {
  constructor(private prisma: PrismaService) {}

  async getTodaySession(userID: string) {
    const today = new Date().toISOString().split('T')[0]

    return this.prisma.pomodoroSession.findFirst({
      where: {
        createdAt: {
          gte: new Date(today),
        },
        userID,
      },
      include: {
        rounds: {
          orderBy: {
            id: 'asc',
          },
        },
      },
    })
  }

  async create(userID: string) {
    const todaySession = await this.getTodaySession(userID)

    if (todaySession) return todaySession

    const user = await this.prisma.user.findUnique({
      where: {
        id: userID,
      },
      select: {
        intervalsCount: true,
      },
    })

    if (!user) throw new NotFoundException('User not found')

    return this.prisma.pomodoroSession.create({
      data: {
        rounds: {
          createMany: {
            data: Array.from({ length: user.intervalsCount }, () => ({
              totalSeconds: 0,
            })),
          },
        },
        user: {
          connect: {
            id: userID,
          },
        },
      },
      include: {
        rounds: true,
      },
    })
  }

  async update(
    dto: Partial<PomodoroSessionDTO>,
    pomodoroId: string,
    userID: string,
  ) {
    return this.prisma.pomodoroSession.update({
      where: {
        userID,
        id: pomodoroId,
      },
      data: dto,
    })
  }

  async updateRound(dto: Partial<PomodoroRoundDTO>, roundId: string) {
    return this.prisma.pomodoroRound.update({
      where: {
        id: roundId,
      },
      data: dto,
    })
  }

  async deleteSession(sessionId: string, userID: string) {
    return this.prisma.pomodoroSession.delete({
      where: {
        id: sessionId,
        userID,
      },
    })
  }
}
