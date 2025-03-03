import { Module } from '@nestjs/common';
import { GenresImagesService } from './genres-images.service';
import { GenresImagesController } from './genres-images.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [GenresImagesController],
  providers: [GenresImagesService],
})
export class GenresImagesModule {}
