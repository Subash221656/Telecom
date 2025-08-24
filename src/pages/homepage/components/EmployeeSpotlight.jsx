import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const EmployeeSpotlight = () => {
  const [currentEmployee, setCurrentEmployee] = useState(0);

  const employees = [
    {
      id: 1,
      name: 'Michael Chen',
      position: 'Senior Fiber Technician',
      team: 'Alpha Team',
      experience: '8 years',
      specialization: 'NBN Fiber Installation',
      certifications: ['NBN Co Certified', 'ACMA Licensed', 'First Aid'],
      safetyRecord: '2,400 days incident-free',
      completedProjects: 150,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      location: 'Sydney, NSW',
      achievements: [
        'Employee of the Month - March 2024',
        'Safety Excellence Award 2023',
        'NBN Installation Specialist'
      ],
      quote: "Every fiber connection we make brings communities closer together. It\'s not just about the technology - it\'s about connecting people.",
      skills: ['Fiber Splicing', 'OTDR Testing', 'Underground Installation', 'Safety Management'],
      currentProject: 'NBN Rollout - Parramatta'
    },
    {
      id: 2,
      name: 'Sarah Williams',
      position: 'Civil Works Supervisor',
      team: 'Beta Team',
      experience: '12 years',
      specialization: 'Infrastructure & Civil Works',
      certifications: ['Civil Contractor License', 'Traffic Control', 'Excavation Safety'],
      safetyRecord: '3,200 days incident-free',
      completedProjects: 200,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop',
      location: 'Melbourne, VIC',
      achievements: [
        'Outstanding Leadership Award 2024',
        'Zero Incident Team Leader',
        'Infrastructure Excellence Recognition'
      ],
      quote: "Building the foundation for Australia's digital future requires precision, safety, and teamwork. Every project matters.",
      skills: ['Project Management', 'Excavation', 'Site Safety', 'Team Leadership'],
      currentProject: 'Civil Works - Collins Street'
    },
    {
      id: 3,
      name: 'David Kumar',
      position: 'Structured Cabling Specialist',
      team: 'Gamma Team',
      experience: '6 years',
      specialization: 'Commercial Cabling Systems',
      certifications: ['BICSI Certified', 'Cat6A Specialist', 'Data Center Certified'],
      safetyRecord: '1,800 days incident-free',
      completedProjects: 85,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      location: 'Brisbane, QLD',
      achievements: [
        'Technical Innovation Award 2024',
        'Customer Excellence Recognition',
        'Structured Cabling Expert'
      ],
      quote: "Precision in every connection, excellence in every installation. That's how we build networks that last.",
      skills: ['Structured Cabling', 'Network Testing', 'Cable Management', 'Quality Assurance'],
      currentProject: 'Corporate Tower - Brisbane CBD'
    },
    {
      id: 4,
      name: 'Emma Thompson',
      position: 'Safety Coordinator',
      team: 'Operations',
      experience: '10 years',
      specialization: 'Workplace Safety & Compliance',
      certifications: ['Safety Officer', 'Risk Assessment', 'Emergency Response'],
      safetyRecord: '3,650 days incident-free',
      completedProjects: 300,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      location: 'Perth, WA',
      achievements: [
        'Safety Champion 2024',
        'Zero Incident Program Leader',
        'Industry Safety Recognition'
      ],
      quote: "Safety isn't just a priority - it's our foundation. Every team member goes home safe, every single day.",
      skills: ['Safety Management', 'Risk Assessment', 'Training', 'Compliance'],
      currentProject: 'Safety Audit - All Sites'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEmployee((prev) => (prev + 1) % employees?.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const employee = employees?.[currentEmployee];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Star" size={16} />
            <span>Team Excellence</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Certified professionals with industry-leading expertise and perfect safety records, delivering excellence in every project across Australia.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Employee Profile */}
          <div className="lg:col-span-8">
            <div className="bg-card rounded-2xl overflow-hidden brand-shadow">
              <div className="grid md:grid-cols-5 gap-0">
                {/* Employee Image */}
                <div className="md:col-span-2 relative">
                  <div className="aspect-square md:h-full overflow-hidden">
                    <Image
                      src={employee?.image}
                      alt={employee?.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-light rounded-lg p-3">
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground">Current Project</div>
                        <div className="font-semibold text-foreground text-sm">{employee?.currentProject}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Employee Details */}
                <div className="md:col-span-3 p-8">
                  <div className="space-y-6">
                    {/* Header */}
                    <div>
                      <h3 className="text-3xl font-bold text-foreground mb-2">{employee?.name}</h3>
                      <p className="text-xl text-accent font-semibold mb-1">{employee?.position}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Icon name="MapPin" size={14} />
                          <span>{employee?.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="Users" size={14} />
                          <span>{employee?.team}</span>
                        </div>
                      </div>
                    </div>

                    {/* Quote */}
                    <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                      "{employee?.quote}"
                    </blockquote>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-muted/30 rounded-lg">
                        <div className="text-2xl font-bold text-primary">{employee?.experience}</div>
                        <div className="text-xs text-muted-foreground">Experience</div>
                      </div>
                      <div className="text-center p-3 bg-muted/30 rounded-lg">
                        <div className="text-2xl font-bold text-safety-green">{employee?.completedProjects}</div>
                        <div className="text-xs text-muted-foreground">Projects</div>
                      </div>
                    </div>

                    {/* Safety Record */}
                    <div className="bg-safety-green/10 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon name="Shield" size={20} className="text-safety-green" />
                        <span className="font-semibold text-foreground">Safety Record</span>
                      </div>
                      <p className="text-safety-green font-bold">{employee?.safetyRecord}</p>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Core Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {employee?.skills?.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Navigation & Stats */}
          <div className="lg:col-span-4 space-y-6">
            {/* Employee Navigation */}
            <div className="bg-card rounded-xl p-6 brand-shadow">
              <h4 className="font-bold text-foreground mb-4">Team Members</h4>
              <div className="space-y-3">
                {employees?.map((emp, index) => (
                  <button
                    key={emp?.id}
                    onClick={() => setCurrentEmployee(index)}
                    className={`w-full text-left p-3 rounded-lg brand-transition ${
                      currentEmployee === index
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={emp?.image}
                          alt={emp?.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium truncate">{emp?.name}</div>
                        <div className={`text-sm truncate ${
                          currentEmployee === index ? 'text-primary-foreground/80' : 'text-muted-foreground'
                        }`}>
                          {emp?.position}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-card rounded-xl p-6 brand-shadow">
              <h4 className="font-bold text-foreground mb-4">Certifications</h4>
              <div className="space-y-3">
                {employee?.certifications?.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon name="Award" size={16} className="text-accent flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-card rounded-xl p-6 brand-shadow">
              <h4 className="font-bold text-foreground mb-4">Recent Achievements</h4>
              <div className="space-y-3">
                {employee?.achievements?.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Icon name="Trophy" size={16} className="text-warning flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Stats */}
            <div className="bg-gradient-to-br from-primary to-secondary rounded-xl p-6 text-white">
              <h4 className="font-bold mb-4">Team Excellence</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white/90">Total Team Members</span>
                  <span className="font-bold">156</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/90">Certified Professionals</span>
                  <span className="font-bold">100%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/90">Safety Record 2024</span>
                  <span className="font-bold text-safety-green">Zero Incidents</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/90">Average Experience</span>
                  <span className="font-bold">9+ Years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeSpotlight;