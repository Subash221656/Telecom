import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails }) => {
  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'active':
        return 'bg-safety-green text-white';
      case 'planning':
        return 'bg-warning text-white';
      case 'on-hold':
        return 'bg-urgent-red text-white';
      case 'completed':
        return 'bg-primary text-white';
      default:
        return 'bg-technical-gray text-white';
    }
  };

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'bg-safety-green';
    if (progress >= 50) return 'bg-warning';
    return 'bg-accent';
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg brand-transition">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-1">{project?.name}</h3>
          <p className="text-sm text-muted-foreground">{project?.location}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project?.status)}`}>
          {project?.status}
        </span>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Progress</span>
          <span className="font-medium text-foreground">{project?.progress}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className={`h-2 rounded-full brand-transition ${getProgressColor(project?.progress)}`}
            style={{ width: `${project?.progress}%` }}
          ></div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <Icon name="Calendar" size={16} className="text-muted-foreground" />
            <div>
              <p className="text-muted-foreground">Start Date</p>
              <p className="font-medium text-foreground">{project?.startDate}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Clock" size={16} className="text-muted-foreground" />
            <div>
              <p className="text-muted-foreground">Due Date</p>
              <p className="font-medium text-foreground">{project?.dueDate}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Icon name="Users" size={16} className="text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Team:</span>
          <span className="text-sm font-medium text-foreground">{project?.teamSize} members</span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-safety-green rounded-full animate-pulse-slow"></div>
            <span className="text-xs text-muted-foreground">Last updated: {project?.lastUpdate}</span>
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