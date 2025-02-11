import { Injectable } from '@nestjs/common'
import { Task, User } from '@prisma/client'
import { hash } from 'argon2'
import { AuthDTO } from 'src/auth/dto/auth.dto'
import { PrismaService } from '../prima.service'
import { UserDTO } from './dto/user.dto'

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(dto: AuthDTO): Promise<User> {
    const user = {
      name: '',
      email: dto.email,
      password: await hash(dto.password),
    }
    return this.prisma.user.create({ data: user })
  }

  async updateUser(id: string, dto: UserDTO): Promise<UserDTO> {
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

  async getByID(id: string): Promise<User & { tasks: Task[] }> {
    return this.prisma.user.findUnique({
      where: { id },
      include: {
        tasks: true,
      },
    })
  }

  async getByEmail(email: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: { email },
    })
  }
}
