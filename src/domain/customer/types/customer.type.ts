import { Service } from "@/domain/services/types/service.type";

export interface Customer {
  id: string;
  name: string;
  contact: string;
  services: Service[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ListCustomerProps {
  id?: string;
  contact?: string;
}
