import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from '@mui/material';
import { useState } from 'react';
import { Complaint } from '../../interfaces/Complaint';

const ComplaintList = () => {
  const [complaints] = useState<Complaint[]>([]);

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h4">Complaints</Typography>
        <Button variant="contained" color="primary">
          New Complaint
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {complaints.map((complaint) => (
              <TableRow key={complaint.id}>
                <TableCell>{complaint.title}</TableCell>
                <TableCell>{complaint.description}</TableCell>
                <TableCell>{complaint.status}</TableCell>
                <TableCell>{complaint.priority}</TableCell>
                <TableCell>{complaint.createdAt.toLocaleDateString()}</TableCell>
                <TableCell>
                  <Button size="small">Update</Button>
                  <Button size="small" color="error">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ComplaintList; 