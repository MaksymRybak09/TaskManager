import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from 'src/auth/auth.module'
import { TaskModule } from 'src/task/task.module'
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
  ],
})
export class AppModule {}
