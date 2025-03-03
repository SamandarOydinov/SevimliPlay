import { Injectable } from '@nestjs/common';
import { CreateSearchHistoryDto } from './dto/create-search-history.dto';
import { UpdateSearchHistoryDto } from './dto/update-search-history.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SearchHistoryService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createSearchHistoryDto: CreateSearchHistoryDto) {
    const { ...data } = createSearchHistoryDto;
    return await this.prismaService.searchHistory.create({
      data: {
        ...data,
      },
    });
  }

  findAll() {
    return this.prismaService.searchHistory.findMany();
  }

  findOne(id: number) {
    return this.prismaService.searchHistory.findUnique({ where: { id } });
  }

  update(id: number, updateSearchHistoryDto: UpdateSearchHistoryDto) {
    return this.prismaService.searchHistory.update({
      where: { id },
      data: updateSearchHistoryDto,
    });
  }

  remove(id: number) {
    return this.prismaService.searchHistory.delete({ where: { id } });
  }
}
