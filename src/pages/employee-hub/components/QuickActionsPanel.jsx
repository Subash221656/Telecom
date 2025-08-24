import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuickActionsPanel = ({ onAction, notifications, emergencyContacts }) => {
  const quickActions = [
    {
      id: 'inventory-request',
      title: 'Request Equipment',
      description: 'Order tools and materials',
      icon: 'Package',
      color: 'bg-primary/10 text-primary',
      action: () => onAction('inventory-request')
    },
    {
      id: 'safety-report',
      title: 'Safety Report',
      description: 'Report incidents or hazards',
      icon: 'Shield',
      color: 'bg-urgent-red/10 text-urgent-red',
      action: () => onAction('safety-report')
    },
    {
      id: 'timesheet',
      title: 'Clock In/Out',
      description: 'Manage work hours',
      icon: 'Clock',
      color: 'bg-safety-green/10 text-safety-green',
      action: () => onAction('timesheet')
    },
    {
      id: 'help-request',
      title: 'Request Help',
      description: 'Get technical assistance',
      icon: 'HelpCircle',
      color: 'bg-accent/10 text-accent',
      action: () => onAction('help-request')
    },
    {
      id: 'location-share',
      title: 'Share Location',
      description: 'Send current location',
      icon: 'MapPin',
      color: 'bg-warning/10 text-warning',
      action: () => onAction('location-share')
    },
    {
      id: 'quality-check',
      title: 'Quality Check',
      description: 'Submit quality report',
      icon: 'CheckCircle',
      color: 'bg-steel-blue/10 text-steel-blue',
      action: () => onAction('quality-check')
    }
  ];

  const formatNotificationTime = (timestamp) => {
    const now = new Date();
    const notificationTime = new Date(timestamp);
    const diffInMinutes = Math.floor((now - notificationTime) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return notificationTime?.toLocaleDateString();
  };

  return (
    <div className="space-y-6">
      {/* Quick Actions Grid */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="font-semibold text-foreground mb-4">Quick Actions</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {quickActions?.map((action) => (
            <button
              key={action?.id}
              onClick={action?.action}
              className="p-4 rounded-lg border border-border hover:shadow-md brand-transition text-left group"
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 ${action?.color}`}>
                <Icon name={action?.icon} size={24} />
              </div>
              <h4 className="font-medium text-foreground group-hover:text-primary brand-transition">
                {action?.title}
              </h4>
              <p className="text-sm text-muted-foreground mt-1">{action?.description}</p>
            </button>
          ))}
        </div>
      </div>
      {/* Notifications */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-foreground">Recent Notifications</h3>
          <Button variant="ghost" size="sm" iconName="Settings">
            Settings
          </Button>
        </div>

        <div className="space-y-3">
          {notifications?.slice(0, 5)?.map((notification) => (
            <div key={notification?.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted brand-transition">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                notification?.type === 'urgent' ? 'bg-urgent-red/10' :
                notification?.type === 'info' ? 'bg-primary/10' :
                notification?.type === 'success'? 'bg-safety-green/10' : 'bg-warning/10'
              }`}>
                <Icon 
                  name={
                    notification?.type === 'urgent' ? 'AlertTriangle' :
                    notification?.type === 'info' ? 'Info' :
                    notification?.type === 'success'? 'CheckCircle' : 'Bell'
                  } 
                  size={16} 
                  className={
                    notification?.type === 'urgent' ? 'text-urgent-red' :
                    notification?.type === 'info' ? 'text-primary' :
                    notification?.type === 'success'? 'text-safety-green' : 'text-warning'
                  }
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-foreground text-sm">{notification?.title}</h4>
                  <span className="text-xs text-muted-foreground">{formatNotificationTime(notification?.timestamp)}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{notification?.message}</p>
                {notification?.action && (
                  <Button variant="ghost" size="sm" className="mt-2 p-0 h-auto">
                    {notification?.action}
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 text-center">
          <Button variant="outline" size="sm" iconName="Bell">
            View All Notifications
          </Button>
        </div>
      </div>
      {/* Emergency Contacts */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="font-semibold text-foreground mb-4">Emergency Contacts</h3>
        
        <div className="space-y-3">
          {emergencyContacts?.map((contact) => (
            <div key={contact?.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted brand-transition">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-urgent-red/10 rounded-full flex items-center justify-center">
                  <Icon name="Phone" size={20} className="text-urgent-red" />
                </div>
                <div>
                  <div className="font-medium text-foreground">{contact?.name}</div>
                  <div className="text-sm text-muted-foreground">{contact?.role}</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" iconName="Phone">
                  Call
                </Button>
                <Button variant="outline" size="sm" iconName="MessageSquare">
                  Message
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 bg-urgent-red/5 border border-urgent-red/20 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="AlertTriangle" size={16} className="text-urgent-red" />
            <span className="font-medium text-urgent-red">Emergency Protocol</span>
          </div>
          <p className="text-sm text-muted-foreground">
            In case of emergency, call 000 immediately. For work-related emergencies, contact your supervisor first.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuickActionsPanel;