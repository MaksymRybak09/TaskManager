import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { validationSchema } from './../config/config-service.config'
import { UserModule } from 'src/user/user.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema,
    }),
    UserModule,
  ],
})
export class AppModule {}
