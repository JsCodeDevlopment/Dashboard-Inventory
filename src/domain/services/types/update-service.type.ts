import { AddServiceProps } from "./add-service.type";

export interface UpdateServiceProps extends Partial<AddServiceProps> {
  serviceId: string;
}
