import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, isExpanded, onToggle }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Info' },
    { id: 'capabilities', label: 'Capabilities', icon: 'Settings' },
    { id: 'projects', label: 'Case Studies', icon: 'FolderOpen' },
    { id: 'specs', label: 'Technical Specs', icon: 'FileText' }
  ];

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden brand-shadow hover:shadow-lg brand-transition">
      {/* Card Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4">
            <div className={`p-3 rounded-lg ${service?.color}`}>
              <Icon name={service?.icon} size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground mb-2">{service?.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service?.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {service?.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
            onClick={onToggle}
          >
            {isExpanded ? 'Less' : 'More'}
          </Button>
        </div>
      </div>
      {/* Expanded Content */}
      {isExpanded && (
        <div className="border-t border-border">
          {/* Tab Navigation */}
          <div className="flex border-b border-border overflow-x-auto">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium whitespace-nowrap brand-transition ${
                  activeTab === tab?.id
                    ? 'text-primary border-b-2 border-primary bg-primary/5' :'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={tab?.icon} size={16} />
                <span>{tab?.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {service?.benefits?.map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Icon name="Check" size={16} className="text-safety-green mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Service Highlights</h4>
                    <div className="space-y-3">
                      {service?.highlights?.map((highlight, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span className="text-muted-foreground text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'capabilities' && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  {service?.capabilities?.map((capability, index) => (
                    <div key={index} className="p-4 bg-muted rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon name={capability?.icon} size={16} className="text-primary" />
                        <h5 className="font-medium text-foreground">{capability?.name}</h5>
                      </div>
                      <p className="text-sm text-muted-foreground">{capability?.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="space-y-4">
                {service?.caseStudies?.map((study, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h5 className="font-semibold text-foreground">{study?.title}</h5>
                        <p className="text-sm text-muted-foreground">{study?.client}</p>
                      </div>
                      <span className="px-2 py-1 bg-safety-green/10 text-safety-green text-xs rounded">
                        {study?.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{study?.description}</p>
                    <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                      <span>Duration: {study?.duration}</span>
                      <span>Team Size: {study?.teamSize}</span>
                      <span>Scope: {study?.scope}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Equipment & Tools</h4>
                    <div className="space-y-2">
                      {service?.equipment?.map((item, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                          <span className="text-sm text-foreground">{item?.name}</span>
                          <span className="text-xs text-muted-foreground">{item?.spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Certifications</h4>
                    <div className="space-y-2">
                      {service?.certifications?.map((cert, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Icon name="Award" size={16} className="text-accent" />
                          <span className="text-sm text-foreground">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Action Footer */}
          <div className="px-6 py-4 bg-muted border-t border-border">
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                Ready to discuss your {service?.title?.toLowerCase()} needs?
              </div>
              <div className="flex space-x-3">
                <Button variant="outline" size="sm" iconName="Calculator">
                  Get Quote
                </Button>
                <Button variant="default" size="sm" iconName="MessageSquare">
                  Consult Expert
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;