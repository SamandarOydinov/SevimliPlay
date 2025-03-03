import { Injectable } from '@nestjs/common';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ContentService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createContentDto: CreateContentDto) {
    const { ...data } = createContentDto;
    return await this.prismaService.content.create({
      data: {
        ...data,
      },
    });
  }

  findAll() {
    return this.prismaService.content.findMany();
  }

  findOne(id: number) {
    return this.prismaService.content.findUnique({ where: { id } });
  }

  update(id: number, updateContentDto: UpdateContentDto) {
    return this.prismaService.content.update({
      where: { id },
      data: updateContentDto,
    });
  }

  remove(id: number) {
    return this.prismaService.content.delete({ where: { id } });
  }
}
