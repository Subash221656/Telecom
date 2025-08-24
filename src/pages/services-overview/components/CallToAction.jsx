import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CallToAction = () => {
  const actionCards = [
    {
      title: "Start Your Project",
      description: "Ready to begin? Get a detailed consultation and project proposal tailored to your specific requirements.",
      icon: "Rocket",
      color: "bg-primary",
      action: "Get Started",
      link: "/client-portal",
      features: [
        "Free initial consultation",
        "Detailed project proposal",
        "Timeline & cost estimation",
        "Technical requirements review"
      ]
    },
    {
      title: "Emergency Support",
      description: "Critical infrastructure issues? Our 24/7 emergency response team is ready to assist with urgent repairs and maintenance.",
      icon: "Phone",
      color: "bg-urgent-red",
      action: "Call Emergency",
      link: "tel:1800-FIBER-PRO",
      features: [
        "24/7 availability",
        "Rapid response time",
        "Certified technicians",
        "Emergency equipment ready"
      ]
    },
    {
      title: "View Our Work",
      description: "Explore our comprehensive portfolio of completed telecommunications infrastructure projects across Australia.",
      icon: "FolderOpen",
      color: "bg-accent",
      action: "View Portfolio",
      link: "/project-portfolio",
      features: [
        "500+ completed projects",
        "Before & after photos",
        "Technical specifications",
        "Client testimonials"
      ]
    }
  ];

  const quickLinks = [
    { name: "Service Capabilities", path: "/services-overview", icon: "Settings" },
    { name: "Client Portal", path: "/client-portal", icon: "Users" },
    { name: "Employee Hub", path: "/employee-hub", icon: "UserCheck" },
    { name: "Inventory System", path: "/inventory-management", icon: "Package" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-secondary to-accent text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Main CTA Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Build the Future of
            <span className="block text-accent">Australian Connectivity?</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join the telecommunications companies that trust FiberLink Pro for their critical infrastructure projects. 
            From NBN installations to complex civil works, we deliver excellence every time.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {actionCards?.map((card, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:bg-white/15 brand-transition">
              <div className="flex items-center space-x-4 mb-6">
                <div className={`p-3 rounded-lg ${card?.color}`}>
                  <Icon name={card?.icon} size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{card?.title}</h3>
              </div>
              
              <p className="text-white/80 mb-6 leading-relaxed">
                {card?.description}
              </p>
              
              <ul className="space-y-2 mb-8">
                {card?.features?.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-accent flex-shrink-0" />
                    <span className="text-white/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {card?.link?.startsWith('tel:') ? (
                <a href={card?.link} className="block">
                  <Button variant="secondary" size="lg" fullWidth iconName={card?.icon} iconPosition="left">
                    {card?.action}
                  </Button>
                </a>
              ) : (
                <Link to={card?.link}>
                  <Button variant="secondary" size="lg" fullWidth iconName={card?.icon} iconPosition="left">
                    {card?.action}
                  </Button>
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Quick Navigation */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Explore FiberLink Pro</h3>
            <p className="text-white/80">Quick access to our key platforms and services</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks?.map((link, index) => (
              <Link
                key={index}
                to={link?.path}
                className="flex items-center space-x-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 brand-transition"
              >
                <Icon name={link?.icon} size={20} className="text-accent" />
                <span className="font-medium text-white">{link?.name}</span>
                <Icon name="ArrowRight" size={16} className="text-white/60 ml-auto" />
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center space-y-2">
              <Icon name="Phone" size={24} className="text-accent" />
              <div className="text-white font-semibold">24/7 Emergency</div>
              <div className="text-white/80">1800 FIBER PRO</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Icon name="Mail" size={24} className="text-accent" />
              <div className="text-white font-semibold">Project Inquiries</div>
              <div className="text-white/80">projects@fiberlinkpro.com.au</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Icon name="MapPin" size={24} className="text-accent" />
              <div className="text-white font-semibold">Service Areas</div>
              <div className="text-white/80">Australia Wide</div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent mb-1">500+</div>
              <div className="text-white/80 text-sm">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-1">99.8%</div>
              <div className="text-white/80 text-sm">Safety Record</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-1">15+</div>
              <div className="text-white/80 text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-1">24/7</div>
              <div className="text-white/80 text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;