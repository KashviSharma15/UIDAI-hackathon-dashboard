import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Enrolment from './pages/Enrolment';
import Biometric from './pages/Biometric';
import Demographic from './pages/Demographic';
import Lifecycle from './pages/Lifecycle';
import MapPage from './pages/Map';
import { ROUTES } from './utils/constants';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Navigate to={ROUTES.ENROLMENT} replace />} />
        <Route path={ROUTES.ENROLMENT} element={<Enrolment />} />
        <Route path={ROUTES.BIOMETRIC} element={<Biometric />} />
        <Route path={ROUTES.DEMOGRAPHIC} element={<Demographic />} />
        <Route path={ROUTES.LIFECYCLE} element={<Lifecycle />} />
        <Route path={ROUTES.MAP} element={<MapPage />} />
      </Routes>
    </Router>
  );
}

export default App;
