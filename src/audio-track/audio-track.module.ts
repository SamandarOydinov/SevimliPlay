import { Module } from '@nestjs/common';
import { AudioTrackService } from './audio-track.service';
import { AudioTrackController } from './audio-track.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AudioTrackController],
  providers: [AudioTrackService],
})
export class AudioTrackModule {}
