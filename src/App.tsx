import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import AddCrimeRecord from './pages/AddCrimeRecord';
import EditCrimeRecord from './pages/EditCrimeRecord';
import CrimeRecordsList from './pages/CrimeRecordsList';
import CrimeRecordDetail from './pages/CrimeRecordDetail';
import DashboardLayout from './components/DashboardLayout';
import FullMap from './pages/FullMap';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      
      {/* Dashboard and Crime Records */}
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/loc" element={<FullMap />} />
      
      {/* Crime Records with Dashboard Layout */}
      <Route element={<DashboardLayout />}>
        <Route path="/map" element={<FullMap />} />
        <Route path="/crimes" element={<CrimeRecordsList />} />
        <Route path="/crimes/add" element={<AddCrimeRecord />} />
        <Route path="/crimes/edit/:id" element={<EditCrimeRecord />} />
        <Route path="/crimes/:id" element={<CrimeRecordDetail />} />
      </Route>
    </Routes>
  );
}

export default App;