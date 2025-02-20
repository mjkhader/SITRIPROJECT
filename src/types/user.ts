export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phoneNumber: string;
  personalImage: string;
  country: string;
  city: string;
  interests: string[];
  role: 'user' | 'owner' | 'admin';
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phoneNumber: string;
  personalImage: string;
  country: string;
  city: string;
}