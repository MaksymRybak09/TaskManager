import { Injectable } from '@nestjs/common'
import { PrismaService } from './../prima.service'
import { TimeBlockDTO } from './dto/time-block.dto'
import { TimeBlock } from '@prisma/client'

@Injectable()
export class TimeBlockService {
  constructor(private prisma: PrismaService) {}

  async getAll(userID: string): Promise<TimeBlock[]> {
    return this.prisma.timeBlock.findMany({
      where: {
        userID,
      },
      orderBy: {
        order: 'asc',
      },
    })
  }

  async create(dto: TimeBlockDTO, userID: string): Promise<TimeBlock> {
    return this.prisma.timeBlock.create({
      data: {
        ...dto,
        color: dto.color || '#FFFFFF',
        user: {
          connect: {
            id: userID,
          },
        },
      },
    })
  }

  async update(
    dto: Partial<TimeBlockDTO>,
    timeBlockId: string,
    userID: string,
  ): Promise<TimeBlock> {
    return this.prisma.timeBlock.update({
      where: {
        userID,
        id: timeBlockId,
      },
      data: dto,
    })
  }

  async delete(timeBlockId: string, userID: string): Promise<TimeBlock> {
    return this.prisma.timeBlock.delete({
      where: {
        id: timeBlockId,
        userID,
      },
    })
  }

  async updateOrder(ids: string[]): Promise<TimeBlock[]> {
    return this.prisma.$transaction(
      ids.map((id, order) =>
        this.prisma.timeBlock.update({
          where: { id },
          data: { order },
        }),
      ),
    )
  }
}
