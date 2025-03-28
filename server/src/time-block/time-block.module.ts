import { Module } from '@nestjs/common'
import { PrismaService } from './../prima.service'
import { TimeBlockController } from './time-block.controller'
import { TimeBlockService } from './time-block.service'

@Module({
  controllers: [TimeBlockController],
  providers: [TimeBlockService, PrismaService],
  exports: [TimeBlockService],
})
export class TimeBlockModule {}
