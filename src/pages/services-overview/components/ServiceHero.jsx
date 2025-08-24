import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-secondary to-accent text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Icon name="Zap" size={24} className="text-accent" />
                <span className="text-accent font-semibold">Telecommunications Excellence</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Infrastructure Solutions That
                <span className="text-accent block">Connect Australia</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                From NBN fiber installations to complex civil works, we deliver the critical infrastructure that powers Australia's digital future. Trusted by industry leaders like Ventia and ServiceStream.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="default" size="lg" iconName="Phone" iconPosition="left">
                Start Your Project
              </Button>
              <Button variant="outline" size="lg" iconName="FileText" iconPosition="left">
                View Capabilities
              </Button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">500+</div>
                <div className="text-sm text-white/80">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">99.8%</div>
                <div className="text-sm text-white/80">Safety Record</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">24/7</div>
                <div className="text-sm text-white/80">Emergency Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">15+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop"
                alt="Telecommunications infrastructure installation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center space-x-3">
                <Icon name="Shield" size={24} />
                <div>
                  <div className="font-bold">Certified</div>
                  <div className="text-sm opacity-90">Industry Standards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;