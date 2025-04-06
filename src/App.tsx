import { Route, Routes } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import ProtectedRoute from './components/ProcetedRoute';
import { AuthProvider } from './contexts/AuthContext';
import AddCrimeRecord from './pages/AddCrimeRecord';
import AddOptions from './pages/AddOptions';
import BeatsSystem from './pages/BeatsSystem';
import BeatsUpload from './pages/BeatsUpload';
import CrimeRecordDetail from './pages/CrimeRecordDetail';
import CrimeRecordsList from './pages/CrimeRecordsList';
import Dashboard from './pages/Dashboard';
import EditCrimeRecord from './pages/EditCrimeRecord';
import FullMap from './pages/FullMap';
import GeolocationComponent from './pages/GeolocationComponent';
import LandingPage from './pages/LandingPage';
import MyLocationTracker from './pages/MyLocationTracker';
import TestMap from './pages/TestMap';
import UploadFile from './pages/UploadFile';
import Login from './pages/auth/Login';
import Criminals from './pages/criminals';
import BeatsList from './pages/BeatsList';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/test" element={<GeolocationComponent />} />
        <Route path="/tracker" element={<MyLocationTracker />} />

        {/* Dashboard and Crime Records */}
        <Route path="/add-options" element={<AddOptions />} />
        <Route path='/login' element={<Login />} />

        {/* Crime Records with Dashboard Layout */}
        <Route element={<DashboardLayout />}>
          <Route path="/loc" element={<TestMap />} />
          <Route path="/beats-upload" element={
            <ProtectedRoute>
              <BeatsUpload />
            </ProtectedRoute>
          } />

          <Route path="/beats-system" element={
            <ProtectedRoute>
              <BeatsSystem />
            </ProtectedRoute>
          } />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/map" element={<FullMap />} />
          <Route path="/beats-list" element={<BeatsList />} />
          <Route path="/criminals-locations" element={<Criminals />} />
          <Route path="/crimes" element={<CrimeRecordsList />} />
          <Route path="/crimes/add-options" element={<AddOptions />} />
          <Route path="/crimes/add" element={<AddCrimeRecord />} />
          <Route path="/crimes/upload" element={<UploadFile />} />
          <Route path="/crimes/edit/:id" element={<EditCrimeRecord />} />
          <Route path="/crimes/:id" element={<CrimeRecordDetail />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;