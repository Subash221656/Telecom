import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Sidebar from '../../components/ui/Sidebar';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProjectCard from './components/ProjectCard';
import QuickStats from './components/QuickStats';
import RecentActivity from './components/RecentActivity';
import ProjectMap from './components/ProjectMap';
import DocumentLibrary from './components/DocumentLibrary';
import TeamCommunication from './components/TeamCommunication';

const ClientPortal = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedProject, setSelectedProject] = useState(null);

  // Mock data for client portal
  const clientInfo = {
    name: "Ventia Services",
    contactPerson: "Sarah Mitchell",
    email: "sarah.mitchell@ventia.com.au",
    phone: "+61 2 9876 5432",
    accountManager: "David Chen"
  };

  const quickStats = {
    activeProjects: 12,
    completedThisMonth: 8,
    teamMembers: 45,
    avgCompletionTime: 14
  };

  const projects = [
    {
      id: 1,
      name: "NBN Fiber Installation - Parramatta",
      location: "Parramatta, NSW",
      status: "Active",
      progress: 75,
      startDate: "15/07/2024",
      dueDate: "30/08/2024",
      teamSize: 8,
      lastUpdate: "2 hours ago",
      coordinates: { lat: -33.8150, lng: 151.0000 }
    },
    {
      id: 2,
      name: "Civil Works - Blacktown Infrastructure",
      location: "Blacktown, NSW",
      status: "Planning",
      progress: 25,
      startDate: "01/08/2024",
      dueDate: "15/09/2024",
      teamSize: 12,
      lastUpdate: "1 day ago",
      coordinates: { lat: -33.7688, lng: 150.9062 }
    },
    {
      id: 3,
      name: "Copper Infrastructure Upgrade",
      location: "Penrith, NSW",
      status: "Active",
      progress: 90,
      startDate: "10/06/2024",
      dueDate: "25/08/2024",
      teamSize: 6,
      lastUpdate: "4 hours ago",
      coordinates: { lat: -33.7506, lng: 150.6940 }
    },
    {
      id: 4,
      name: "Structured Cabling - Office Complex",
      location: "Sydney CBD, NSW",
      status: "Completed",
      progress: 100,
      startDate: "05/05/2024",
      dueDate: "20/07/2024",
      teamSize: 4,
      lastUpdate: "3 days ago",
      coordinates: { lat: -33.8688, lng: 151.2093 }
    }
  ];

  const recentActivities = [
    {
      type: "project_update",
      title: "Progress Update",
      description: "NBN Fiber Installation - Parramatta reached 75% completion",
      project: "Parramatta NBN",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      priority: "normal"
    },
    {
      type: "team_assignment",
      title: "Team Assignment",
      description: "Michael Rodriguez assigned to Civil Works - Blacktown",
      project: "Blacktown Infrastructure",
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
      priority: "normal"
    },
    {
      type: "document_upload",
      title: "Safety Report Uploaded",
      description: "Weekly safety inspection report for Penrith site",
      project: "Penrith Upgrade",
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
      priority: "high"
    },
    {
      type: "status_change",
      title: "Project Status Changed",
      description: "Office Complex cabling project marked as completed",
      project: "Sydney CBD Office",
      timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      priority: "normal"
    },
    {
      type: "message",
      title: "New Message",
      description: "Field team reported fiber splice completion ahead of schedule",
      project: "Parramatta NBN",
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      priority: "normal"
    }
  ];

  const documents = [
    {
      name: "Project Contract - Parramatta NBN",
      description: "Main service agreement for NBN fiber installation project",
      type: "pdf",
      category: "contracts",
      size: 2048576,
      lastModified: "20/08/2024",
      uploadedBy: "David Chen",
      isNew: false
    },
    {
      name: "Safety Certification - Q3 2024",
      description: "Quarterly safety compliance certification and audit report",
      type: "pdf",
      category: "certifications",
      size: 1536000,
      lastModified: "18/08/2024",
      uploadedBy: "Safety Team",
      isNew: true
    },
    {
      name: "Site Photos - Blacktown Progress",
      description: "Weekly progress photos from Blacktown civil works site",
      type: "image",
      category: "photos",
      size: 15728640,
      lastModified: "21/08/2024",
      uploadedBy: "Site Supervisor",
      isNew: true
    },
    {
      name: "Compliance Report - August",
      description: "Monthly compliance and regulatory adherence report",
      type: "excel",
      category: "compliance",
      size: 512000,
      lastModified: "19/08/2024",
      uploadedBy: "Compliance Officer",
      isNew: false
    },
    {
      name: "Installation Video - Fiber Splicing",
      description: "Training video showing proper fiber optic splicing techniques",
      type: "video",
      category: "safety",
      size: 52428800,
      lastModified: "17/08/2024",
      uploadedBy: "Training Team",
      isNew: false
    },
    {
      name: "Equipment Inventory - August",
      description: "Monthly equipment and materials inventory report",
      type: "excel",
      category: "compliance",
      size: 768000,
      lastModified: "22/08/2024",
      uploadedBy: "Inventory Manager",
      isNew: true
    }
  ];

  const teamMessages = [
    {
      sender: "Michael Rodriguez",
      content: "Fiber splicing completed on Parramatta site. Moving to next junction box.",
      team: "fiber-install",
      timestamp: new Date(Date.now() - 30 * 60 * 1000),
      type: "location"
    },
    {
      sender: "Sarah Kim",
      content: "Safety inspection passed. All equipment secured properly.",
      team: "safety",
      timestamp: new Date(Date.now() - 45 * 60 * 1000),
      type: "urgent"
    },
    {
      sender: "David Chen",
      content: "Client meeting scheduled for tomorrow 2 PM to review Blacktown progress.",
      team: "project-mgmt",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      type: "message"
    },
    {
      sender: "Lisa Thompson",
      content: "Excavation work ahead of schedule. Should finish by Friday.",
      team: "civil-works",
      timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000),
      type: "message",
      attachment: {
        type: "photo",
        name: "excavation-progress.jpg"
      }
    },
    {
      sender: "James Wilson",
      content: "Updated project timeline uploaded to document library.",
      team: "project-mgmt",
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
      type: "document",
      attachment: {
        type: "document",
        name: "project-timeline-v2.pdf"
      }
    }
  ];

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: 'LayoutDashboard' },
    { id: 'projects', label: 'Projects', icon: 'FolderOpen' },
    { id: 'map', label: 'Project Map', icon: 'Map' },
    { id: 'documents', label: 'Documents', icon: 'FileText' },
    { id: 'communication', label: 'Team Chat', icon: 'MessageSquare' }
  ];

  const handleViewProjectDetails = (project) => {
    setSelectedProject(project);
    setActiveTab('projects');
  };

  const handleSendMessage = (message) => {
    console.log('Sending message:', message);
    // In a real app, this would send the message to the backend
  };

  useEffect(() => {
    document.title = 'Client Portal - FiberLink Pro';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar 
        isCollapsed={isSidebarCollapsed} 
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)} 
      />
      <main className={`pt-16 brand-transition ${isSidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
        <div className="p-6">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Client Portal</h1>
                <p className="text-muted-foreground mt-1">
                  Welcome back, {clientInfo?.contactPerson} from {clientInfo?.name}
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Button variant="outline" iconName="Download" iconPosition="left">
                  Export Data
                </Button>
                <Button variant="default" iconName="Phone" iconPosition="left">
                  Emergency Contact
                </Button>
              </div>
            </div>

            {/* Client Info Bar */}
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <Icon name="Building" size={16} className="text-muted-foreground" />
                    <span className="text-sm text-foreground">{clientInfo?.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="User" size={16} className="text-muted-foreground" />
                    <span className="text-sm text-foreground">Account Manager: {clientInfo?.accountManager}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Mail" size={16} className="text-muted-foreground" />
                    <span className="text-sm text-foreground">{clientInfo?.email}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-safety-green rounded-full animate-pulse-slow"></div>
                  <span className="text-sm text-muted-foreground">Account Active</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="mb-8">
            <div className="border-b border-border">
              <nav className="flex space-x-8 overflow-x-auto">
                {tabs?.map((tab) => (
                  <button
                    key={tab?.id}
                    onClick={() => setActiveTab(tab?.id)}
                    className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap brand-transition ${
                      activeTab === tab?.id
                        ? 'border-primary text-primary' :'border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground'
                    }`}
                  >
                    <Icon name={tab?.icon} size={16} />
                    <span>{tab?.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Tab Content */}
          <div className="space-y-8">
            {activeTab === 'dashboard' && (
              <>
                <QuickStats stats={quickStats} />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold text-foreground mb-4">Active Projects</h2>
                      <div className="grid gap-4">
                        {projects?.filter(p => p?.status === 'Active')?.map((project) => (
                          <ProjectCard 
                            key={project?.id} 
                            project={project} 
                            onViewDetails={handleViewProjectDetails}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <RecentActivity activities={recentActivities} />
                </div>
              </>
            )}

            {activeTab === 'projects' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-foreground">All Projects</h2>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" iconName="Filter" iconPosition="left">
                      Filter
                    </Button>
                    <Button variant="outline" iconName="SortAsc" iconPosition="left">
                      Sort
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {projects?.map((project) => (
                    <ProjectCard 
                      key={project?.id} 
                      project={project} 
                      onViewDetails={handleViewProjectDetails}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'map' && (
              <ProjectMap projects={projects} />
            )}

            {activeTab === 'documents' && (
              <DocumentLibrary documents={documents} />
            )}

            {activeTab === 'communication' && (
              <TeamCommunication 
                messages={teamMessages} 
                onSendMessage={handleSendMessage}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ClientPortal;