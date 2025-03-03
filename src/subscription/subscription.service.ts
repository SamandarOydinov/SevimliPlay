import { Injectable } from '@nestjs/common';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class SubscriptionService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createSubscriptionDto: CreateSubscriptionDto) {
    const { ...data } = createSubscriptionDto;
    return await this.prismaService.subscription.create({
      data: {
        ...data
      },
    });
  }

  findAll() {
    return this.prismaService.subscription.findMany();
  }

  findOne(id: number) {
    return this.prismaService.subscription.findUnique({ where: { id } });
  }

  update(id: number, updateSubscriptionDto: UpdateSubscriptionDto) {
    return this.prismaService.subscription.update({
      where: { id },
      data: updateSubscriptionDto,
    });
  }

  remove(id: number) {
    return this.prismaService.subscription.delete({ where: { id } });
  }
}
