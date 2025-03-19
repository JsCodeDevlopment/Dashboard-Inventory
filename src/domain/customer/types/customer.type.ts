import { Service } from "@/domain/services/types/service.type";

export interface Customer {
  id: string;
  name: string;
  contact: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface GetCustomer extends Customer {
  services: Service[];
}

export interface ListCustomerProps {
  id?: string;
  name?: string;
  contact?: string;
}

export interface CustomerMutationError {
  statusCode: number;
  message: string;
  error: string;
}
