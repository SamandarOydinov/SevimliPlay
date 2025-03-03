import { Injectable } from '@nestjs/common';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DeviceService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createDeviceDto: CreateDeviceDto) {
    const { ...data } = createDeviceDto;
    return await this.prismaService.devices.create({ data: { ...data } });
  }

  findAll() {
    return this.prismaService.devices.findMany();
  }

  findOne(id: number) {
    return this.prismaService.devices.findUnique({ where: { id } });
  }

  update(id: number, updateDeviceDto: UpdateDeviceDto) {
    return this.prismaService.devices.update({
      where: { id },
      data: updateDeviceDto,
    });
  }

  remove(id: number) {
    return this.prismaService.devices.delete({ where: { id } });
  }
}
