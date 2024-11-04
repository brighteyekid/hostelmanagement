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

const VisitorList = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h4">Visitors</Typography>
        <Button variant="contained" color="primary">
          Register Visitor
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Visitor Name</TableCell>
              <TableCell>Purpose</TableCell>
              <TableCell>Student Name</TableCell>
              <TableCell>Check In</TableCell>
              <TableCell>Check Out</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Add visitor entries here */}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default VisitorList; 