import { Injectable } from '@nestjs/common';
import { CreateBillingHistoryDto } from './dto/create-billing_history.dto';
import { UpdateBillingHistoryDto } from './dto/update-billing_history.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BillingHistoryService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createBillingHistoryDto: CreateBillingHistoryDto) {
    const { ...data } = createBillingHistoryDto;
    return await this.prismaService.billingHistory.create({ data: { ...data } });
  }

  findAll() {
    return this.prismaService.billingHistory.findMany();
  }

  findOne(id: number) {
    return this.prismaService.billingHistory.findUnique({ where: { id } });
  }

  update(id: number, updateBillingHistoryDto: UpdateBillingHistoryDto) {
    return this.prismaService.billingHistory.update({
      where: { id },
      data: updateBillingHistoryDto,
    });
  }

  remove(id: number) {
    return this.prismaService.billingHistory.delete({ where: { id } });
  }
}
