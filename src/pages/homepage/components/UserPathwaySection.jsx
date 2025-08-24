import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const UserPathwaySection = () => {
  const pathways = [
    {
      id: 'client',
      title: "I\'m a Client",
      subtitle: "Project Management & Services",
      description: "Access your project dashboard, track installations, and communicate with our field teams in real-time.",
      icon: 'Building2',
      color: 'from-primary to-secondary',
      features: [
        'Real-time project tracking',
        'Direct team communication',
        'Document management',
        'Progress reporting'
      ],
      cta: 'Access Client Portal',
      route: '/client-portal',
      stats: '50+ Active Clients'
    },
    {
      id: 'employee',
      title: "I\'m an Employee",
      subtitle: "Collaboration & Tools",
      description: "Connect with your team, access project resources, manage inventory, and share field updates instantly.",
      icon: 'Users',
      color: 'from-accent to-warning',
      features: [
        'Team chat & collaboration',
        'Inventory management',
        'Project documentation',
        'Safety protocols'
      ],
      cta: 'Open Employee Hub',
      route: '/employee-hub',
      stats: '156 Team Members'
    },
    {
      id: 'exploring',
      title: "I\'m Exploring",
      subtitle: "Company & Capabilities",
      description: "Discover our telecommunications expertise, view completed projects, and learn about our industry-leading safety record.",
      icon: 'Compass',
      color: 'from-secondary to-primary',
      features: [
        'Service capabilities',
        'Project portfolio',
        'Company certifications',
        'Industry expertise'
      ],
      cta: 'Explore Services',
      route: '/services-overview',
      stats: '500+ Projects Completed'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Navigation" size={16} />
            <span>Choose Your Path</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Welcome to FiberLink Pro
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Australia's premier telecommunications infrastructure platform. Select your role to access the tools and information designed specifically for you.
          </p>
        </div>

        {/* Pathway Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {pathways?.map((pathway) => (
            <div
              key={pathway?.id}
              className="group relative bg-card rounded-2xl p-8 brand-shadow hover:shadow-xl brand-transition hover-lift overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${pathway?.color} opacity-5 group-hover:opacity-10 brand-transition`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon & Stats */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${pathway?.color} rounded-xl flex items-center justify-center`}>
                    <Icon name={pathway?.icon} size={32} className="text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Active</div>
                    <div className="text-lg font-bold text-foreground">{pathway?.stats}</div>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{pathway?.title}</h3>
                  <p className="text-accent font-semibold mb-3">{pathway?.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed">{pathway?.description}</p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <ul className="space-y-2">
                    {pathway?.features?.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Icon name="Check" size={16} className="text-safety-green flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Link to={pathway?.route}>
                  <Button 
                    variant="default" 
                    fullWidth 
                    iconName="ArrowRight" 
                    iconPosition="right"
                    className="group-hover:bg-primary group-hover:text-primary-foreground"
                  >
                    {pathway?.cta}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Access Bar */}
        <div className="bg-card rounded-2xl p-6 brand-shadow">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-urgent-red/10 rounded-lg flex items-center justify-center">
                <Icon name="Phone" size={24} className="text-urgent-red" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Emergency Support</h4>
                <p className="text-sm text-muted-foreground">24/7 technical assistance and emergency response</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="outline" iconName="Phone" iconPosition="left">
                1800 FIBER (1800 34237)
              </Button>
              <Button variant="default" iconName="MessageSquare" iconPosition="left">
                Live Chat Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserPathwaySection;