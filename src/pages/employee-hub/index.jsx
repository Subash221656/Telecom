import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Sidebar from '../../components/ui/Sidebar';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProjectAssignmentCard from './components/ProjectAssignmentCard';
import TeamChatPanel from './components/TeamChatPanel';
import MediaUploadSection from './components/MediaUploadSection';
import ProductivityDashboard from './components/ProductivityDashboard';
import QuickActionsPanel from './components/QuickActionsPanel';

const EmployeeHub = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeChannel, setActiveChannel] = useState('site-247');

  // Mock data for projects
  const mockProjects = [
    {
      id: 1,
      title: "NBN Fiber Installation - Site 247",
      location: "Melbourne CBD, VIC",
      description: "Install fiber optic cables for new NBN connection in commercial building",
      priority: "urgent",
      status: "in-progress",
      dueDate: "25 Aug 2025",
      estimatedHours: 8,
      teamSize: 4,
      distance: 2.3,
      teamMembers: [
        { name: "Sarah Chen", avatar: "https://randomuser.me/api/portraits/women/32.jpg" },
        { name: "Mike Johnson", avatar: "https://randomuser.me/api/portraits/men/45.jpg" },
        { name: "David Wilson", avatar: "https://randomuser.me/api/portraits/men/67.jpg" },
        { name: "Lisa Brown", avatar: "https://randomuser.me/api/portraits/women/23.jpg" }
      ]
    },
    {
      id: 2,
      title: "Copper Infrastructure Upgrade",
      location: "Richmond, VIC",
      description: "Replace legacy copper lines with modern infrastructure",
      priority: "high",
      status: "pending",
      dueDate: "28 Aug 2025",
      estimatedHours: 12,
      teamSize: 3,
      distance: 5.7,
      teamMembers: [
        { name: "Tom Anderson", avatar: "https://randomuser.me/api/portraits/men/12.jpg" },
        { name: "Emma Davis", avatar: "https://randomuser.me/api/portraits/women/56.jpg" },
        { name: "James Wilson", avatar: "https://randomuser.me/api/portraits/men/34.jpg" }
      ]
    }
  ];

  // Mock data for chat channels
  const mockChannels = [
    {
      id: 'site-247',
      name: 'Site 247 Team',
      members: 4,
      unreadCount: 2,
      messages: [
        {
          id: 1,
          sender: {
            name: "Sarah Chen",
            avatar: "https://randomuser.me/api/portraits/women/32.jpg",
            role: "Lead Technician"
          },
          content: "Just finished the cable routing on level 3. Moving to level 4 now.",
          timestamp: new Date(Date.now() - 300000)
        },
        {
          id: 2,
          sender: {
            name: "Mike Johnson",
            avatar: "https://randomuser.me/api/portraits/men/45.jpg",
            role: "Installer"
          },
          content: "Great work! I\'ve completed the termination points. Ready for testing.",
          timestamp: new Date(Date.now() - 180000),
          attachment: {
            type: 'image',
            name: 'termination_points.jpg'
          }
        }
      ]
    },
    {
      id: 'general',
      name: 'General Chat',
      members: 12,
      unreadCount: 0,
      messages: [
        {
          id: 1,
          sender: {
            name: "Lisa Brown",
            avatar: "https://randomuser.me/api/portraits/women/23.jpg",
            role: "Project Manager"
          },
          content: "Team meeting at 2 PM today. Please join the video call.",
          timestamp: new Date(Date.now() - 600000)
        }
      ]
    }
  ];

  // Mock data for recent uploads
  const mockUploads = [
    {
      id: 1,
      name: "fiber_installation_progress.jpg",
      type: "image",
      size: 2048576,
      timestamp: new Date(Date.now() - 900000),
      location: "Melbourne CBD, VIC",
      project: "NBN Installation - Site 247"
    },
    {
      id: 2,
      name: "safety_checklist_video.mp4",
      type: "video",
      size: 15728640,
      timestamp: new Date(Date.now() - 1800000),
      location: "Richmond, VIC",
      project: "Copper Infrastructure Upgrade"
    }
  ];

  // Mock data for productivity dashboard
  const mockTimesheet = {
    hoursWorked: 420, // 7 hours in minutes
    breakTime: 60,
    overtime: 30,
    projectsCompleted: 2,
    entries: [
      {
        project: "NBN Installation - Site 247",
        location: "Melbourne CBD",
        startTime: "08:00",
        endTime: "12:00",
        duration: 240,
        status: "completed"
      },
      {
        project: "Equipment Maintenance",
        location: "Workshop",
        startTime: "13:00",
        endTime: null,
        duration: 180,
        status: "active"
      }
    ]
  };

  const mockCertifications = [
    {
      id: 1,
      name: "NBN Fiber Installation",
      expiryDate: "15 Dec 2025",
      status: "valid"
    },
    {
      id: 2,
      name: "Workplace Safety",
      expiryDate: "30 Sep 2025",
      status: "expiring"
    },
    {
      id: 3,
      name: "Copper Network Specialist",
      expiryDate: "10 Jan 2026",
      status: "valid"
    }
  ];

  const mockTraining = [
    {
      id: 1,
      name: "Advanced Fiber Splicing",
      progress: 75,
      completedLessons: 6,
      totalLessons: 8,
      dueDate: "30 Aug 2025"
    },
    {
      id: 2,
      name: "Safety Protocol Updates",
      progress: 100,
      completedLessons: 4,
      totalLessons: 4,
      dueDate: "20 Aug 2025"
    }
  ];

  const mockMetrics = {
    efficiency: 92,
    safetyScore: 98,
    qualityRating: 4.8,
    projectsCompleted: 24
  };

  // Mock data for notifications
  const mockNotifications = [
    {
      id: 1,
      type: "urgent",
      title: "Safety Alert",
      message: "New safety protocol for fiber installation sites",
      timestamp: new Date(Date.now() - 300000),
      action: "View Details"
    },
    {
      id: 2,
      type: "info",
      title: "Schedule Update",
      message: "Tomorrow\'s project moved to 9:00 AM",
      timestamp: new Date(Date.now() - 600000)
    },
    {
      id: 3,
      type: "success",
      title: "Training Complete",
      message: "Safety Protocol Updates course completed",
      timestamp: new Date(Date.now() - 900000)
    }
  ];

  // Mock data for emergency contacts
  const mockEmergencyContacts = [
    {
      id: 1,
      name: "Site Supervisor",
      role: "Direct Supervisor",
      phone: "+61 400 123 456"
    },
    {
      id: 2,
      name: "Safety Officer",
      role: "Health & Safety",
      phone: "+61 400 789 012"
    },
    {
      id: 3,
      name: "Operations Manager",
      role: "Operations",
      phone: "+61 400 345 678"
    }
  ];

  const handleProjectAction = (action, projectId) => {
    console.log(`${action} for project ${projectId}`);
  };

  const handleSendMessage = (channelId, message) => {
    console.log(`Sending message to ${channelId}: ${message}`);
  };

  const handleMediaUpload = (file) => {
    console.log('Uploading file:', file);
  };

  const handleQuickAction = (actionId) => {
    console.log('Quick action:', actionId);
  };

  const tabs = [
    { id: 'dashboard', name: 'Dashboard', icon: 'Home' },
    { id: 'projects', name: 'My Projects', icon: 'FolderOpen' },
    { id: 'chat', name: 'Team Chat', icon: 'MessageSquare' },
    { id: 'media', name: 'Media Upload', icon: 'Upload' },
    { id: 'productivity', name: 'Productivity', icon: 'BarChart3' },
    { id: 'actions', name: 'Quick Actions', icon: 'Zap' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar 
        isCollapsed={sidebarCollapsed} 
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)} 
      />
      <main className={`pt-16 brand-transition ${sidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
        <div className="p-6">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Employee Hub</h1>
                <p className="text-muted-foreground mt-2">
                  Your central workspace for collaboration, productivity, and project management
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 px-3 py-2 bg-safety-green/10 rounded-lg">
                  <div className="w-2 h-2 bg-safety-green rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-safety-green">Online</span>
                </div>
                <Button variant="default" iconName="Bell" iconPosition="left">
                  Notifications
                </Button>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="mb-8">
            <div className="border-b border-border">
              <nav className="flex space-x-8 overflow-x-auto">
                {tabs?.map((tab) => (
                  <button
                    key={tab?.id}
                    onClick={() => setActiveTab(tab?.id)}
                    className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap brand-transition ${
                      activeTab === tab?.id
                        ? 'border-primary text-primary' :'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
                    }`}
                  >
                    <Icon name={tab?.icon} size={18} />
                    <span>{tab?.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Tab Content */}
          <div className="space-y-8">
            {activeTab === 'dashboard' && (
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-foreground mb-4">Today's Overview</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-2 bg-primary/10 rounded-full flex items-center justify-center">
                          <Icon name="FolderOpen" size={24} className="text-primary" />
                        </div>
                        <div className="text-2xl font-bold text-foreground">3</div>
                        <div className="text-sm text-muted-foreground">Active Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-2 bg-safety-green/10 rounded-full flex items-center justify-center">
                          <Icon name="CheckCircle" size={24} className="text-safety-green" />
                        </div>
                        <div className="text-2xl font-bold text-foreground">2</div>
                        <div className="text-sm text-muted-foreground">Completed Today</div>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-2 bg-accent/10 rounded-full flex items-center justify-center">
                          <Icon name="Clock" size={24} className="text-accent" />
                        </div>
                        <div className="text-2xl font-bold text-foreground">7.5</div>
                        <div className="text-sm text-muted-foreground">Hours Logged</div>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-2 bg-warning/10 rounded-full flex items-center justify-center">
                          <Icon name="MessageSquare" size={24} className="text-warning" />
                        </div>
                        <div className="text-2xl font-bold text-foreground">12</div>
                        <div className="text-sm text-muted-foreground">Team Messages</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mb-4">Recent Projects</h2>
                    <div className="space-y-4">
                      {mockProjects?.slice(0, 2)?.map((project) => (
                        <ProjectAssignmentCard
                          key={project?.id}
                          project={project}
                          onViewDetails={(id) => handleProjectAction('view', id)}
                          onUpdateStatus={(id) => handleProjectAction('update', id)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div>
                  <QuickActionsPanel
                    onAction={handleQuickAction}
                    notifications={mockNotifications}
                    emergencyContacts={mockEmergencyContacts}
                  />
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-6">My Project Assignments</h2>
                <div className="space-y-6">
                  {mockProjects?.map((project) => (
                    <ProjectAssignmentCard
                      key={project?.id}
                      project={project}
                      onViewDetails={(id) => handleProjectAction('view', id)}
                      onUpdateStatus={(id) => handleProjectAction('update', id)}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'chat' && (
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-6">Team Communication</h2>
                <TeamChatPanel
                  channels={mockChannels}
                  activeChannel={activeChannel}
                  onChannelChange={setActiveChannel}
                  onSendMessage={handleSendMessage}
                />
              </div>
            )}

            {activeTab === 'media' && (
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-6">Media Upload & Documentation</h2>
                <MediaUploadSection
                  onUpload={handleMediaUpload}
                  recentUploads={mockUploads}
                />
              </div>
            )}

            {activeTab === 'productivity' && (
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-6">Productivity Dashboard</h2>
                <ProductivityDashboard
                  timesheet={mockTimesheet}
                  certifications={mockCertifications}
                  training={mockTraining}
                  metrics={mockMetrics}
                />
              </div>
            )}

            {activeTab === 'actions' && (
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-6">Quick Actions & Support</h2>
                <QuickActionsPanel
                  onAction={handleQuickAction}
                  notifications={mockNotifications}
                  emergencyContacts={mockEmergencyContacts}
                />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default EmployeeHub;