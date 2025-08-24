import React from 'react';
import Icon from '../../../components/AppIcon';

const ProjectStats = ({ stats }) => {
  const statItems = [
    {
      label: 'Total Projects',
      value: stats?.totalProjects,
      icon: 'FolderOpen',
      color: 'text-primary bg-primary/10'
    },
    {
      label: 'Completed',
      value: stats?.completedProjects,
      icon: 'CheckCircle',
      color: 'text-success bg-success/10'
    },
    {
      label: 'In Progress',
      value: stats?.inProgressProjects,
      icon: 'Clock',
      color: 'text-warning bg-warning/10'
    },
    {
      label: 'Total Value',
      value: stats?.totalValue,
      icon: 'DollarSign',
      color: 'text-accent bg-accent/10'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {statItems?.map((stat, index) => (
        <div key={index} className="bg-card border border-border rounded-lg p-6 hover-lift brand-transition">
          <div className="flex items-center justify-between mb-4">
            <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${stat?.color}`}>
              <Icon name={stat?.icon} size={24} />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-foreground">{stat?.value}</div>
              <div className="text-sm text-muted-foreground">{stat?.label}</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="flex-1 bg-muted rounded-full h-2">
              <div 
                className={`h-2 rounded-full ${stat?.color?.includes('primary') ? 'bg-primary' : 
                  stat?.color?.includes('success') ? 'bg-success' : 
                  stat?.color?.includes('warning') ? 'bg-warning' : 'bg-accent'}`}
                style={{ width: `${Math.min(100, (parseInt(stat?.value?.replace(/[^\d]/g, '')) / 100) * 100)}%` }}
              ></div>
            </div>
            <span className="text-xs text-muted-foreground">
              {index === 0 ? '100%' : 
               index === 1 ? '85%' : 
               index === 2 ? '15%' : '100%'}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectStats;