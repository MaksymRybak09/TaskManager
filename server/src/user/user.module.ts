import { Module, forwardRef } from '@nestjs/common'
import { StatisticsModule } from 'src/statistics/statistics.module'
import { PrismaService } from '../prima.service'
import { UserController } from './user.controller'
import { UserService } from './user.service'

@Module({
  imports: [forwardRef(() => StatisticsModule)],
  controllers: [UserController],
  providers: [UserService, PrismaService],
  exports: [UserService],
})
export class UserModule {}
