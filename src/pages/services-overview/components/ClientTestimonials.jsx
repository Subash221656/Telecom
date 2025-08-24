import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ClientTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      client: "Ventia",
      project: "NBN Fiber Rollout - Western Sydney",
      testimonial: `FiberLink Pro delivered exceptional results on our large-scale NBN deployment. Their technical expertise and project management capabilities exceeded our expectations. The team completed 200+ installations ahead of schedule with zero safety incidents.`,
      contactPerson: "Sarah Mitchell",
      position: "Project Manager",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      projectDetails: {
        scope: "200+ FTTP installations",
        duration: "8 weeks",
        teamSize: "12 technicians",
        completion: "2 weeks ahead of schedule"
      },
      metrics: {
        safetyRecord: "Zero incidents",
        qualityScore: "98.5%",
        clientSatisfaction: "Excellent"
      }
    },
    {
      id: 2,
      client: "ServiceStream",
      project: "Copper Infrastructure Maintenance",
      testimonial: `Outstanding service delivery and technical competence. FiberLink Pro's proactive approach to maintenance and their 24/7 emergency response capability has significantly improved our network reliability. Highly recommended for critical infrastructure projects.`,
      contactPerson: "Michael Chen",
      position: "Operations Director",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      projectDetails: {
        scope: "Regional network maintenance",
        duration: "Ongoing contract",
        teamSize: "6 technicians",
        completion: "100% SLA compliance"
      },
      metrics: {
        safetyRecord: "Perfect record",
        qualityScore: "99.2%",
        clientSatisfaction: "Outstanding"
      }
    },
    {
      id: 3,
      client: "Corporate Client",
      project: "Structured Cabling - Commercial Complex",
      testimonial: `Professional, efficient, and reliable. The structured cabling installation for our new headquarters was completed flawlessly. FiberLink Pro's attention to detail and comprehensive documentation made the handover seamless.`,
      contactPerson: "Emma Thompson",
      position: "Facilities Manager",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      projectDetails: {
        scope: "15-floor commercial building",
        duration: "4 weeks",
        teamSize: "8 technicians",
        completion: "On time and budget"
      },
      metrics: {
        safetyRecord: "Zero incidents",
        qualityScore: "97.8%",
        clientSatisfaction: "Excellent"
      }
    },
    {
      id: 4,
      client: "Infrastructure Partner",
      project: "Civil Works - Fiber Backbone",
      testimonial: `Exceptional civil works capability with strong environmental compliance. FiberLink Pro managed complex trenching and restoration work across multiple council areas while maintaining excellent stakeholder relationships.`,
      contactPerson: "David Rodriguez",
      position: "Infrastructure Manager",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      projectDetails: {
        scope: "25km fiber backbone",
        duration: "12 weeks",
        teamSize: "15 workers",
        completion: "Environmental compliance 100%"
      },
      metrics: {
        safetyRecord: "Outstanding",
        qualityScore: "98.9%",
        clientSatisfaction: "Excellent"
      }
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const currentTestimonial = testimonials?.[activeTestimonial];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by industry leaders for critical telecommunications infrastructure projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Testimonial Content */}
          <div className="space-y-8">
            <div className="bg-card rounded-xl p-8 border border-border brand-shadow">
              {/* Client Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img
                    src={currentTestimonial?.avatar}
                    alt={currentTestimonial?.contactPerson}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-1">
                    <h3 className="text-lg font-bold text-foreground">{currentTestimonial?.client}</h3>
                    <div className="flex items-center space-x-1">
                      {[...Array(currentTestimonial?.rating)]?.map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-accent fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{currentTestimonial?.project}</p>
                </div>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg text-foreground leading-relaxed mb-6 italic">
                "{currentTestimonial?.testimonial}"
              </blockquote>

              {/* Contact Person */}
              <div className="flex items-center justify-between pt-6 border-t border-border">
                <div>
                  <div className="font-semibold text-foreground">{currentTestimonial?.contactPerson}</div>
                  <div className="text-sm text-muted-foreground">{currentTestimonial?.position}</div>
                </div>
                
                {/* Navigation Controls */}
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="ChevronLeft"
                    onClick={prevTestimonial}
                  />
                  <span className="text-sm text-muted-foreground px-3">
                    {activeTestimonial + 1} of {testimonials?.length}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="ChevronRight"
                    onClick={nextTestimonial}
                  />
                </div>
              </div>
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center space-x-2">
              {testimonials?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full brand-transition ${
                    index === activeTestimonial ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Project Metrics */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 border border-border brand-shadow">
              <h4 className="text-lg font-semibold text-foreground mb-4">Project Details</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Project Scope</span>
                  <span className="font-medium text-foreground">{currentTestimonial?.projectDetails?.scope}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="font-medium text-foreground">{currentTestimonial?.projectDetails?.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Team Size</span>
                  <span className="font-medium text-foreground">{currentTestimonial?.projectDetails?.teamSize}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Completion</span>
                  <span className="font-medium text-safety-green">{currentTestimonial?.projectDetails?.completion}</span>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border brand-shadow">
              <h4 className="text-lg font-semibold text-foreground mb-4">Performance Metrics</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Shield" size={16} className="text-safety-green" />
                    <span className="text-muted-foreground">Safety Record</span>
                  </div>
                  <span className="font-medium text-safety-green">{currentTestimonial?.metrics?.safetyRecord}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Award" size={16} className="text-accent" />
                    <span className="text-muted-foreground">Quality Score</span>
                  </div>
                  <span className="font-medium text-accent">{currentTestimonial?.metrics?.qualityScore}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="ThumbsUp" size={16} className="text-primary" />
                    <span className="text-muted-foreground">Client Satisfaction</span>
                  </div>
                  <span className="font-medium text-primary">{currentTestimonial?.metrics?.clientSatisfaction}</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-accent p-6 rounded-xl text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Users" size={24} />
                <h4 className="text-lg font-semibold">Join Our Client Network</h4>
              </div>
              <p className="text-white/90 mb-4">
                Experience the same level of excellence that our clients trust for their critical infrastructure projects.
              </p>
              <Button variant="secondary" size="sm" iconName="MessageSquare" iconPosition="left">
                Start Your Project
              </Button>
            </div>
          </div>
        </div>

        {/* Client Logos */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-2">Trusted by Industry Leaders</h3>
            <p className="text-muted-foreground">Delivering excellence for Australia's telecommunications infrastructure</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">VENTIA</div>
              <div className="text-xs text-muted-foreground">Infrastructure Partner</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">ServiceStream</div>
              <div className="text-xs text-muted-foreground">Network Solutions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">NBN Co</div>
              <div className="text-xs text-muted-foreground">Certified Installer</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">Telstra</div>
              <div className="text-xs text-muted-foreground">Approved Contractor</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;