import { Injectable } from '@nestjs/common';
import { CreatePaymentMethodDto } from './dto/create-payment_method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment_method.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PaymentMethodService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createPaymentMethodDto: CreatePaymentMethodDto) {
    const { ...data } = createPaymentMethodDto
    return await this.prismaService.paymentMethod.create({data: {...data}})
  }

  findAll() {
    return this.prismaService.paymentMethod.findMany()
  }

  findOne(id: number) {
    return this.prismaService.paymentMethod.findUnique({where: {id}})
  }

  update(id: number, updatePaymentMethodDto: UpdatePaymentMethodDto) {
    return this.prismaService.paymentMethod.update({where: {id}, data: updatePaymentMethodDto})
  }

  remove(id: number) {
    return this.prismaService.paymentMethod.delete({where: {id}})
  }
}