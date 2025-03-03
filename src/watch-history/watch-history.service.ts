import { Injectable } from '@nestjs/common';
import { CreateWatchHistoryDto } from './dto/create-watch-history.dto';
import { UpdateWatchHistoryDto } from './dto/update-watch-history.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WatchHistoryService {
  constructor(private readonly prismaService: PrismaService) {}
    async create(createWatchHistoryDto: CreateWatchHistoryDto) {
      const { ...data } = createWatchHistoryDto;
      return await this.prismaService.watchHistory.create({
        data: {
          ...data,
        },
      });
    }
  
    findAll() {
      return this.prismaService.watchHistory.findMany();
    }
  
    findOne(id: number) {
      return this.prismaService.watchHistory.findUnique({ where: { id } });
    }
  
    update(id: number, updateWatchHistoryDto: UpdateWatchHistoryDto) {
      return this.prismaService.watchHistory.update({
        where: { id },
        data: updateWatchHistoryDto,
      });
    }
  
    remove(id: number) {
      return this.prismaService.watchHistory.delete({ where: { id } });
    }
}
