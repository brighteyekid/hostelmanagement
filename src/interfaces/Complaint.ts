export interface Complaint {
    id: string;
    studentId: string;
    title: string;
    description: string;
    status: 'OPEN' | 'IN_PROGRESS' | 'RESOLVED';
    priority: 'LOW' | 'MEDIUM' | 'HIGH';
    createdAt: Date;
    resolvedAt?: Date;
} 