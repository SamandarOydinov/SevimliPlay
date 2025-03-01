import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from "bcrypt"

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    const { password, confirm_password, ...data } = createUserDto;
    if (password !== confirm_password) {
      throw new BadRequestException('Parollar mos emas');
    }

    const hashedPassword = await bcrypt.hash(password, 7);
    const user = await this.prismaService.user.create({
      data: {
        ...data,
        hashedPassword: hashedPassword,
      },
    });

    return user
  }

  async updateRefreshToken(id: number, hashed_refresh_token: string | null) {
    const updatedUser = await this.prismaService.user.update({
      data: { hashedToken: hashed_refresh_token },
      where: { id },
    });
    return updatedUser;
  }

  async findOneByEmail(email: string) {
    return this.prismaService.user.findUnique({ where: { email } });
  }

  findAll() {
    return this.prismaService.user.findMany()
  }

  async findOne(id: number) {
    return await this.prismaService.user.findUnique({where: {id}})
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prismaService.user.update({
      where: { id },
      data: { ...updateUserDto },
    });
  }

  remove(id: number) {
    return this.prismaService.user.delete({ where: { id } });
  }
}
