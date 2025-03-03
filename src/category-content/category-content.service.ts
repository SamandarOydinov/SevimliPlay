import { Injectable } from '@nestjs/common';
import { CreateCategoryContentDto } from './dto/create-category-content.dto';
import { UpdateCategoryContentDto } from './dto/update-category-content.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CategoryContentService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createCategoryContentDto: CreateCategoryContentDto) {
    const { ...data } = createCategoryContentDto;
    return await this.prismaService.categoryContent.create({
      data: {
        ...data,
      },
    });
  }

  findAll() {
    return this.prismaService.categoryContent.findMany();
  }

  findOne(id: number) {
    return this.prismaService.categoryContent.findUnique({ where: { id } });
  }

  update(id: number, updateCategoryContentDto: UpdateCategoryContentDto) {
    return this.prismaService.categoryContent.update({
      where: { id },
      data: updateCategoryContentDto,
    });
  }

  remove(id: number) {
    return this.prismaService.categoryContent.delete({ where: { id } });
  }
}
