import { Injectable } from '@nestjs/common';
import { CreateEpisodeAudioDto } from './dto/create-episode-audio.dto';
import { UpdateEpisodeAudioDto } from './dto/update-episode-audio.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EpisodeAudioService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createEpisodeAudioDto: CreateEpisodeAudioDto) {
    const { ...data } = createEpisodeAudioDto;
    return await this.prismaService.episodeAudio.create({
      data: {
        ...data,
      },
    });
  }

  findAll() {
    return this.prismaService.episodeAudio.findMany();
  }

  findOne(id: number) {
    return this.prismaService.episodeAudio.findUnique({ where: { id } });
  }

  update(id: number, updateEpisodeAudioDto: UpdateEpisodeAudioDto) {
    return this.prismaService.episodeAudio.update({
      where: { id },
      data: updateEpisodeAudioDto,
    });
  }

  remove(id: number) {
    return this.prismaService.episodeAudio.delete({ where: { id } });
  }
}
