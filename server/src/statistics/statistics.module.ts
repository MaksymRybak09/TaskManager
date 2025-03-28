import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prima.service'
import { UserModule } from 'src/user/user.module'
import { StatisticsController } from './statistics.controller'
import { StatisticsService } from './statistics.service'

@Module({
  imports: [UserModule],
  controllers: [StatisticsController],
  providers: [StatisticsService, PrismaService],
  exports: [StatisticsService],
})
export class StatisticsModule {}
