export interface AddServiceProps {
  customerId: string;
  userId: string;
  device: string;
  defect: string;
  value: number;
  advanceValue: number | null;
  remainingValue: number | null;
  status: "RECEIVED" | "IN_PROGRES" | "COMPLETED";
  receivedAt: string;
  deliveryDate: string;
}
