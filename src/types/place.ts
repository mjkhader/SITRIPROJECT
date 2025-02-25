export interface Place {
  id: string;
  name: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  photos: string[];
  description: string;
  availability: {
    openingHours: string;
    closingHours: string;
    daysOpen: string[];
  };
  category: string;
  ownerId?: string;
  isPublic: boolean;
  rating: number;
  reviews: Review[];
}

export interface Review {
  id: string;
  userId: string;
  rating: number;
  comment: string;
  createdAt: string;
}