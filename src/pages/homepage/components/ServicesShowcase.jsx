import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ServicesShowcase = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 'nbn-fiber',
      name: 'NBN Fiber Installation',
      category: 'Fiber Optics',
      description: 'End-to-end NBN fiber installation services including underground and aerial deployment with real-time progress tracking.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop',
      icon: 'Cable',
      stats: {
        completed: '500+',
        success_rate: '99.2%',
        avg_time: '3.5 days'
      },
      features: [
        'Underground fiber deployment',
        'Aerial cable installation',
        'Pit and pipe construction',
        'Connection activation'
      ],
      timeline: '3-5 business days',
      certification: 'NBN Co Certified'
    },
    {
      id: 'copper-infrastructure',
      name: 'Copper Infrastructure',
      category: 'Legacy Systems',
      description: 'Comprehensive copper network maintenance, upgrades, and integration with modern fiber systems for seamless connectivity.',
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?w=800&h=500&fit=crop',
      icon: 'Zap',
      stats: {
        completed: '300+',
        success_rate: '98.8%',
        avg_time: '2.1 days'
      },
      features: [
        'Copper line maintenance',
        'Network diagnostics',
        'System upgrades',
        'Fiber integration'
      ],
      timeline: '1-3 business days',
      certification: 'Telstra Approved'
    },
    {
      id: 'structured-cabling',
      name: 'Structured Cabling',
      category: 'Commercial',
      description: 'Professional structured cabling solutions for commercial buildings, data centers, and enterprise facilities.',
      image: 'https://images.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg?w=800&h=500&fit=crop',
      icon: 'Network',
      stats: {
        completed: '150+',
        success_rate: '100%',
        avg_time: '5.2 days'
      },
      features: [
        'Cat6A installation',
        'Fiber backbone',
        'Patch panel setup',
        'Testing & certification'
      ],
      timeline: '5-7 business days',
      certification: 'BICSI Certified'
    },
    {
      id: 'civil-works',
      name: 'Civil Works',
      category: 'Infrastructure',
      description: 'Complete civil engineering services including trenching, conduit installation, and site preparation for telecommunications infrastructure.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=500&fit=crop',
      icon: 'Construction',
      stats: {
        completed: '200+',
        success_rate: '99.5%',
        avg_time: '7.3 days'
      },
      features: [
        'Trenching & excavation',
        'Conduit installation',
        'Site restoration',
        'Traffic management'
      ],
      timeline: '7-10 business days',
      certification: 'Civil Contractor License'
    }
  ];

  const currentService = services?.[activeService];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Settings" size={16} />
            <span>Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Telecommunications Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive infrastructure services delivered by certified professionals with industry-leading safety records and completion rates.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Service Navigation */}
          <div className="lg:col-span-4 space-y-4">
            {services?.map((service, index) => (
              <button
                key={service?.id}
                onClick={() => setActiveService(index)}
                className={`w-full text-left p-6 rounded-xl brand-transition ${
                  activeService === index
                    ? 'bg-primary text-primary-foreground brand-shadow'
                    : 'bg-card hover:bg-muted'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    activeService === index
                      ? 'bg-primary-foreground/20'
                      : 'bg-primary/10'
                  }`}>
                    <Icon 
                      name={service?.icon} 
                      size={24} 
                      className={activeService === index ? 'text-primary-foreground' : 'text-primary'}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{service?.name}</h3>
                    <p className={`text-sm ${
                      activeService === index ? 'text-primary-foreground/80' : 'text-muted-foreground'
                    }`}>
                      {service?.category}
                    </p>
                  </div>
                  <Icon 
                    name="ChevronRight" 
                    size={20} 
                    className={activeService === index ? 'text-primary-foreground' : 'text-muted-foreground'}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Service Details */}
          <div className="lg:col-span-8">
            <div className="bg-card rounded-2xl overflow-hidden brand-shadow">
              {/* Service Image */}
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <Image
                  src={currentService?.image}
                  alt={currentService?.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{currentService?.name}</h3>
                      <div className="flex items-center space-x-2">
                        <Icon name="Award" size={16} className="text-accent" />
                        <span className="text-white/90 text-sm">{currentService?.certification}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white/80 text-sm">Timeline</div>
                      <div className="text-white font-semibold">{currentService?.timeline}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-8">
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {currentService?.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">{currentService?.stats?.completed}</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-safety-green mb-1">{currentService?.stats?.success_rate}</div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-1">{currentService?.stats?.avg_time}</div>
                    <div className="text-sm text-muted-foreground">Avg. Completion</div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="font-bold text-foreground mb-4">Service Includes:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {currentService?.features?.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Icon name="CheckCircle" size={16} className="text-safety-green flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="default" iconName="MessageSquare" iconPosition="left">
                    Request Quote
                  </Button>
                  <Link to="/services-overview">
                    <Button variant="outline" iconName="ExternalLink" iconPosition="right">
                      View All Services
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;