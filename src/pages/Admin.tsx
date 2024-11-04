import { Box, Typography, Paper, Grid } from '@mui/material';

const Admin = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">System Statistics</Typography>
            {/* Add admin-specific content here */}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Admin; 