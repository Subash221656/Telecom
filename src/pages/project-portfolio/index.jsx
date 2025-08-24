import React, { useState, useMemo } from 'react';
import Header from '../../components/ui/Header';
import Sidebar from '../../components/ui/Sidebar';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProjectCard from './components/ProjectCard';
import ProjectFilter from './components/ProjectFilter';
import ProjectStats from './components/ProjectStats';
import ProjectModal from './components/ProjectModal';
import FeaturedProject from './components/FeaturedProject';
import InteractiveMap from './components/InteractiveMap';

const ProjectPortfolio = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [filters, setFilters] = useState({
    serviceType: 'all',
    status: 'all',
    location: 'all',
    year: 'all'
  });

  // Mock project data
  const projects = [
    {
      id: 1,
      title: "NBN FTTP Rollout - Parramatta West",
      description: "Complete fiber-to-the-premises installation across 2,500 residential properties with underground conduit network and street cabinet deployment.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      serviceType: "NBN Fiber",
      client: "Ventia",
      clientLogo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      location: "Parramatta, NSW",
      state: "NSW",
      duration: "18 months",
      value: "$12.5M AUD",
      status: "Completed",
      year: "2024",
      badges: ["On Time", "Under Budget", "Zero Incidents"],
      fullDescription: `This comprehensive NBN FTTP project involved the complete transformation of telecommunications infrastructure across Parramatta West, delivering high-speed fiber connectivity to 2,500 residential properties. The project required extensive underground conduit installation, strategic placement of street cabinets, and coordination with multiple stakeholders including local councils and utility providers.

Our team successfully navigated complex urban challenges including heritage site considerations, existing utility conflicts, and minimal disruption requirements for residents and businesses. The project was completed 2 months ahead of schedule while maintaining our perfect safety record.`,
      achievements: [
        "2,500 premises connected to NBN FTTP network",
        "45km of underground fiber optic cable installed",
        "120 street cabinets deployed and commissioned",
        "Zero safety incidents across 18-month project",
        "98% customer satisfaction rating"
      ],
      specifications: [
        { label: "Cable Type", value: "Single-mode fiber optic" },
        { label: "Network Capacity", value: "1Gbps per premise" },
        { label: "Conduit Length", value: "45 kilometers" },
        { label: "Cabinet Count", value: "120 units" },
        { label: "Splice Points", value: "2,847 locations" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&h=600&fit=crop"
      ],
      timeline: [
        { title: "Project Initiation", date: "Jan 2023", description: "Site surveys and planning commenced", completed: true },
        { title: "Permits & Approvals", date: "Feb 2023", description: "All regulatory approvals obtained", completed: true },
        { title: "Underground Works", date: "Mar 2023", description: "Conduit installation and trenching", completed: true },
        { title: "Cable Installation", date: "Aug 2023", description: "Fiber optic cable deployment", completed: true },
        { title: "Testing & Commissioning", date: "Dec 2023", description: "Network testing and customer connections", completed: true },
        { title: "Project Completion", date: "Jan 2024", description: "Final handover and documentation", completed: true }
      ],
      testimonials: [
        {
          name: "Sarah Mitchell",
          role: "Project Manager, Ventia",
          avatar: "https://randomuser.me/api/portraits/women/32.jpg",
          content: "FiberLink Pro delivered exceptional results on this complex NBN rollout. Their attention to detail, safety standards, and ability to work within tight urban constraints was impressive. The project was completed ahead of schedule with zero safety incidents.",
          rating: 5
        }
      ]
    },
    {
      id: 2,
      title: "Civil Works - M1 Motorway Fiber Backbone",
      description: "Major civil engineering project installing 85km of high-capacity fiber backbone along M1 motorway corridor with redundant pathways.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop",
      serviceType: "Civil Works",
      client: "ServiceStream",
      clientLogo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      location: "Sydney to Newcastle, NSW",
      state: "NSW",
      duration: "24 months",
      value: "$18.7M AUD",
      status: "Completed",
      year: "2023",
      badges: ["Major Infrastructure", "Environmental Compliance", "Award Winner"],
      fullDescription: `The M1 Motorway Fiber Backbone project represents one of Australia's most significant telecommunications infrastructure developments, establishing a critical high-capacity fiber corridor connecting Sydney to Newcastle. This project required extensive civil engineering expertise, environmental compliance, and coordination with multiple government agencies.

The project involved complex horizontal directional drilling under major waterways, careful navigation of environmentally sensitive areas, and installation of redundant fiber pathways to ensure network resilience. Our team's expertise in large-scale civil works and telecommunications infrastructure was essential to the project's success.`,
      achievements: [
        "85km of high-capacity fiber backbone installed",
        "12 major waterway crossings completed",
        "100% environmental compliance maintained",
        "Redundant pathway architecture implemented",
        "Industry Excellence Award recipient"
      ],
      specifications: [
        { label: "Total Distance", value: "85 kilometers" },
        { label: "Fiber Count", value: "288 core backbone" },
        { label: "Conduit Size", value: "100mm HDPE" },
        { label: "Crossing Points", value: "12 major waterways" },
        { label: "Access Points", value: "24 locations" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop"
      ],
      timeline: [
        { title: "Environmental Assessment", date: "Mar 2021", description: "Comprehensive environmental impact study", completed: true },
        { title: "Design & Engineering", date: "Jun 2021", description: "Detailed engineering design and approvals", completed: true },
        { title: "Civil Construction", date: "Oct 2021", description: "Major civil works and trenching", completed: true },
        { title: "Fiber Installation", date: "Aug 2022", description: "Backbone fiber deployment", completed: true },
        { title: "Testing & Commissioning", date: "Dec 2022", description: "Network testing and optimization", completed: true },
        { title: "Project Handover", date: "Feb 2023", description: "Final documentation and handover", completed: true }
      ],
      testimonials: [
        {
          name: "Michael Chen",
          role: "Infrastructure Director, ServiceStream",
          avatar: "https://randomuser.me/api/portraits/men/45.jpg",
          content: "This was a complex project requiring exceptional civil engineering expertise. FiberLink Pro\'s team demonstrated outstanding technical capability and project management throughout the 24-month delivery. The quality of work exceeded our expectations.",
          rating: 5
        }
      ]
    },
    {
      id: 3,
      title: "Enterprise Structured Cabling - Sydney CBD Tower",
      description: "Complete structured cabling solution for 45-story commercial tower including Cat6A, fiber backbone, and smart building infrastructure.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      serviceType: "Structured Cabling",
      client: "Ventia",
      clientLogo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      location: "Sydney CBD, NSW",
      state: "NSW",
      duration: "12 months",
      value: "$8.2M AUD",
      status: "In Progress",
      year: "2024",
      badges: ["Smart Building", "LEED Certified", "High-Rise Specialist"],
      fullDescription: `The Sydney CBD Tower project showcases our expertise in complex high-rise structured cabling installations. This 45-story commercial development requires a comprehensive telecommunications infrastructure supporting modern smart building technologies, high-density workspace requirements, and future-ready connectivity solutions.

Our team is implementing a sophisticated cabling architecture that includes Cat6A horizontal cabling, multi-mode and single-mode fiber backbone systems, and integrated smart building infrastructure. The project demands precise coordination with other building systems and adherence to strict commercial construction timelines.`,
      achievements: [
        "45 floors of structured cabling infrastructure",
        "12,000+ Cat6A data points installed",
        "Fiber backbone to every floor",
        "Smart building integration completed",
        "LEED certification compliance maintained"
      ],
      specifications: [
        { label: "Building Height", value: "45 stories" },
        { label: "Data Points", value: "12,000+ Cat6A" },
        { label: "Fiber Backbone", value: "OM4 multimode" },
        { label: "Cable Management", value: "Overhead pathway" },
        { label: "Testing Standard", value: "TIA-568.2-D" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop"
      ],
      timeline: [
        { title: "Design Phase", date: "Jan 2024", description: "Detailed cabling design and specifications", completed: true },
        { title: "Material Procurement", date: "Feb 2024", description: "Cable and hardware procurement", completed: true },
        { title: "Installation Phase 1", date: "Mar 2024", description: "Floors 1-15 installation", completed: true },
        { title: "Installation Phase 2", date: "Jun 2024", description: "Floors 16-30 installation", completed: true },
        { title: "Installation Phase 3", date: "Sep 2024", description: "Floors 31-45 installation", completed: false },
        { title: "Testing & Certification", date: "Nov 2024", description: "Complete system testing", completed: false }
      ],
      testimonials: [
        {
          name: "Jennifer Walsh",
          role: "Project Coordinator, Ventia",
          avatar: "https://randomuser.me/api/portraits/women/28.jpg",
          content: "The structured cabling work in this high-rise project has been exceptional. FiberLink Pro\'s team shows great attention to detail and maintains excellent coordination with other trades. Their expertise in smart building integration is evident.",
          rating: 5
        }
      ]
    },
    {
      id: 4,
      title: "HFC Network Upgrade - Western Sydney",
      description: "Comprehensive HFC network modernization covering 15,000 premises with DOCSIS 3.1 technology and node splitting optimization.",
      image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&h=600&fit=crop",
      serviceType: "HFC Network",
      client: "ServiceStream",
      clientLogo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      location: "Blacktown, NSW",
      state: "NSW",
      duration: "15 months",
      value: "$9.8M AUD",
      status: "Completed",
      year: "2023",
      badges: ["DOCSIS 3.1", "Network Optimization", "Large Scale"],
      fullDescription: `The Western Sydney HFC Network Upgrade project involved comprehensive modernization of existing hybrid fiber-coaxial infrastructure to support DOCSIS 3.1 technology standards. This large-scale project covered 15,000 premises across the Blacktown region, requiring careful planning to minimize service disruption while implementing significant network improvements.

Our team successfully executed node splitting operations, upgraded amplifier cascades, and implemented advanced network monitoring systems. The project required extensive coordination with existing service providers and careful management of customer communications throughout the upgrade process.`,
      achievements: [
        "15,000 premises upgraded to DOCSIS 3.1",
        "Network capacity increased by 400%",
        "Service interruption minimized to <2 hours per premise",
        "Advanced monitoring systems implemented",
        "Customer satisfaction maintained at 95%+"
      ],
      specifications: [
        { label: "Technology Standard", value: "DOCSIS 3.1" },
        { label: "Premises Covered", value: "15,000 homes" },
        { label: "Node Count", value: "85 upgraded nodes" },
        { label: "Amplifier Cascade", value: "340 units upgraded" },
        { label: "Frequency Range", value: "5-1218 MHz" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop"
      ],
      timeline: [
        { title: "Network Assessment", date: "Feb 2022", description: "Comprehensive network analysis and planning", completed: true },
        { title: "Equipment Procurement", date: "Apr 2022", description: "DOCSIS 3.1 equipment sourcing", completed: true },
        { title: "Pilot Deployment", date: "Jun 2022", description: "Initial node upgrades and testing", completed: true },
        { title: "Full Rollout", date: "Aug 2022", description: "Network-wide upgrade implementation", completed: true },
        { title: "Optimization Phase", date: "Jan 2023", description: "Performance tuning and optimization", completed: true },
        { title: "Project Completion", date: "Mar 2023", description: "Final testing and handover", completed: true }
      ],
      testimonials: [
        {
          name: "David Thompson",
          role: "Network Operations Manager, ServiceStream",
          avatar: "https://randomuser.me/api/portraits/men/52.jpg",
          content: "The HFC upgrade project was executed flawlessly. FiberLink Pro\'s technical expertise in DOCSIS 3.1 technology and their ability to minimize customer impact during the upgrade process was outstanding. Network performance improvements exceeded our expectations.",
          rating: 5
        }
      ]
    },
    {
      id: 5,
      title: "Regional Fiber Extension - Blue Mountains",
      description: "Rural fiber network extension bringing high-speed connectivity to remote communities across challenging mountainous terrain.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      serviceType: "NBN Fiber",
      client: "Ventia",
      clientLogo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      location: "Blue Mountains, NSW",
      state: "NSW",
      duration: "20 months",
      value: "$14.3M AUD",
      status: "Planning",
      year: "2024",
      badges: ["Rural Connectivity", "Challenging Terrain", "Community Impact"],
      fullDescription: `The Blue Mountains Regional Fiber Extension project addresses the critical need for high-speed internet connectivity in remote mountainous communities. This challenging project involves extending fiber optic infrastructure across difficult terrain, including steep gradients, rock formations, and environmentally sensitive areas.

The project will connect 8 remote communities to the national broadband network, providing essential digital infrastructure for education, healthcare, and economic development. Our team's expertise in challenging terrain installations and environmental compliance makes this project possible.`,
      achievements: [
        "8 remote communities to be connected",
        "65km of fiber optic cable planned",
        "Environmental impact assessment completed",
        "Community consultation program established",
        "Innovative installation techniques developed"
      ],
      specifications: [
        { label: "Total Distance", value: "65 kilometers" },
        { label: "Communities Served", value: "8 locations" },
        { label: "Premises Connected", value: "1,200 homes" },
        { label: "Terrain Type", value: "Mountainous/Rocky" },
        { label: "Installation Method", value: "Aerial & Underground" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop"
      ],
      timeline: [
        { title: "Feasibility Study", date: "Jan 2024", description: "Technical and environmental feasibility", completed: true },
        { title: "Community Consultation", date: "Mar 2024", description: "Stakeholder engagement and feedback", completed: true },
        { title: "Environmental Approvals", date: "May 2024", description: "Environmental impact assessments", completed: false },
        { title: "Design Finalization", date: "Jul 2024", description: "Detailed engineering design", completed: false },
        { title: "Construction Phase", date: "Sep 2024", description: "Fiber installation commencement", completed: false },
        { title: "Service Activation", date: "May 2025", description: "Network testing and service launch", completed: false }
      ],
      testimonials: [
        {
          name: "Lisa Anderson",
          role: "Regional Development Manager, Ventia",
          avatar: "https://randomuser.me/api/portraits/women/41.jpg",
          content: "This project represents a significant investment in rural connectivity. FiberLink Pro's approach to community engagement and their innovative solutions for challenging terrain installations gives us confidence in successful delivery.",
          rating: 5
        }
      ]
    },
    {
      id: 6,
      title: "Data Center Interconnect - Melbourne",
      description: "High-capacity fiber interconnect between three major data centers with redundant pathways and 24/7 monitoring systems.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      serviceType: "Structured Cabling",
      client: "ServiceStream",
      clientLogo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      location: "Melbourne, VIC",
      state: "VIC",
      duration: "8 months",
      value: "$6.5M AUD",
      status: "Completed",
      year: "2024",
      badges: ["Mission Critical", "Redundant Design", "24/7 Monitoring"],
      fullDescription: `The Melbourne Data Center Interconnect project established critical high-capacity fiber connections between three major data center facilities, creating a resilient network infrastructure supporting cloud services and enterprise connectivity. This mission-critical project required precise engineering, redundant pathway design, and implementation of advanced monitoring systems.

Our team delivered a sophisticated fiber infrastructure with multiple diverse routes, ensuring network resilience and meeting strict uptime requirements. The project included installation of advanced optical monitoring equipment and integration with existing data center management systems.`,
      achievements: [
        "Three data centers interconnected",
        "Redundant pathway architecture implemented",
        "99.99% uptime SLA capability achieved",
        "Advanced optical monitoring deployed",
        "Zero-downtime cutover completed"
      ],
      specifications: [
        { label: "Fiber Type", value: "Single-mode OS2" },
        { label: "Capacity", value: "400Gbps per path" },
        { label: "Redundancy", value: "Dual diverse routes" },
        { label: "Monitoring", value: "OTDR continuous" },
        { label: "Distance", value: "25 kilometers total" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
      ],
      timeline: [
        { title: "Route Survey", date: "Jan 2024", description: "Detailed route planning and permits", completed: true },
        { title: "Pathway Construction", date: "Feb 2024", description: "Conduit installation and preparation", completed: true },
        { title: "Fiber Installation", date: "Apr 2024", description: "Cable pulling and termination", completed: true },
        { title: "Testing Phase", date: "Jun 2024", description: "Comprehensive system testing", completed: true },
        { title: "Monitoring Setup", date: "Jul 2024", description: "OTDR and monitoring deployment", completed: true },
        { title: "Service Activation", date: "Aug 2024", description: "Live service commencement", completed: true }
      ],
      testimonials: [
        {
          name: "Robert Kim",
          role: "Infrastructure Manager, ServiceStream",
          avatar: "https://randomuser.me/api/portraits/men/38.jpg",
          content: "The data center interconnect project was executed with exceptional precision. FiberLink Pro\'s understanding of mission-critical requirements and their attention to redundancy and monitoring was exactly what we needed for this high-stakes project.",
          rating: 5
        }
      ]
    }
  ];

  // Featured project (first project)
  const featuredProject = projects?.[0];

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projects?.filter(project => {
      if (filters?.serviceType !== 'all' && project?.serviceType !== filters?.serviceType) return false;
      if (filters?.status !== 'all' && project?.status !== filters?.status) return false;
      if (filters?.location !== 'all' && project?.state !== filters?.location) return false;
      if (filters?.year !== 'all' && project?.year !== filters?.year) return false;
      return true;
    });
  }, [filters]);

  // Calculate stats
  const stats = useMemo(() => {
    const totalProjects = projects?.length;
    const completedProjects = projects?.filter(p => p?.status === 'Completed')?.length;
    const inProgressProjects = projects?.filter(p => p?.status === 'In Progress')?.length;
    const totalValue = projects?.reduce((sum, p) => {
      const value = parseFloat(p?.value?.replace(/[^\d.]/g, ''));
      return sum + value;
    }, 0);

    return {
      totalProjects: totalProjects?.toString(),
      completedProjects: completedProjects?.toString(),
      inProgressProjects: inProgressProjects?.toString(),
      totalValue: `$${totalValue?.toFixed(1)}M AUD`
    };
  }, []);

  const projectCounts = {
    total: filteredProjects?.length
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      serviceType: 'all',
      status: 'all',
      location: 'all',
      year: 'all'
    });
  };

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleProjectSelect = (project) => {
    handleViewDetails(project);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar 
        isCollapsed={sidebarCollapsed} 
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)} 
      />
      <main className={`pt-16 brand-transition ${sidebarCollapsed ? 'lg:ml-16' : 'lg:ml-64'}`}>
        <div className="p-6 lg:p-8">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                  Project Portfolio
                </h1>
                <p className="text-lg text-muted-foreground">
                  Showcasing our telecommunications infrastructure expertise across Australia
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex items-center bg-card border border-border rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`flex items-center justify-center w-8 h-8 rounded-md brand-transition ${
                      viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Icon name="Grid3X3" size={16} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`flex items-center justify-center w-8 h-8 rounded-md brand-transition ${
                      viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Icon name="List" size={16} />
                  </button>
                </div>
                
                <Button
                  variant="default"
                  iconName="Plus"
                  iconPosition="left"
                >
                  New Project
                </Button>
              </div>
            </div>

            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Icon name="Home" size={16} />
              <span>FiberLink Pro</span>
              <Icon name="ChevronRight" size={16} />
              <span className="text-foreground">Project Portfolio</span>
            </div>
          </div>

          {/* Project Stats */}
          <ProjectStats stats={stats} />

          {/* Featured Project */}
          <FeaturedProject 
            project={featuredProject} 
            onViewDetails={handleViewDetails} 
          />

          {/* Interactive Map */}
          <InteractiveMap 
            projects={projects} 
            onProjectSelect={handleProjectSelect} 
          />

          {/* Project Filter */}
          <ProjectFilter
            filters={filters}
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearFilters}
            projectCounts={projectCounts}
          />

          {/* Projects Grid/List */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-foreground">
                All Projects ({filteredProjects?.length})
              </h2>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="Filter" size={16} />
                  <span>
                    {Object.values(filters)?.filter(f => f !== 'all')?.length > 0 
                      ? `${Object.values(filters)?.filter(f => f !== 'all')?.length} filters active`
                      : 'No filters applied'
                    }
                  </span>
                </div>
              </div>
            </div>

            {filteredProjects?.length === 0 ? (
              <div className="text-center py-12">
                <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">No projects found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your filters to see more projects
                </p>
                <Button
                  variant="outline"
                  onClick={handleClearFilters}
                  iconName="X"
                  iconPosition="left"
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className={
                viewMode === 'grid' ?'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' :'space-y-4'
              }>
                {filteredProjects?.map((project) => (
                  <ProjectCard
                    key={project?.id}
                    project={project}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Load More Button */}
          {filteredProjects?.length > 0 && (
            <div className="text-center">
              <Button
                variant="outline"
                iconName="ChevronDown"
                iconPosition="right"
              >
                Load More Projects
              </Button>
            </div>
          )}
        </div>
      </main>
      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default ProjectPortfolio;