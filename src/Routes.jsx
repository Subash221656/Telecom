import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import InventoryManagement from './pages/inventory-management';
import ClientPortal from './pages/client-portal';
import EmployeeHub from './pages/employee-hub';
import ProjectPortfolio from './pages/project-portfolio';
import ServicesOverview from './pages/services-overview';
import Homepage from './pages/homepage';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<ClientPortal />} />
        <Route path="/inventory-management" element={<InventoryManagement />} />
        <Route path="/client-portal" element={<ClientPortal />} />
        <Route path="/employee-hub" element={<EmployeeHub />} />
        <Route path="/project-portfolio" element={<ProjectPortfolio />} />
        <Route path="/services-overview" element={<ServicesOverview />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
