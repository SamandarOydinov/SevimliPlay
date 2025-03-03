import { Module } from '@nestjs/common';
import { EpisodeAudioService } from './episode-audio.service';
import { EpisodeAudioController } from './episode-audio.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [EpisodeAudioController],
  providers: [EpisodeAudioService],
})
export class EpisodeAudioModule {}
