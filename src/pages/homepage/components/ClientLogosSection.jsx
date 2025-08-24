import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ClientLogosSection = () => {
  const clients = [
    {
      name: 'Ventia',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop',
      projects: '150+',
      relationship: 'Primary Partner',
      description: 'Major infrastructure projects across Australia'
    },
    {
      name: 'ServiceStream',
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=200&h=100&fit=crop',
      projects: '200+',
      relationship: 'Strategic Alliance',
      description: 'NBN rollout and maintenance services'
    },
    {
      name: 'NBN Co',
      logo: 'https://images.pixabay.com/photo/2016/12/30/10/03/office-1940733_1280.jpg?w=200&h=100&fit=crop',
      projects: '300+',
      relationship: 'Certified Contractor',
      description: 'Nationwide fiber installation program'
    },
    {
      name: 'Telstra',
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=100&fit=crop',
      projects: '100+',
      relationship: 'Approved Vendor',
      description: 'Network infrastructure and maintenance'
    },
    {
      name: 'Optus',
      logo: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?w=200&h=100&fit=crop',
      projects: '75+',
      relationship: 'Service Provider',
      description: 'Mobile network infrastructure'
    },
    {
      name: 'TPG Telecom',
      logo: 'https://images.pixabay.com/photo/2017/08/10/08/47/laptop-2619337_1280.jpg?w=200&h=100&fit=crop',
      projects: '50+',
      relationship: 'Technical Partner',
      description: 'Fiber network deployment'
    }
  ];

  const achievements = [
    {
      icon: 'Award',
      title: '99.2% Project Success Rate',
      description: 'Industry-leading completion rate across all projects'
    },
    {
      icon: 'Shield',
      title: 'Zero Safety Incidents 2024',
      description: 'Maintaining perfect safety record with rigorous protocols'
    },
    {
      icon: 'Clock',
      title: '24/7 Emergency Response',
      description: 'Round-the-clock support for critical infrastructure'
    },
    {
      icon: 'Users',
      title: '156 Certified Technicians',
      description: 'Highly skilled team with industry certifications'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-safety-green/10 text-safety-green px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Handshake" size={16} />
            <span>Trusted Partners</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Industry Leaders Trust Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Partnering with Australia's leading telecommunications companies to deliver critical infrastructure projects nationwide.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {clients?.map((client, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-6 brand-shadow hover:shadow-lg brand-transition hover-lift"
            >
              <div className="text-center space-y-4">
                {/* Logo */}
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={client?.logo}
                    alt={`${client?.name} logo`}
                    className="w-full h-16 object-cover grayscale group-hover:grayscale-0 brand-transition"
                  />
                </div>
                
                {/* Client Info */}
                <div>
                  <h3 className="font-bold text-foreground mb-1">{client?.name}</h3>
                  <p className="text-sm text-accent font-medium mb-2">{client?.relationship}</p>
                  <div className="flex items-center justify-center space-x-1 text-xs text-muted-foreground mb-2">
                    <Icon name="Briefcase" size={12} />
                    <span>{client?.projects} Projects</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{client?.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">Why Industry Leaders Choose Us</h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Our track record speaks for itself. Delivering excellence in every project with unmatched reliability and expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements?.map((achievement, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto">
                  <Icon name={achievement?.icon} size={32} className="text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{achievement?.title}</h4>
                  <p className="text-white/80 text-sm leading-relaxed">{achievement?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl p-8 brand-shadow">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Partner with Australia's Premier Telecommunications Contractor?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join industry leaders who trust FiberLink Pro for their critical infrastructure projects. Let's discuss how we can support your telecommunications needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center justify-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 brand-transition">
                  <Icon name="MessageSquare" size={20} />
                  <span>Start Partnership Discussion</span>
                </button>
                <button className="inline-flex items-center justify-center space-x-2 border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:bg-muted brand-transition">
                  <Icon name="Download" size={20} />
                  <span>Download Capabilities Brochure</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;