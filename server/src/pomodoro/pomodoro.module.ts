import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prima.service'
import { UserModule } from 'src/user/user.module'
import { PomodoroController } from './pomodoro.controller'
import { PomodoroService } from './pomodoro.service'

@Module({
  imports: [UserModule],
  controllers: [PomodoroController],
  providers: [PomodoroService, PrismaService],
  exports: [PomodoroService],
})
export class PomodoroModule {}
