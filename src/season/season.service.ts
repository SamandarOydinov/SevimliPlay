import { Injectable } from '@nestjs/common';
import { CreateSeasonDto } from './dto/create-season.dto';
import { UpdateSeasonDto } from './dto/update-season.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SeasonService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createSeasonDto: CreateSeasonDto) {
    const { ...data } = createSeasonDto;
    return await this.prismaService.season.create({
      data: {
        ...data,
      },
    });
  }

  findAll() {
    return this.prismaService.season.findMany();
  }

  findOne(id: number) {
    return this.prismaService.season.findUnique({ where: { id } });
  }

  update(id: number, updateSeasonDto: UpdateSeasonDto) {
    return this.prismaService.season.update({
      where: { id },
      data: updateSeasonDto,
    });
  }

  remove(id: number) {
    return this.prismaService.season.delete({ where: { id } });
  }
}
