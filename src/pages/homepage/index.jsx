import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from './components/HeroSection';
import UserPathwaySection from './components/UserPathwaySection';
import ServicesShowcase from './components/ServicesShowcase';
import ClientLogosSection from './components/ClientLogosSection';
import LiveProjectFeed from './components/LiveProjectFeed';
import EmployeeSpotlight from './components/EmployeeSpotlight';
import PerformanceMetrics from './components/PerformanceMetrics';

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>FiberLink Pro - Australia's Premier Telecommunications Infrastructure Contractor</title>
        <meta 
          name="description" 
          content="Leading telecommunications contractor delivering NBN fiber installations, structured cabling, and civil works across Australia. Trusted by Ventia, ServiceStream with 99.2% completion rate and zero safety incidents." 
        />
        <meta name="keywords" content="NBN fiber installation, telecommunications contractor, structured cabling, civil works, Australia, Ventia, ServiceStream" />
        <meta property="og:title" content="FiberLink Pro - Premier Telecommunications Infrastructure" />
        <meta property="og:description" content="Australia's leading telecommunications contractor with 500+ NBN installations and perfect safety record." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/homepage" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section with Live Updates */}
        <HeroSection />

        {/* User Pathway Selection */}
        <UserPathwaySection />

        {/* Services Showcase */}
        <ServicesShowcase />

        {/* Client Logos & Partnerships */}
        <ClientLogosSection />

        {/* Live Project Feed */}
        <LiveProjectFeed />

        {/* Employee Spotlight */}
        <EmployeeSpotlight />

        {/* Performance Metrics */}
        <PerformanceMetrics />
      </div>
    </>
  );
};

export default Homepage;