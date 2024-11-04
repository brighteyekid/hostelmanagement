export interface Student {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    roomNumber: string;
    admissionDate: Date;
    feeStatus: 'PAID' | 'PENDING' | 'OVERDUE';
    username: string;
} 