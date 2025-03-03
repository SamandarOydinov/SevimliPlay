import { Injectable } from '@nestjs/common';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RatingsService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createRatingDto: CreateRatingDto) {
    const { ...data } = createRatingDto;
    return await this.prismaService.ratings.create({
      data: {
        ...data,
      },
    });
  }

  findAll() {
    return this.prismaService.ratings.findMany();
  }

  findOne(id: number) {
    return this.prismaService.ratings.findUnique({ where: { id } });
  }

  update(id: number, updateRatingDto: UpdateRatingDto) {
    return this.prismaService.ratings.update({
      where: { id },
      data: updateRatingDto,
    });
  }

  remove(id: number) {
    return this.prismaService.ratings.delete({ where: { id } });
  }
}
