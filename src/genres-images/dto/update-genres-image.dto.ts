import { PartialType } from '@nestjs/mapped-types';
import { CreateGenresImageDto } from './create-genres-image.dto';

export class UpdateGenresImageDto extends PartialType(CreateGenresImageDto) {}
