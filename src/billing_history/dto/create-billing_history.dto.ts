export class CreateBillingHistoryDto {
  userId: number;
  subscriptionId: number;
  paymentMethodId: number;
  amount: number;
  date: Date;
  status: boolean;
}
