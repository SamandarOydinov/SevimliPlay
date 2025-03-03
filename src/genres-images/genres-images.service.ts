import { Injectable } from '@nestjs/common';
import { CreateGenresImageDto } from './dto/create-genres-image.dto';
import { UpdateGenresImageDto } from './dto/update-genres-image.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class GenresImagesService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createGenresImageDto: CreateGenresImageDto) {
    const { ...data } = createGenresImageDto;
    return await this.prismaService.genresImages.create({
      data: {
        ...data,
      },
    });
  }

  findAll() {
    return this.prismaService.genresImages.findMany();
  }

  findOne(id: number) {
    return this.prismaService.genresImages.findUnique({ where: { id } });
  }

  update(id: number, updateGenresImageDto: UpdateGenresImageDto) {
    return this.prismaService.genresImages.update({
      where: { id },
      data: updateGenresImageDto,
    });
  }

  remove(id: number) {
    return this.prismaService.genresImages.delete({ where: { id } });
  }
}
