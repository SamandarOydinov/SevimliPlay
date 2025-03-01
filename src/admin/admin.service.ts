import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from "bcrypt"

@Injectable()
export class AdminService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createAdminDto: CreateAdminDto) {
    const { password, confirm_password, ...data } = createAdminDto;
    if (password !== confirm_password) {
      throw new BadRequestException('Parollar mos kelmadi');
    }
    const hashedPassword = await bcrypt.hash(password, 7);

    const admin = await this.prismaService.admin.create({
      data: { ...data, hashedPassword: hashedPassword },
    });

    return admin;
  }

  async updateRefreshToken(id: number, hashed_refresh_token: string | null) {
    const updatedAdmin = await this.prismaService.admin.update({
      data: { hashedToken: hashed_refresh_token },
      where: { id },
    });
    return updatedAdmin;
  }

  async findOneByEmail(email: string) {
    return this.prismaService.admin.findUnique({ where: { email } });
  }

  findAll() {
    return this.prismaService.admin.findMany();
  }

  findOne(id: number) {
    return this.prismaService.admin.findUnique({ where: { id } });
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return this.prismaService.admin.update({
      where: { id },
      data: { ...updateAdminDto },
    });
  }

  remove(id: number) {
    return this.prismaService.admin.delete({ where: { id } });
  }
}
