import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProfileService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createProfileDto: CreateProfileDto) {
    const { ...data } = createProfileDto;
    return await this.prismaService.profile.create({
      data: {
        ...data,
      },
    });
  }

  findAll() {
    return this.prismaService.profile.findMany();
  }

  findOne(id: number) {
    return this.prismaService.profile.findUnique({ where: { id } });
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return this.prismaService.profile.update({
      where: { id },
      data: updateProfileDto,
    });
  }

  remove(id: number) {
    return this.prismaService.profile.delete({ where: { id } });
  }
}
