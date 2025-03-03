import { Injectable } from '@nestjs/common';
import { CreateAudioTrackDto } from './dto/create-audio-track.dto';
import { UpdateAudioTrackDto } from './dto/update-audio-track.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AudioTrackService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createAudioTrackDto: CreateAudioTrackDto) {
    const { ...data } = createAudioTrackDto;
    return await this.prismaService.audioTrack.create({
      data: {
        ...data,
      },
    });
  }

  findAll() {
    return this.prismaService.audioTrack.findMany();
  }

  findOne(id: number) {
    return this.prismaService.audioTrack.findUnique({ where: { id } });
  }

  update(id: number, updateAudioTrackDto: UpdateAudioTrackDto) {
    return this.prismaService.audioTrack.update({
      where: { id },
      data: updateAudioTrackDto,
    });
  }

  remove(id: number) {
    return this.prismaService.audioTrack.delete({ where: { id } });
  }
}
