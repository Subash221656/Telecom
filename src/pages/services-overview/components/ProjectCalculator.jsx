import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

import Select from '../../../components/ui/Select';

const ProjectCalculator = () => {
  const [formData, setFormData] = useState({
    serviceType: '',
    projectSize: '',
    complexity: '',
    timeline: '',
    location: '',
    additionalServices: []
  });
  
  const [estimate, setEstimate] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const serviceOptions = [
    { value: 'nbn-fiber', label: 'NBN Fiber Installation' },
    { value: 'copper-infrastructure', label: 'Copper Infrastructure Maintenance' },
    { value: 'structured-cabling', label: 'Structured Cabling Solutions' },
    { value: 'civil-works', label: 'Civil Works & Trenching' }
  ];

  const projectSizeOptions = [
    { value: 'small', label: 'Small (1-10 connections)' },
    { value: 'medium', label: 'Medium (11-50 connections)' },
    { value: 'large', label: 'Large (51-200 connections)' },
    { value: 'enterprise', label: 'Enterprise (200+ connections)' }
  ];

  const complexityOptions = [
    { value: 'standard', label: 'Standard Installation' },
    { value: 'complex', label: 'Complex Environment' },
    { value: 'challenging', label: 'Challenging Access' },
    { value: 'specialized', label: 'Specialized Requirements' }
  ];

  const timelineOptions = [
    { value: 'urgent', label: 'Urgent (1-2 weeks)' },
    { value: 'standard', label: 'Standard (2-4 weeks)' },
    { value: 'flexible', label: 'Flexible (1-2 months)' },
    { value: 'planned', label: 'Planned (2+ months)' }
  ];

  const locationOptions = [
    { value: 'sydney', label: 'Sydney Metro' },
    { value: 'melbourne', label: 'Melbourne Metro' },
    { value: 'brisbane', label: 'Brisbane Metro' },
    { value: 'perth', label: 'Perth Metro' },
    { value: 'adelaide', label: 'Adelaide Metro' },
    { value: 'regional', label: 'Regional Australia' }
  ];

  const additionalServiceOptions = [
    { value: 'testing', label: 'Network Testing & Certification' },
    { value: 'documentation', label: 'As-Built Documentation' },
    { value: 'training', label: 'Staff Training' },
    { value: 'maintenance', label: '12-Month Maintenance Package' },
    { value: 'monitoring', label: '24/7 Network Monitoring' },
    { value: 'support', label: 'Priority Support Package' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateEstimate = async () => {
    setIsCalculating(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock calculation logic
    const baseRates = {
      'nbn-fiber': { small: 15000, medium: 45000, large: 120000, enterprise: 300000 },
      'copper-infrastructure': { small: 8000, medium: 25000, large: 65000, enterprise: 150000 },
      'structured-cabling': { small: 12000, medium: 35000, large: 90000, enterprise: 220000 },
      'civil-works': { small: 20000, medium: 60000, large: 150000, enterprise: 400000 }
    };

    const complexityMultipliers = {
      standard: 1.0,
      complex: 1.3,
      challenging: 1.5,
      specialized: 1.8
    };

    const timelineMultipliers = {
      urgent: 1.4,
      standard: 1.0,
      flexible: 0.9,
      planned: 0.85
    };

    const locationMultipliers = {
      sydney: 1.1,
      melbourne: 1.05,
      brisbane: 1.0,
      perth: 1.15,
      adelaide: 1.0,
      regional: 1.25
    };

    const basePrice = baseRates?.[formData?.serviceType]?.[formData?.projectSize] || 0;
    const complexityMultiplier = complexityMultipliers?.[formData?.complexity] || 1;
    const timelineMultiplier = timelineMultipliers?.[formData?.timeline] || 1;
    const locationMultiplier = locationMultipliers?.[formData?.location] || 1;
    
    const additionalServicesCost = formData?.additionalServices?.length * 2500;
    
    const totalEstimate = Math.round(
      (basePrice * complexityMultiplier * timelineMultiplier * locationMultiplier) + additionalServicesCost
    );

    const timeline = {
      urgent: '1-2 weeks',
      standard: '2-4 weeks',
      flexible: '4-6 weeks',
      planned: '6-8 weeks'
    };

    setEstimate({
      total: totalEstimate,
      breakdown: {
        baseService: Math.round(basePrice * complexityMultiplier),
        timelineAdjustment: Math.round(basePrice * complexityMultiplier * (timelineMultiplier - 1)),
        locationAdjustment: Math.round(basePrice * complexityMultiplier * timelineMultiplier * (locationMultiplier - 1)),
        additionalServices: additionalServicesCost
      },
      timeline: timeline?.[formData?.timeline],
      teamSize: formData?.projectSize === 'enterprise' ? '8-12 technicians' : 
                formData?.projectSize === 'large' ? '6-8 technicians' :
                formData?.projectSize === 'medium' ? '4-6 technicians' : '2-4 technicians'
    });
    
    setIsCalculating(false);
  };

  const isFormValid = formData?.serviceType && formData?.projectSize && formData?.complexity && 
                     formData?.timeline && formData?.location;

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Project Estimation Calculator
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get an instant estimate for your telecommunications infrastructure project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <div className="bg-card rounded-xl p-8 border border-border brand-shadow">
            <h3 className="text-xl font-semibold text-foreground mb-6">Project Details</h3>
            
            <div className="space-y-6">
              <Select
                label="Service Type"
                placeholder="Select service type"
                options={serviceOptions}
                value={formData?.serviceType}
                onChange={(value) => handleInputChange('serviceType', value)}
                required
              />

              <Select
                label="Project Size"
                placeholder="Select project size"
                options={projectSizeOptions}
                value={formData?.projectSize}
                onChange={(value) => handleInputChange('projectSize', value)}
                required
              />

              <Select
                label="Project Complexity"
                placeholder="Select complexity level"
                options={complexityOptions}
                value={formData?.complexity}
                onChange={(value) => handleInputChange('complexity', value)}
                required
              />

              <Select
                label="Timeline Requirements"
                placeholder="Select timeline"
                options={timelineOptions}
                value={formData?.timeline}
                onChange={(value) => handleInputChange('timeline', value)}
                required
              />

              <Select
                label="Location"
                placeholder="Select location"
                options={locationOptions}
                value={formData?.location}
                onChange={(value) => handleInputChange('location', value)}
                required
              />

              <Select
                label="Additional Services (Optional)"
                placeholder="Select additional services"
                options={additionalServiceOptions}
                value={formData?.additionalServices}
                onChange={(value) => handleInputChange('additionalServices', value)}
                multiple
                searchable
              />

              <Button
                variant="default"
                size="lg"
                fullWidth
                loading={isCalculating}
                disabled={!isFormValid}
                iconName="Calculator"
                iconPosition="left"
                onClick={calculateEstimate}
              >
                {isCalculating ? 'Calculating...' : 'Calculate Estimate'}
              </Button>
            </div>
          </div>

          {/* Results Panel */}
          <div className="bg-card rounded-xl p-8 border border-border brand-shadow">
            {!estimate ? (
              <div className="text-center py-12">
                <Icon name="Calculator" size={64} className="text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Ready to Calculate</h3>
                <p className="text-muted-foreground">
                  Fill in the project details to get your instant estimate
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="text-center pb-6 border-b border-border">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Project Estimate</h3>
                  <div className="text-4xl font-bold text-accent mb-2">
                    ${estimate?.total?.toLocaleString()}
                  </div>
                  <p className="text-muted-foreground">AUD (excluding GST)</p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Cost Breakdown</h4>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Base Service</span>
                      <span className="font-medium text-foreground">
                        ${estimate?.breakdown?.baseService?.toLocaleString()}
                      </span>
                    </div>
                    
                    {estimate?.breakdown?.timelineAdjustment !== 0 && (
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Timeline Adjustment</span>
                        <span className={`font-medium ${estimate?.breakdown?.timelineAdjustment > 0 ? 'text-urgent-red' : 'text-safety-green'}`}>
                          {estimate?.breakdown?.timelineAdjustment > 0 ? '+' : ''}
                          ${estimate?.breakdown?.timelineAdjustment?.toLocaleString()}
                        </span>
                      </div>
                    )}
                    
                    {estimate?.breakdown?.locationAdjustment !== 0 && (
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Location Adjustment</span>
                        <span className={`font-medium ${estimate?.breakdown?.locationAdjustment > 0 ? 'text-urgent-red' : 'text-safety-green'}`}>
                          {estimate?.breakdown?.locationAdjustment > 0 ? '+' : ''}
                          ${estimate?.breakdown?.locationAdjustment?.toLocaleString()}
                        </span>
                      </div>
                    )}
                    
                    {estimate?.breakdown?.additionalServices > 0 && (
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Additional Services</span>
                        <span className="font-medium text-foreground">
                          +${estimate?.breakdown?.additionalServices?.toLocaleString()}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-6 border-t border-border space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <Icon name="Clock" size={24} className="text-primary mx-auto mb-2" />
                      <div className="text-sm text-muted-foreground">Timeline</div>
                      <div className="font-semibold text-foreground">{estimate?.timeline}</div>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <Icon name="Users" size={24} className="text-primary mx-auto mb-2" />
                      <div className="text-sm text-muted-foreground">Team Size</div>
                      <div className="font-semibold text-foreground">{estimate?.teamSize}</div>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button variant="outline" size="sm" fullWidth iconName="Download">
                      Download Quote
                    </Button>
                    <Button variant="default" size="sm" fullWidth iconName="MessageSquare">
                      Discuss Project
                    </Button>
                  </div>
                </div>

                <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Icon name="Info" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <div className="font-medium text-foreground mb-1">Estimate Disclaimer</div>
                      <div className="text-muted-foreground">
                        This is a preliminary estimate based on standard project parameters. 
                        Final pricing may vary based on site conditions, specific requirements, 
                        and detailed technical assessment.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCalculator;