import { Grid, Typography, Box } from '@mui/material';
import { StyledStatCard } from '../../styles/StudentDashboard.styles';
import {
  AssignmentTurnedIn as ResolvedIcon,
  Pending as PendingIcon,
  Timeline as TimelineIcon,
} from '@mui/icons-material';

const StudentStats = () => {
  const stats = [
    {
      title: 'Resolved Complaints',
      value: '12',
      icon: ResolvedIcon,
      color: '#10B981',
    },
    {
      title: 'Pending Complaints',
      value: '3',
      icon: PendingIcon,
      color: '#F59E0B',
    },
    {
      title: 'Average Response Time',
      value: '24h',
      icon: TimelineIcon,
      color: '#3B82F6',
    },
  ];

  return (
    <Grid container spacing={3}>
      {stats.map((stat) => (
        <Grid item xs={12} md={4} key={stat.title}>
          <StyledStatCard>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  p: 1,
                  borderRadius: 2,
                  bgcolor: `${stat.color}15`,
                  color: stat.color,
                  mr: 2,
                }}
              >
                <stat.icon />
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  {stat.title}
                </Typography>
                <Typography variant="h4" sx={{ mt: 0.5 }}>
                  {stat.value}
                </Typography>
              </Box>
            </Box>
          </StyledStatCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default StudentStats; 