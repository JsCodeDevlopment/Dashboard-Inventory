import { Customer } from "@/domain/customer/types/customer.type";
import { User } from "@/services/user/types";

export interface Service {
  id: string;
  customerId: string;
  userId: string;
  device: string;
  defect: string;
  receivedAt: string;
  deliveryDate: string;
  value: number;
  status: "RECEIVED" | "IN_PROGRES" | "COMPLETED";
  advanceValue: number;
  remainingValue: number;
  isPaid: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface GetService extends Service {
  clientName: string;
  customer: Customer;
  user: User;
}

export interface ListServiceProps {
  clientName?: string;
}
