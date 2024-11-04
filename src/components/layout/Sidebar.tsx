import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  MeetingRoom as RoomIcon,
  Payment as PaymentIcon,
  Assignment as ComplaintIcon,
  PersonAdd as VisitorIcon,
  AdminPanelSettings as AdminIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Sidebar = () => {
  const navigate = useNavigate();
  const { isAdmin } = useAuth();
  const drawerWidth = 240;

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/', adminOnly: false },
    { text: 'Students', icon: <PeopleIcon />, path: '/students', adminOnly: true },
    { text: 'Rooms', icon: <RoomIcon />, path: '/rooms', adminOnly: true },
    { text: 'Fees', icon: <PaymentIcon />, path: '/fees', adminOnly: true },
    { text: 'Complaints', icon: <ComplaintIcon />, path: '/complaints', adminOnly: false },
    { text: 'Visitors', icon: <VisitorIcon />, path: '/visitors', adminOnly: true },
    { text: 'Admin', icon: <AdminIcon />, path: '/admin', adminOnly: true },
  ];

  const filteredMenuItems = menuItems.filter(
    (item) => !item.adminOnly || isAdmin
  );

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          marginTop: '64px',
        },
      }}
    >
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {filteredMenuItems.map((item) => (
            <ListItem 
              key={item.text}
              onClick={() => navigate(item.path)}
              sx={{ cursor: 'pointer' }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar; 