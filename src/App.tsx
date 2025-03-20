import { Route, Routes } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import AddCrimeRecord from './pages/AddCrimeRecord';
import CrimeRecordDetail from './pages/CrimeRecordDetail';
import CrimeRecordsList from './pages/CrimeRecordsList';
import Dashboard from './pages/Dashboard';
import EditCrimeRecord from './pages/EditCrimeRecord';
import FullMap from './pages/FullMap';
import LandingPage from './pages/LandingPage';
import UploadFile from './pages/UploadFile';
import AddOptions from './pages/AddOptions';
import TestMap from './pages/TestMap';
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      
      {/* Dashboard and Crime Records */}
      <Route path="/add-options" element={<AddOptions />} />
      
      {/* Crime Records with Dashboard Layout */}
      <Route element={<DashboardLayout />}>
      <Route path="/loc" element={<TestMap /> } />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/map" element={<FullMap />} />
        <Route path="/crimes" element={<CrimeRecordsList />} />
        <Route path="/crimes/add-options" element={<AddOptions />} />
        <Route path="/crimes/add" element={<AddCrimeRecord />} />
        <Route path="/crimes/upload" element={<UploadFile />} />
        <Route path="/crimes/edit/:id" element={<EditCrimeRecord />} />
        <Route path="/crimes/:id" element={<CrimeRecordDetail />} />
      </Route>
    </Routes>
  );
}

export default App;