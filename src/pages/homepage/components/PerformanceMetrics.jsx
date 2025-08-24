import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const PerformanceMetrics = () => {
  const [animatedValues, setAnimatedValues] = useState({
    completionRate: 0,
    nbnInstallations: 0,
    safetyDays: 0,
    clientSatisfaction: 0
  });

  const targetValues = {
    completionRate: 99.2,
    nbnInstallations: 500,
    safetyDays: 365,
    clientSatisfaction: 98.5
  };

  const metrics = [
    {
      id: 'completion',
      title: 'Project Completion Rate',
      value: animatedValues?.completionRate,
      suffix: '%',
      icon: 'CheckCircle',
      color: 'text-safety-green',
      bgColor: 'bg-safety-green/10',
      description: 'Industry-leading project success rate',
      trend: '+2.1% from last quarter'
    },
    {
      id: 'installations',
      title: 'NBN Installations',
      value: animatedValues?.nbnInstallations,
      suffix: '+',
      icon: 'Cable',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      description: 'Completed fiber installations nationwide',
      trend: '+47 this month'
    },
    {
      id: 'safety',
      title: 'Safety Record 2024',
      value: animatedValues?.safetyDays,
      suffix: ' days',
      icon: 'Shield',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      description: 'Zero safety incidents maintained',
      trend: 'Perfect safety record'
    },
    {
      id: 'satisfaction',
      title: 'Client Satisfaction',
      value: animatedValues?.clientSatisfaction,
      suffix: '%',
      icon: 'Heart',
      color: 'text-warning',
      bgColor: 'bg-warning/10',
      description: 'Client satisfaction rating',
      trend: '+1.3% improvement'
    }
  ];

  const additionalStats = [
    {
      label: 'Active Projects',
      value: '47',
      icon: 'Activity',
      color: 'text-primary'
    },
    {
      label: 'Team Members',
      value: '156',
      icon: 'Users',
      color: 'text-secondary'
    },
    {
      label: 'Service Areas',
      value: '8',
      icon: 'MapPin',
      color: 'text-accent'
    },
    {
      label: 'Years Experience',
      value: '15+',
      icon: 'Calendar',
      color: 'text-safety-green'
    }
  ];

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setAnimatedValues({
        completionRate: Math.min(targetValues?.completionRate * progress, targetValues?.completionRate),
        nbnInstallations: Math.min(Math.floor(targetValues?.nbnInstallations * progress), targetValues?.nbnInstallations),
        safetyDays: Math.min(Math.floor(targetValues?.safetyDays * progress), targetValues?.safetyDays),
        clientSatisfaction: Math.min(targetValues?.clientSatisfaction * progress, targetValues?.clientSatisfaction)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary text-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-light px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="TrendingUp" size={16} />
            <span>Performance Excellence</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Delivering Measurable Results
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Our commitment to excellence is reflected in our industry-leading performance metrics and unwavering dedication to safety and quality.
          </p>
        </div>

        {/* Main Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics?.map((metric) => (
            <div
              key={metric?.id}
              className="bg-white/10 backdrop-blur-light rounded-2xl p-8 text-center hover:bg-white/15 brand-transition hover-lift"
            >
              <div className={`w-16 h-16 ${metric?.bgColor} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                <Icon name={metric?.icon} size={32} className={metric?.color} />
              </div>
              
              <div className="mb-4">
                <div className="text-4xl lg:text-5xl font-bold mb-2">
                  {metric?.value?.toFixed(metric?.id === 'completion' || metric?.id === 'satisfaction' ? 1 : 0)}
                  <span className="text-2xl">{metric?.suffix}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{metric?.title}</h3>
                <p className="text-white/80 text-sm mb-3">{metric?.description}</p>
              </div>

              <div className="flex items-center justify-center space-x-1 text-xs text-accent">
                <Icon name="TrendingUp" size={12} />
                <span>{metric?.trend}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stats Bar */}
        <div className="bg-white/10 backdrop-blur-light rounded-2xl p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalStats?.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <Icon name={stat?.icon} size={20} className={stat?.color} />
                  <span className="text-2xl font-bold">{stat?.value}</span>
                </div>
                <p className="text-white/80 text-sm">{stat?.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Highlights */}
        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-light rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Icon name="Award" size={24} className="text-accent" />
              <h3 className="text-xl font-bold">Industry Recognition</h3>
            </div>
            <ul className="space-y-2 text-white/90">
              <li className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-safety-green" />
                <span className="text-sm">NBN Co Preferred Contractor 2024</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-safety-green" />
                <span className="text-sm">Safety Excellence Award Winner</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-safety-green" />
                <span className="text-sm">Telecommunications Industry Leader</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-light rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Icon name="Target" size={24} className="text-safety-green" />
              <h3 className="text-xl font-bold">Quality Assurance</h3>
            </div>
            <ul className="space-y-2 text-white/90">
              <li className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-safety-green" />
                <span className="text-sm">ISO 9001:2015 Certified</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-safety-green" />
                <span className="text-sm">100% Quality Testing</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-safety-green" />
                <span className="text-sm">Customer Satisfaction Guarantee</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-light rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Icon name="Clock" size={24} className="text-warning" />
              <h3 className="text-xl font-bold">Service Commitment</h3>
            </div>
            <ul className="space-y-2 text-white/90">
              <li className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-safety-green" />
                <span className="text-sm">24/7 Emergency Response</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-safety-green" />
                <span className="text-sm">Real-time Project Updates</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-safety-green" />
                <span className="text-sm">Guaranteed Project Timelines</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceMetrics;