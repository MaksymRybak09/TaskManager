import { Module, forwardRef } from '@nestjs/common'
import { UserModule } from 'src/user/user.module'
import { StatisticsService } from './statistics.service'
import { PrismaService } from 'src/prima.service'

@Module({
  imports: [forwardRef(() => UserModule)],
  providers: [StatisticsService, PrismaService],
  exports: [StatisticsService],
})
export class StatisticsModule {}
