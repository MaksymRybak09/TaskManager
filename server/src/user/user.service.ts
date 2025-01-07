import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prima.service'

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getByID(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      include: {
        tasks: true,
      },
    })
  }
}
