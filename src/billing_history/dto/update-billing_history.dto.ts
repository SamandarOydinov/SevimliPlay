import { PartialType } from '@nestjs/mapped-types';
import { CreateBillingHistoryDto } from './create-billing_history.dto';

export class UpdateBillingHistoryDto extends PartialType(CreateBillingHistoryDto) {}
