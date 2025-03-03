import { Module } from '@nestjs/common';
import { ContentGenresService } from './content-genres.service';
import { ContentGenresController } from './content-genres.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ContentGenresController],
  providers: [ContentGenresService],
})
export class ContentGenresModule {}
