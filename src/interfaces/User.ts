export type UserRole = 'ADMIN' | 'STUDENT';

export interface User {
  id: string;
  username: string;
  role: UserRole;
  firstName: string;
  lastName: string;
  email: string;
  roomNumber?: string;
  admissionDate?: Date;
  feeStatus?: 'PAID' | 'PENDING' | 'OVERDUE';
} 