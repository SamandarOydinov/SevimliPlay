import { Injectable } from '@nestjs/common';
import { CreateSubscriptionPlanDto } from './dto/create-subscription_plan.dto';
import { UpdateSubscriptionPlanDto } from './dto/update-subscription_plan.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SubscriptionPlansService {
  constructor(private readonly prismaService: PrismaService) {}
    async create(createSubscriptionPlanDto: CreateSubscriptionPlanDto) {
      const { ...data } = createSubscriptionPlanDto;
      return await this.prismaService.subscriptionPlans.create({
        data: {
          ...data
        },
      });
    }
  
    findAll() {
      return this.prismaService.subscriptionPlans.findMany();
    }
  
    findOne(id: number) {
      return this.prismaService.subscriptionPlans.findUnique({ where: { id } });
    }
  
    update(id: number, updateSubscriptionPlanDto: UpdateSubscriptionPlanDto) {
      return this.prismaService.subscriptionPlans.update({
        where: { id },
        data: updateSubscriptionPlanDto,
      });
    }
  
    remove(id: number) {
      return this.prismaService.subscription.delete({ where: { id } });
    }
}
