import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails }) => {
  const getServiceIcon = (serviceType) => {
    switch (serviceType) {
      case 'NBN Fiber': return 'Wifi';
      case 'Civil Works': return 'Hammer';
      case 'Structured Cabling': return 'Cable';
      case 'HFC Network': return 'Radio';
      default: return 'Settings';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'text-success bg-success/10';
      case 'In Progress': return 'text-warning bg-warning/10';
      case 'Planning': return 'text-primary bg-primary/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover-lift brand-transition group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project?.image}
          alt={project?.title}
          className="w-full h-full object-cover group-hover:scale-105 brand-transition"
        />
        <div className="absolute top-4 left-4">
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project?.status)}`}>
            {project?.status}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <div className="flex items-center space-x-1 bg-card/90 backdrop-blur-sm px-2 py-1 rounded-full">
            <Icon name={getServiceIcon(project?.serviceType)} size={14} className="text-primary" />
            <span className="text-xs font-medium text-foreground">{project?.serviceType}</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary brand-transition line-clamp-2">
            {project?.title}
          </h3>
          <div className="flex items-center space-x-1 text-muted-foreground ml-2">
            <Icon name="MapPin" size={14} />
            <span className="text-xs">{project?.location}</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {project?.description}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center space-x-2">
            <Icon name="Calendar" size={16} className="text-muted-foreground" />
            <div>
              <div className="text-xs text-muted-foreground">Duration</div>
              <div className="text-sm font-medium text-foreground">{project?.duration}</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="DollarSign" size={16} className="text-muted-foreground" />
            <div>
              <div className="text-xs text-muted-foreground">Value</div>
              <div className="text-sm font-medium text-foreground">{project?.value}</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src={project?.clientLogo}
              alt={project?.client}
              className="w-6 h-6 object-contain"
            />
            <span className="text-sm font-medium text-foreground">{project?.client}</span>
          </div>
          <Button
            variant="outline"
            size="sm"
            iconName="ArrowRight"
            iconPosition="right"
            onClick={() => onViewDetails(project)}
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;