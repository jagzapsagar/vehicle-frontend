export interface Booking {
    id?: number;
    userId: number;
    vehicleId: number;
    startDate: string;
    endDate: string;
    totalCost?: number;
  }
  