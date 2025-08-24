import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectAssignmentCard = ({ project, onViewDetails, onUpdateStatus }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'urgent': return 'text-urgent-red bg-urgent-red/10 border-urgent-red/20';
      case 'high': return 'text-warning bg-warning/10 border-warning/20';
      case 'medium': return 'text-accent bg-accent/10 border-accent/20';
      default: return 'text-muted-foreground bg-muted border-border';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'in-progress': return 'text-accent bg-accent/10';
      case 'completed': return 'text-safety-green bg-safety-green/10';
      case 'pending': return 'text-warning bg-warning/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md brand-transition">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="font-semibold text-foreground">{project?.title}</h3>
            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(project?.priority)}`}>
              {project?.priority}
            </span>
          </div>
          <p className="text-sm text-muted-foreground mb-2">{project?.location}</p>
          <p className="text-sm text-foreground">{project?.description}</p>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project?.status)}`}>
          {project?.status?.replace('-', ' ')}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center space-x-2">
          <Icon name="Calendar" size={16} className="text-muted-foreground" />
          <span className="text-sm text-foreground">Due: {project?.dueDate}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="Clock" size={16} className="text-muted-foreground" />
          <span className="text-sm text-foreground">{project?.estimatedHours}h</span>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="Users" size={16} className="text-muted-foreground" />
          <span className="text-sm text-foreground">{project?.teamSize} members</span>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="MapPin" size={16} className="text-muted-foreground" />
          <span className="text-sm text-foreground">{project?.distance}km away</span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex -space-x-2">
            {project?.teamMembers?.slice(0, 3)?.map((member, index) => (
              <img
                key={index}
                src={member?.avatar}
                alt={member?.name}
                className="w-8 h-8 rounded-full border-2 border-card object-cover"
              />
            ))}
            {project?.teamMembers?.length > 3 && (
              <div className="w-8 h-8 rounded-full bg-muted border-2 border-card flex items-center justify-center">
                <span className="text-xs font-medium text-muted-foreground">
                  +{project?.teamMembers?.length - 3}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={() => onUpdateStatus(project?.id)}>
            Update Status
          </Button>
          <Button variant="default" size="sm" onClick={() => onViewDetails(project?.id)}>
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectAssignmentCard;