import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const LiveProjectFeed = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedProject, setSelectedProject] = useState(0);

  const liveProjects = [
    {
      id: 'NBN-SYD-2024-001',
      name: 'NBN Fiber Installation - Parramatta',
      location: 'Parramatta, NSW',
      coordinates: '-33.8150,151.0000',
      status: 'In Progress',
      progress: 75,
      team: 'Alpha Team',
      lead: 'Michael Chen',
      startTime: '08:30 AM',
      estimatedCompletion: '4:30 PM',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      updates: [
        { time: '2:15 PM', message: 'Fiber splicing completed for Building A', type: 'progress' },
        { time: '1:45 PM', message: 'Underground conduit installation finished', type: 'milestone' },
        { time: '12:30 PM', message: 'Safety inspection passed', type: 'safety' }
      ],
      equipment: ['Fiber Splicer', 'OTDR', 'Trenching Equipment'],
      priority: 'high'
    },
    {
      id: 'CIV-MEL-2024-002',
      name: 'Civil Works - Collins Street',
      location: 'Melbourne, VIC',
      coordinates: '-37.8136,144.9631',
      status: 'Active',
      progress: 45,
      team: 'Beta Team',
      lead: 'Sarah Williams',
      startTime: '7:00 AM',
      estimatedCompletion: '6:00 PM',
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?w=400&h=300&fit=crop',
      updates: [
        { time: '2:00 PM', message: 'Excavation 60% complete', type: 'progress' },
        { time: '11:30 AM', message: 'Traffic management setup completed', type: 'milestone' },
        { time: '9:15 AM', message: 'Site preparation commenced', type: 'start' }
      ],
      equipment: ['Excavator', 'Compactor', 'Traffic Control'],
      priority: 'medium'
    },
    {
      id: 'STR-BRI-2024-003',
      name: 'Structured Cabling - Corporate Tower',
      location: 'Brisbane, QLD',
      coordinates: '-27.4698,153.0251',
      status: 'Completing',
      progress: 90,
      team: 'Gamma Team',
      lead: 'David Kumar',
      startTime: '8:00 AM',
      estimatedCompletion: '3:00 PM',
      image: 'https://images.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg?w=400&h=300&fit=crop',
      updates: [
        { time: '2:30 PM', message: 'Final testing in progress', type: 'progress' },
        { time: '1:00 PM', message: 'All patch panels installed', type: 'milestone' },
        { time: '10:45 AM', message: 'Cable certification completed', type: 'quality' }
      ],
      equipment: ['Cable Tester', 'Patch Panels', 'Labeling System'],
      priority: 'low'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const projectRotation = setInterval(() => {
      setSelectedProject((prev) => (prev + 1) % liveProjects?.length);
    }, 8000);
    return () => clearInterval(projectRotation);
  }, []);

  const currentProject = liveProjects?.[selectedProject];

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Progress': return 'text-accent bg-accent/10';
      case 'Active': return 'text-primary bg-primary/10';
      case 'Completing': return 'text-safety-green bg-safety-green/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  const getUpdateIcon = (type) => {
    switch (type) {
      case 'progress': return 'Activity';
      case 'milestone': return 'CheckCircle';
      case 'safety': return 'Shield';
      case 'quality': return 'Award';
      case 'start': return 'Play';
      default: return 'Info';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'border-l-urgent-red';
      case 'medium': return 'border-l-warning';
      case 'low': return 'border-l-safety-green';
      default: return 'border-l-muted';
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-safety-green/10 text-safety-green px-4 py-2 rounded-full text-sm font-medium mb-4">
            <div className="relative">
              <div className="w-2 h-2 bg-safety-green rounded-full"></div>
              <div className="absolute inset-0 w-2 h-2 bg-safety-green rounded-full animate-ping opacity-75"></div>
            </div>
            <span>Live Operations</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Real-Time Project Updates
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Track our active projects across Australia with live updates, GPS locations, and real-time progress monitoring from our field teams.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Project List */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-card rounded-xl p-6 brand-shadow">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-foreground">Active Projects</h3>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="Clock" size={16} />
                  <span>{currentTime?.toLocaleTimeString()}</span>
                </div>
              </div>

              <div className="space-y-3">
                {liveProjects?.map((project, index) => (
                  <button
                    key={project?.id}
                    onClick={() => setSelectedProject(index)}
                    className={`w-full text-left p-4 rounded-lg border-l-4 brand-transition ${
                      selectedProject === index
                        ? 'bg-primary/5 border-l-primary'
                        : `bg-muted/50 hover:bg-muted ${getPriorityColor(project?.priority)}`
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground text-sm">{project?.name}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project?.status)}`}>
                        {project?.status}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-2">
                      <div className="flex items-center space-x-1">
                        <Icon name="MapPin" size={12} />
                        <span>{project?.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="User" size={12} />
                        <span>{project?.lead}</span>
                      </div>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full brand-transition"
                        style={{ width: `${project?.progress}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">{project?.progress}% Complete</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="lg:col-span-8">
            <div className="bg-card rounded-2xl overflow-hidden brand-shadow">
              {/* Project Header */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={currentProject?.image}
                  alt={currentProject?.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{currentProject?.name}</h3>
                      <div className="flex items-center space-x-4 text-white/90">
                        <div className="flex items-center space-x-1">
                          <Icon name="MapPin" size={16} />
                          <span>{currentProject?.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="Users" size={16} />
                          <span>{currentProject?.team}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white/80 text-sm">Progress</div>
                      <div className="text-3xl font-bold text-white">{currentProject?.progress}%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                {/* Project Info Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <Icon name="Clock" size={24} className="text-primary mx-auto mb-2" />
                    <div className="text-sm text-muted-foreground">Started</div>
                    <div className="font-semibold text-foreground">{currentProject?.startTime}</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <Icon name="Target" size={24} className="text-accent mx-auto mb-2" />
                    <div className="text-sm text-muted-foreground">Est. Completion</div>
                    <div className="font-semibold text-foreground">{currentProject?.estimatedCompletion}</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <Icon name="User" size={24} className="text-safety-green mx-auto mb-2" />
                    <div className="text-sm text-muted-foreground">Team Lead</div>
                    <div className="font-semibold text-foreground">{currentProject?.lead}</div>
                  </div>
                </div>

                {/* Live Updates */}
                <div className="mb-8">
                  <h4 className="font-bold text-foreground mb-4 flex items-center space-x-2">
                    <Icon name="Activity" size={20} />
                    <span>Live Updates</span>
                  </h4>
                  <div className="space-y-3">
                    {currentProject?.updates?.map((update, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name={getUpdateIcon(update?.type)} size={16} className="text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium text-foreground">{update?.message}</span>
                            <span className="text-xs text-muted-foreground">{update?.time}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Equipment & Map */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-foreground mb-4">Equipment On-Site</h4>
                    <div className="space-y-2">
                      {currentProject?.equipment?.map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Icon name="Package" size={16} className="text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-4">Location</h4>
                    <div className="bg-muted/50 rounded-lg h-32 flex items-center justify-center">
                      <iframe
                        width="100%"
                        height="100%"
                        loading="lazy"
                        title={currentProject?.name}
                        referrerPolicy="no-referrer-when-downgrade"
                        src={`https://www.google.com/maps?q=${currentProject?.coordinates}&z=14&output=embed`}
                        className="rounded-lg"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveProjectFeed;