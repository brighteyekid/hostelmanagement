import { styled, keyframes } from '@mui/material/styles';
import { Paper, Card, Chip, Box, AppBar } from '@mui/material';

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const StyledProfileCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  background: `linear-gradient(-45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
  backgroundSize: '400% 400%',
  animation: `${gradientAnimation} 15s ease infinite`,
  color: theme.palette.common.white,
  position: 'relative',
  overflow: 'hidden',
  borderRadius: theme.spacing(3),
  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    width: '300px',
    height: '300px',
    background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
    borderRadius: '50%',
  },
}));

export const StyledActionCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  background: theme.palette.background.paper,
  border: '1px solid rgba(148, 163, 184, 0.1)',
  '&:hover': {
    transform: 'translateY(-8px) scale(1.01)',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
    borderColor: theme.palette.primary.main,
  },
}));

export const StatusChip = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  right: theme.spacing(2),
  borderRadius: theme.spacing(3),
  padding: theme.spacing(0.5, 1),
  backdropFilter: 'blur(8px)',
  background: 'rgba(255, 255, 255, 0.2)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  color: theme.palette.common.white,
}));

export const DashboardContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: '1400px',
  margin: '0 auto',
  marginTop: theme.spacing(8),
}));

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(12px)',
  boxShadow: 'none',
  borderBottom: '1px solid rgba(148, 163, 184, 0.1)',
}));

export const ComplaintCard = styled(Card)(({ theme }) => ({
  height: '100%',
  position: 'relative',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  background: theme.palette.background.paper,
  border: '1px solid rgba(148, 163, 184, 0.1)',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    borderColor: theme.palette.primary.main,
    '& .complaint-overlay': {
      opacity: 1,
    },
  },
}));

export const ComplaintOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: theme.spacing(2),
  background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 20%, rgba(255,255,255,1) 100%)',
  opacity: 0,
  transition: 'opacity 0.3s ease',
}));

export const StyledStatCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  background: theme.palette.background.paper,
  border: '1px solid rgba(148, 163, 184, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    borderColor: theme.palette.primary.main,
  },
})); 