import {
  Box,
  Typography,
  Grid,
  CardContent,
  Button,
  Avatar,
  Divider,
  useTheme,
  Chip,
} from '@mui/material';
import {
  Person as PersonIcon,
  Assignment as ComplaintIcon,
  History as HistoryIcon,
  CheckCircle as CheckCircleIcon,
  PendingActions as PendingIcon,
  Edit as EditIcon,
  Cancel as CancelIcon,
} from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import {
  StyledProfileCard,
  StyledActionCard,
  StatusChip,
  DashboardContainer,
  ComplaintCard,
  ComplaintOverlay,
} from '../styles/StudentDashboard.styles';
import StudentHeader from '../components/student/StudentHeader';
import StudentStats from '../components/student/StudentStats';

// Mock data for recent complaints
const recentComplaints = [
  {
    id: 1,
    title: 'Maintenance Request: Room Light',
    status: 'PENDING',
    date: '2024-03-15',
    description: 'The main light in my room needs replacement.',
  },
  {
    id: 2,
    title: 'WiFi Connectivity Issues',
    status: 'RESOLVED',
    date: '2024-03-10',
    description: 'Having trouble connecting to the hostel WiFi network.',
  },
  {
    id: 3,
    title: 'Water Heater Not Working',
    status: 'IN_PROGRESS',
    date: '2024-03-13',
    description: 'The water heater in the bathroom is not functioning properly.',
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'RESOLVED':
      return <CheckCircleIcon color="success" />;
    case 'PENDING':
      return <PendingIcon color="warning" />;
    case 'IN_PROGRESS':
      return <EditIcon color="info" />;
    default:
      return <CancelIcon color="error" />;
  }
};

const StudentDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <>
      <StudentHeader />
      <DashboardContainer>
        <Grid container spacing={4}>
          {/* Profile Section */}
          <Grid item xs={12} md={4}>
            <StyledProfileCard elevation={4}>
              <Box sx={{ position: 'relative', textAlign: 'center' }}>
                <Avatar
                  sx={{
                    width: 120,
                    height: 120,
                    margin: '0 auto',
                    border: '4px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                    background: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(5px)',
                  }}
                >
                  {user?.firstName?.[0]}
                </Avatar>
                <Typography variant="h4" sx={{ mt: 2, mb: 1 }}>
                  {user?.firstName} {user?.lastName}
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9, mb: 1 }}>
                  Room {user?.roomNumber}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  {user?.email}
                </Typography>
                <StatusChip
                  label={`Fee Status: ${user?.feeStatus || 'PAID'}`}
                  color="primary"
                />
              </Box>
            </StyledProfileCard>
          </Grid>

          {/* Quick Actions */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <StudentStats />
              </Grid>
              <Grid item xs={12} sm={6}>
                <StyledActionCard>
                  <CardContent sx={{ 
                    textAlign: 'center', 
                    py: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2 
                  }}>
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: '50%',
                        bgcolor: 'primary.light',
                        color: 'primary.main',
                        width: 64,
                        height: 64,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <ComplaintIcon sx={{ fontSize: 32 }} />
                    </Box>
                    <Typography variant="h6">
                      Submit New Complaint
                    </Typography>
                    <Button
                      variant="contained"
                      onClick={() => navigate('/complaints/new')}
                      fullWidth
                    >
                      Create Complaint
                    </Button>
                  </CardContent>
                </StyledActionCard>
              </Grid>
              <Grid item xs={12} sm={6}>
                <StyledActionCard>
                  <CardContent sx={{ 
                    textAlign: 'center', 
                    py: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2 
                  }}>
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: '50%',
                        bgcolor: 'secondary.light',
                        color: 'secondary.main',
                        width: 64,
                        height: 64,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <HistoryIcon sx={{ fontSize: 32 }} />
                    </Box>
                    <Typography variant="h6">
                      Complaint History
                    </Typography>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => navigate('/complaints')}
                      fullWidth
                    >
                      View History
                    </Button>
                  </CardContent>
                </StyledActionCard>
              </Grid>
            </Grid>
          </Grid>

          {/* Recent Complaints */}
          <Grid item xs={12}>
            <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Recent Complaints
              </Typography>
              <Button
                variant="text"
                color="primary"
                onClick={() => navigate('/complaints')}
              >
                View All
              </Button>
            </Box>
            <Grid container spacing={3}>
              {recentComplaints.map((complaint) => (
                <Grid item xs={12} md={4} key={complaint.id}>
                  <ComplaintCard>
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        {getStatusIcon(complaint.status)}
                        <Typography variant="h6" sx={{ ml: 1 }}>
                          {complaint.title}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {complaint.description}
                      </Typography>
                      <Divider sx={{ my: 1 }} />
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="caption" color="text.secondary">
                          {new Date(complaint.date).toLocaleDateString()}
                        </Typography>
                        <Chip
                          label={complaint.status}
                          size="small"
                          color={
                            complaint.status === 'RESOLVED'
                              ? 'success'
                              : complaint.status === 'IN_PROGRESS'
                              ? 'info'
                              : 'warning'
                          }
                        />
                      </Box>
                    </CardContent>
                  </ComplaintCard>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </DashboardContainer>
    </>
  );
};

export default StudentDashboard; 