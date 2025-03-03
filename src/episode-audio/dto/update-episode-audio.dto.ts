import { PartialType } from '@nestjs/mapped-types';
import { CreateEpisodeAudioDto } from './create-episode-audio.dto';

export class UpdateEpisodeAudioDto extends PartialType(CreateEpisodeAudioDto) {}
