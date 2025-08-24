import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const ServiceComparison = () => {
  const [selectedServices, setSelectedServices] = useState(['nbn-fiber', 'copper-infrastructure']);

  const services = [
    {
      id: 'nbn-fiber',
      name: 'NBN Fiber Installation',
      icon: 'Wifi',
      complexity: 'High',
      duration: '2-5 days',
      teamSize: '4-6 technicians',
      equipment: 'Specialized fiber tools',
      certifications: 'NBN Co Certified',
      pricing: 'Premium',
      features: [
        'FTTP Installation',
        'FTTN Deployment',
        'HFC Upgrades',
        'Network Testing',
        'Quality Assurance',
        '24/7 Support'
      ]
    },
    {
      id: 'copper-infrastructure',
      name: 'Copper Infrastructure',
      icon: 'Cable',
      complexity: 'Medium',
      duration: '1-3 days',
      teamSize: '2-4 technicians',
      equipment: 'Standard telecom tools',
      certifications: 'Telstra Certified',
      pricing: 'Standard',
      features: [
        'Fault Detection',
        'Cable Repair',
        'System Upgrades',
        'Maintenance',
        'Testing & Verification',
        'Emergency Response'
      ]
    },
    {
      id: 'structured-cabling',
      name: 'Structured Cabling',
      icon: 'Network',
      complexity: 'Medium',
      duration: '1-4 days',
      teamSize: '3-5 technicians',
      equipment: 'Cabling & testing tools',
      certifications: 'BICSI Certified',
      pricing: 'Standard',
      features: [
        'Cat6/Cat6a Installation',
        'Fiber Backbone',
        'Patch Panel Setup',
        'Cable Management',
        'Performance Testing',
        'Documentation'
      ]
    },
    {
      id: 'civil-works',
      name: 'Civil Works',
      icon: 'Construction',
      complexity: 'High',
      duration: '3-10 days',
      teamSize: '6-10 workers',
      equipment: 'Heavy machinery',
      certifications: 'Civil Contractor License',
      pricing: 'Premium',
      features: [
        'Trenching & Excavation',
        'Conduit Installation',
        'Road Restoration',
        'Environmental Compliance',
        'Safety Management',
        'Project Coordination'
      ]
    }
  ];

  const handleServiceToggle = (serviceId) => {
    setSelectedServices(prev => 
      prev?.includes(serviceId)
        ? prev?.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const selectedServiceData = services?.filter(service => selectedServices?.includes(service?.id));

  const getComplexityColor = (complexity) => {
    switch (complexity) {
      case 'High': return 'text-urgent-red';
      case 'Medium': return 'text-warning';
      case 'Low': return 'text-safety-green';
      default: return 'text-muted-foreground';
    }
  };

  const getPricingColor = (pricing) => {
    switch (pricing) {
      case 'Premium': return 'text-accent';
      case 'Standard': return 'text-primary';
      case 'Budget': return 'text-safety-green';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Compare Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Select services to compare capabilities, requirements, and features side by side
          </p>
        </div>

        {/* Service Selection */}
        <div className="bg-card rounded-xl p-6 mb-8 border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Select Services to Compare</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services?.map((service) => (
              <div key={service?.id} className="flex items-center space-x-3">
                <Checkbox
                  checked={selectedServices?.includes(service?.id)}
                  onChange={() => handleServiceToggle(service?.id)}
                />
                <div className="flex items-center space-x-2">
                  <Icon name={service?.icon} size={16} className="text-primary" />
                  <span className="text-sm font-medium text-foreground">{service?.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        {selectedServiceData?.length > 0 && (
          <div className="bg-card rounded-xl overflow-hidden border border-border brand-shadow">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-4 font-semibold text-foreground">Feature</th>
                    {selectedServiceData?.map((service) => (
                      <th key={service?.id} className="text-center p-4 min-w-48">
                        <div className="flex flex-col items-center space-y-2">
                          <div className="p-2 bg-primary rounded-lg">
                            <Icon name={service?.icon} size={20} className="text-white" />
                          </div>
                          <span className="font-semibold text-foreground text-sm">{service?.name}</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium text-foreground">Complexity Level</td>
                    {selectedServiceData?.map((service) => (
                      <td key={service?.id} className="p-4 text-center">
                        <span className={`font-semibold ${getComplexityColor(service?.complexity)}`}>
                          {service?.complexity}
                        </span>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium text-foreground">Project Duration</td>
                    {selectedServiceData?.map((service) => (
                      <td key={service?.id} className="p-4 text-center text-muted-foreground">
                        {service?.duration}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium text-foreground">Team Size</td>
                    {selectedServiceData?.map((service) => (
                      <td key={service?.id} className="p-4 text-center text-muted-foreground">
                        {service?.teamSize}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium text-foreground">Equipment Required</td>
                    {selectedServiceData?.map((service) => (
                      <td key={service?.id} className="p-4 text-center text-muted-foreground text-sm">
                        {service?.equipment}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium text-foreground">Certifications</td>
                    {selectedServiceData?.map((service) => (
                      <td key={service?.id} className="p-4 text-center">
                        <span className="px-2 py-1 bg-safety-green/10 text-safety-green text-xs rounded">
                          {service?.certifications}
                        </span>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium text-foreground">Pricing Tier</td>
                    {selectedServiceData?.map((service) => (
                      <td key={service?.id} className="p-4 text-center">
                        <span className={`font-semibold ${getPricingColor(service?.pricing)}`}>
                          {service?.pricing}
                        </span>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-foreground">Key Features</td>
                    {selectedServiceData?.map((service) => (
                      <td key={service?.id} className="p-4">
                        <div className="space-y-1">
                          {service?.features?.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <Icon name="Check" size={12} className="text-safety-green flex-shrink-0" />
                              <span className="text-xs text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="p-6 bg-muted border-t border-border">
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Need help choosing the right service for your project?
                </div>
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm" iconName="Download">
                    Export Comparison
                  </Button>
                  <Button variant="default" size="sm" iconName="MessageSquare">
                    Consult Expert
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedServiceData?.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Select Services to Compare</h3>
            <p className="text-muted-foreground">Choose at least one service from the options above to view the comparison table.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceComparison;