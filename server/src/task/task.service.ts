import { Injectable } from '@nestjs/common'
import { Task } from '@prisma/client'
import { PrismaService } from './../prima.service'
import { TaskDTO } from './dto/task.dto'

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async getAll(userID: string): Promise<Task[]> {
    return this.prisma.task.findMany({
      where: {
        userID,
      },
    })
  }

  async create(dto: TaskDTO, userID: string): Promise<Task> {
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

  async update(
    dto: Partial<TaskDTO>,
    taskId: string,
    userID: string,
  ): Promise<Task> {
    return this.prisma.task.update({
      where: {
        userID,
        id: taskId,
      },
      data: dto,
    })
  }

  async delete(taskId: string): Promise<Task> {
    return this.prisma.task.delete({
      where: {
        id: taskId,
      },
    })
  }
}
