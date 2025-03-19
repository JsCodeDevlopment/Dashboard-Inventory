import { AddCustomerProps } from "./add-customer.type";

export interface UpdateCustomerProps extends Partial<AddCustomerProps> {
  customerId: string;
}
