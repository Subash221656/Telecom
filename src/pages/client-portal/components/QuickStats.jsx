import React from 'react';
import Icon from '../../../components/AppIcon';

const QuickStats = ({ stats }) => {
  const statItems = [
    {
      label: 'Active Projects',
      value: stats?.activeProjects,
      icon: 'FolderOpen',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      label: 'Completed This Month',
      value: stats?.completedThisMonth,
      icon: 'CheckCircle',
      color: 'text-safety-green',
      bgColor: 'bg-safety-green/10'
    },
    {
      label: 'Team Members',
      value: stats?.teamMembers,
      icon: 'Users',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      label: 'Avg. Completion Time',
      value: `${stats?.avgCompletionTime} days`,
      icon: 'Clock',
      color: 'text-warning',
      bgColor: 'bg-warning/10'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statItems?.map((item, index) => (
        <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-md brand-transition">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-muted-foreground mb-1">{item?.label}</p>
              <p className="text-2xl font-bold text-foreground">{item?.value}</p>
            </div>
            <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${item?.bgColor}`}>
              <Icon name={item?.icon} size={24} className={item?.color} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuickStats;