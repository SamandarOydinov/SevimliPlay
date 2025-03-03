import { Injectable } from '@nestjs/common';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LanguageService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createLanguageDto: CreateLanguageDto) {
    const { ...data } = createLanguageDto;
    return await this.prismaService.language.create({
      data: {
        ...data,
      },
    });
  }

  findAll() {
    return this.prismaService.language.findMany();
  }

  findOne(id: number) {
    return this.prismaService.language.findUnique({ where: { id } });
  }

  update(id: number, updateLanguageDto: UpdateLanguageDto) {
    return this.prismaService.language.update({
      where: { id },
      data: updateLanguageDto,
    });
  }

  remove(id: number) {
    return this.prismaService.language.delete({ where: { id } });
  }
}
