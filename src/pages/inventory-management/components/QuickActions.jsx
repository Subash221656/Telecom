import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuickActions = () => {
  const quickActions = [
    {
      id: 1,
      title: "Scan Barcode",
      description: "Quick item lookup and stock update",
      icon: "QrCode",
      color: "bg-blue-500",
      action: "scan"
    },
    {
      id: 2,
      title: "Generate Report",
      description: "Export inventory analytics",
      icon: "FileText",
      color: "bg-green-500",
      action: "report"
    },
    {
      id: 3,
      title: "Bulk Import",
      description: "Upload inventory data from CSV",
      icon: "Upload",
      color: "bg-purple-500",
      action: "import"
    },
    {
      id: 4,
      title: "Order Supplies",
      description: "Create purchase orders",
      icon: "ShoppingCart",
      color: "bg-orange-500",
      action: "order"
    }
  ];

  const recentActivity = [
    {
      id: 1,
      action: "Stock Updated",
      item: "Single-Mode Fiber Cable 12-Core",
      user: "Sarah Chen",
      timestamp: "2 minutes ago",
      type: "update"
    },
    {
      id: 2,
      action: "Low Stock Alert",
      item: "Cat6 UTP Cable 305m Reel",
      user: "System",
      timestamp: "15 minutes ago",
      type: "alert"
    },
    {
      id: 3,
      action: "Item Added",
      item: "LC Duplex Connector - Green",
      user: "Mike Rodriguez",
      timestamp: "1 hour ago",
      type: "add"
    },
    {
      id: 4,
      action: "Order Placed",
      item: "OTDR Tester Accessories",
      user: "Lisa Wang",
      timestamp: "2 hours ago",
      type: "order"
    }
  ];

  const getActivityIcon = (type) => {
    const icons = {
      update: "RefreshCw",
      alert: "AlertTriangle",
      add: "Plus",
      order: "ShoppingCart"
    };
    return icons?.[type] || "Activity";
  };

  const getActivityColor = (type) => {
    const colors = {
      update: "text-blue-500",
      alert: "text-warning",
      add: "text-success",
      order: "text-purple-500"
    };
    return colors?.[type] || "text-muted-foreground";
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Quick Actions */}
      <div className="bg-card border border-border rounded-lg p-6 brand-shadow">
        <h2 className="text-xl font-bold text-foreground mb-6">Quick Actions</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {quickActions?.map((action) => (
            <button
              key={action?.id}
              className="flex items-center space-x-4 p-4 bg-muted/30 hover:bg-muted/50 border border-border rounded-lg brand-transition text-left"
            >
              <div className={`flex items-center justify-center w-12 h-12 ${action?.color} rounded-lg flex-shrink-0`}>
                <Icon name={action?.icon} size={24} color="white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-foreground">{action?.title}</h3>
                <p className="text-sm text-muted-foreground">{action?.description}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-border">
          <Button variant="outline" fullWidth iconName="Settings" iconPosition="left">
            Advanced Settings
          </Button>
        </div>
      </div>
      {/* Recent Activity */}
      <div className="bg-card border border-border rounded-lg p-6 brand-shadow">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-foreground">Recent Activity</h2>
          <Button variant="ghost" size="sm" iconName="ExternalLink">
            View All
          </Button>
        </div>

        <div className="space-y-4">
          {recentActivity?.map((activity) => (
            <div key={activity?.id} className="flex items-start space-x-3 p-3 hover:bg-muted/20 rounded-lg brand-transition">
              <div className={`flex items-center justify-center w-8 h-8 bg-muted rounded-lg flex-shrink-0 ${getActivityColor(activity?.type)}`}>
                <Icon name={getActivityIcon(activity?.type)} size={16} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-foreground">{activity?.action}</h4>
                  <span className="text-xs text-muted-foreground">{activity?.timestamp}</span>
                </div>
                <p className="text-sm text-muted-foreground truncate">{activity?.item}</p>
                <p className="text-xs text-muted-foreground">by {activity?.user}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-border">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Last sync: 2 minutes ago</span>
            <button className="flex items-center space-x-1 text-primary hover:text-primary/80 brand-transition">
              <Icon name="RefreshCw" size={14} />
              <span>Refresh</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;