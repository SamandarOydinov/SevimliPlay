import { Injectable } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class GenresService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createGenreDto: CreateGenreDto) {
    const { ...data } = createGenreDto;
    return await this.prismaService.genres.create({
      data: {
        ...data,
      },
    });
  }

  findAll() {
    return this.prismaService.genres.findMany();
  }

  findOne(id: number) {
    return this.prismaService.genres.findUnique({ where: { id } });
  }

  update(id: number, updateGenreDto: UpdateGenreDto) {
    return this.prismaService.genres.update({
      where: { id },
      data: updateGenreDto,
    });
  }

  remove(id: number) {
    return this.prismaService.genres.delete({ where: { id } });
  }
}
