import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [liveStats, setLiveStats] = useState({
    activeProjects: 47,
    completedToday: 12,
    teamMembers: 156
  });

  const heroSlides = [
    {
      id: 1,
      title: "Building Australia\'s Digital Infrastructure",
      subtitle: "Premier telecommunications contractor delivering NBN fiber installations and critical infrastructure projects across the nation",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop",
      stats: "500+ NBN Installations Completed",
      location: "Sydney Metro Area"
    },
    {
      id: 2,
      title: "Real-Time Project Excellence",
      subtitle: "Advanced project management and live field updates ensuring 99.2% completion rate with zero safety incidents",
      image: "https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?w=1200&h=600&fit=crop",
      stats: "47 Active Projects Today",
      location: "Melbourne & Brisbane"
    },
    {
      id: 3,
      title: "Trusted by Industry Leaders",
      subtitle: "Partnering with Ventia, ServiceStream, and major telecommunications providers to connect communities nationwide",
      image: "https://images.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg?w=1200&h=600&fit=crop",
      stats: "Zero Safety Incidents in 2024",
      location: "Nationwide Coverage"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides?.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const statsInterval = setInterval(() => {
      setLiveStats(prev => ({
        activeProjects: prev?.activeProjects + Math.floor(Math.random() * 3) - 1,
        completedToday: prev?.completedToday + (Math.random() > 0.8 ? 1 : 0),
        teamMembers: prev?.teamMembers
      }));
    }, 10000);
    return () => clearInterval(statsInterval);
  }, []);

  const currentSlideData = heroSlides?.[currentSlide];

  return (
    <section className="relative h-screen bg-gradient-to-br from-primary via-secondary to-primary overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={currentSlideData?.image}
          alt={currentSlideData?.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>
      {/* Content Container */}
      <div className="relative z-10 flex items-center h-full">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              {/* Live Status Indicator */}
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-safety-green rounded-full"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-safety-green rounded-full animate-ping opacity-75"></div>
                </div>
                <span className="text-sm font-medium text-safety-green">LIVE OPERATIONS</span>
                <span className="text-sm text-white/80">{currentSlideData?.location}</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight animate-fade-in">
                  {currentSlideData?.title}
                </h1>
                <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                  {currentSlideData?.subtitle}
                </p>
              </div>

              {/* Stats Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-light rounded-full px-6 py-3">
                <Icon name="TrendingUp" size={20} className="text-accent" />
                <span className="font-semibold">{currentSlideData?.stats}</span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="default" 
                  size="lg" 
                  iconName="ArrowRight" 
                  iconPosition="right"
                  className="bg-accent hover:bg-accent/90 text-white"
                >
                  Start Your Project
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  iconName="Play" 
                  iconPosition="left"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  Watch Live Feed
                </Button>
              </div>
            </div>

            {/* Right Content - Live Stats */}
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-light rounded-2xl p-8 space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Live Operations Dashboard</h3>
                
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                        <Icon name="Activity" size={24} className="text-accent" />
                      </div>
                      <div>
                        <p className="text-white/80 text-sm">Active Projects</p>
                        <p className="text-2xl font-bold text-white">{liveStats?.activeProjects}</p>
                      </div>
                    </div>
                    <div className="text-safety-green">
                      <Icon name="TrendingUp" size={20} />
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-safety-green/20 rounded-lg flex items-center justify-center">
                        <Icon name="CheckCircle" size={24} className="text-safety-green" />
                      </div>
                      <div>
                        <p className="text-white/80 text-sm">Completed Today</p>
                        <p className="text-2xl font-bold text-white">{liveStats?.completedToday}</p>
                      </div>
                    </div>
                    <div className="text-safety-green">
                      <Icon name="Plus" size={20} />
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                        <Icon name="Users" size={24} className="text-secondary" />
                      </div>
                      <div>
                        <p className="text-white/80 text-sm">Team Members</p>
                        <p className="text-2xl font-bold text-white">{liveStats?.teamMembers}</p>
                      </div>
                    </div>
                    <div className="text-safety-green">
                      <Icon name="UserCheck" size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heroSlides?.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full brand-transition ${
              index === currentSlide ? 'bg-accent' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center space-y-2 text-white/60">
        <span className="text-sm font-medium">Scroll</span>
        <Icon name="ChevronDown" size={20} className="animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;