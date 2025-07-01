export interface User {
    userId?: number;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    role: 'USER' | 'ADMIN';
  }
  