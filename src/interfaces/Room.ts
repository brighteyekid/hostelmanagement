export interface Room {
    id: string;
    roomNumber: string;
    capacity: number;
    occupiedBeds: number;
    floor: number;
    type: 'SINGLE' | 'DOUBLE' | 'TRIPLE';
    status: 'AVAILABLE' | 'FULL' | 'MAINTENANCE';
} 