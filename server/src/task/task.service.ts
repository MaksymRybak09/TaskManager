import { Injectable } from '@nestjs/common'
import { PrismaService } from './../prima.service'
import { TaskDTO } from './dto/task.dto'

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async getAll(userID: string) {
    return this.prisma.task.findMany({
      where: {
        userID,
      },
    })
  }

  async create(dto: TaskDTO, userID: string) {
    return this.prisma.task.create({
      data: {
        ...dto,
        user: {
          connect: {
            id: userID,
          },
        },
      },
    })
  }

  async update(dto: Partial<TaskDTO>, taskId: string, userID: string) {
    return this.prisma.task.update({
      where: {
        userID,
        id: taskId,
      },
      data: dto,
    })
  }

  async delete(taskId: string) {
    return this.prisma.task.delete({
      where: {
        id: taskId,
      },
    })
  }
}
