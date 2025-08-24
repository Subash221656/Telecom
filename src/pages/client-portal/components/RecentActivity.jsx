import React from 'react';
import Icon from '../../../components/AppIcon';

const RecentActivity = ({ activities }) => {
  const getActivityIcon = (type) => {
    switch (type) {
      case 'project_update':
        return 'FileText';
      case 'team_assignment':
        return 'UserPlus';
      case 'document_upload':
        return 'Upload';
      case 'status_change':
        return 'RefreshCw';
      case 'message':
        return 'MessageSquare';
      default:
        return 'Bell';
    }
  };

  const getActivityColor = (type) => {
    switch (type) {
      case 'project_update':
        return 'text-accent bg-accent/10';
      case 'team_assignment':
        return 'text-primary bg-primary/10';
      case 'document_upload':
        return 'text-safety-green bg-safety-green/10';
      case 'status_change':
        return 'text-warning bg-warning/10';
      case 'message':
        return 'text-secondary bg-secondary/10';
      default:
        return 'text-muted-foreground bg-muted';
    }
  };

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const activityTime = new Date(timestamp);
    const diffInMinutes = Math.floor((now - activityTime) / (1000 * 60));
    
    if (diffInMinutes < 60) {
      return `${diffInMinutes}m ago`;
    } else if (diffInMinutes < 1440) {
      return `${Math.floor(diffInMinutes / 60)}h ago`;
    } else {
      return `${Math.floor(diffInMinutes / 1440)}d ago`;
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Recent Activity</h3>
        <Icon name="Activity" size={20} className="text-muted-foreground" />
      </div>
      <div className="space-y-4">
        {activities?.map((activity, index) => (
          <div key={index} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-muted/50 brand-transition">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${getActivityColor(activity?.type)}`}>
              <Icon name={getActivityIcon(activity?.type)} size={16} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground">{activity?.title}</p>
              <p className="text-sm text-muted-foreground mt-1">{activity?.description}</p>
              <div className="flex items-center space-x-4 mt-2">
                <span className="text-xs text-muted-foreground">{activity?.project}</span>
                <span className="text-xs text-muted-foreground">•</span>
                <span className="text-xs text-muted-foreground">{formatTimeAgo(activity?.timestamp)}</span>
              </div>
            </div>
            {activity?.priority === 'high' && (
              <div className="flex-shrink-0">
                <div className="w-2 h-2 bg-urgent-red rounded-full"></div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-border">
        <button className="w-full text-sm text-primary hover:text-primary/80 font-medium brand-transition">
          View All Activity
        </button>
      </div>
    </div>
  );
};

export default RecentActivity;