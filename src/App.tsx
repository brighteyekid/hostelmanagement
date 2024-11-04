import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/layout/Layout';
import ProtectedRoute from './components/auth/ProtectedRoute';
import StudentDashboard from './pages/StudentDashboard';
import Login from './pages/Login';
import ComplaintList from './components/complaints/ComplaintList';
import ComplaintForm from './components/complaints/ComplaintForm';
import Admin from './pages/Admin';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            
            <Route element={<ProtectedRoute />}>
              <Route element={<Layout />}>
                {/* Student routes */}
                <Route index element={<StudentDashboard />} />
                <Route path="complaints" element={<ComplaintList />} />
                <Route path="complaints/new" element={<ComplaintForm />} />
                
                {/* Admin routes */}
                <Route element={<ProtectedRoute requireAdmin />}>
                  <Route path="admin/*" element={<Admin />} />
                </Route>
              </Route>
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
