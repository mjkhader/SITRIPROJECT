export interface Event {
  id: string;
  placeId: string;
  name: string;
  description: string;
  date: string;
  time: string;
  entryFees: number;
  image: string;
  organizerId: string;
  maxCapacity: number;
  currentBookings: number;
  status: 'pending' | 'approved' | 'rejected';
}

export interface EventBooking {
  id: string;
  eventId: string;
  userId: string;
  numberOfPersons: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  ticketNumber: string;
  createdAt: string;
}