import { Injectable } from '@nestjs/common'
import { AuthDTO } from 'src/auth/dto/auth.dto'
import { PrismaService } from '../prima.service'
import { hash } from 'argon2'

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async createUser(dto: AuthDTO) {
    const user = {
      name: '',
      email: dto.email,
      password: await hash(dto.password),
    }
    return this.prisma.user.create({ data: user })
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
}
