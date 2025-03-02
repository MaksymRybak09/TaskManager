import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from 'src/auth/auth.module'
import { PomodoroModule } from 'src/pomodoro/pomodoro.module'
import { StatisticsModule } from 'src/statistics/statistics.module'
import { TaskModule } from 'src/task/task.module'
import { TimeBlockModule } from 'src/time-block/time-block.module'
import { UserModule } from 'src/user/user.module'
import { validationSchema } from './../config/config-service.config'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema,
    }),
    AuthModule,
    UserModule,
    TaskModule,
    TimeBlockModule,
    PomodoroModule,
    StatisticsModule,
  ],
})
export class AppModule {}
