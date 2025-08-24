import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedProject = ({ project, onViewDetails }) => {
  return (
    <div className="bg-gradient-to-r from-primary to-accent rounded-lg overflow-hidden mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
        {/* Content Side */}
        <div className="p-8 lg:p-12 flex flex-col justify-center text-primary-foreground">
          <div className="flex items-center space-x-2 mb-4">
            <Icon name="Star" size={20} className="text-warning fill-current" />
            <span className="text-sm font-medium opacity-90">Featured Project</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
            {project?.title}
          </h2>
          
          <p className="text-lg opacity-90 mb-6 leading-relaxed">
            {project?.description}
          </p>
          
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="MapPin" size={16} className="opacity-75" />
                <span className="text-sm opacity-75">Location</span>
              </div>
              <div className="font-semibold">{project?.location}</div>
            </div>
            
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Calendar" size={16} className="opacity-75" />
                <span className="text-sm opacity-75">Duration</span>
              </div>
              <div className="font-semibold">{project?.duration}</div>
            </div>
            
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="DollarSign" size={16} className="opacity-75" />
                <span className="text-sm opacity-75">Project Value</span>
              </div>
              <div className="font-semibold">{project?.value}</div>
            </div>
            
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Users" size={16} className="opacity-75" />
                <span className="text-sm opacity-75">Client</span>
              </div>
              <div className="font-semibold">{project?.client}</div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Button
              variant="secondary"
              iconName="ArrowRight"
              iconPosition="right"
              onClick={() => onViewDetails(project)}
            >
              View Full Case Study
            </Button>
            <Button
              variant="ghost"
              iconName="ExternalLink"
              iconPosition="right"
              className="text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10"
            >
              Watch Video
            </Button>
          </div>
        </div>
        
        {/* Image Side */}
        <div className="relative overflow-hidden">
          <Image
            src={project?.image}
            alt={project?.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-16 h-16 bg-primary-foreground/20 backdrop-blur-sm border border-primary-foreground/30 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 brand-transition group">
              <Icon name="Play" size={24} className="text-primary-foreground ml-1 group-hover:scale-110 brand-transition" />
            </button>
          </div>
          
          {/* Achievement Badges */}
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            {project?.badges?.map((badge, index) => (
              <div key={index} className="bg-primary-foreground/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-xs font-medium text-primary-foreground">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;