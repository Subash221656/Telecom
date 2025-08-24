import React from 'react';
import Icon from '../../../components/AppIcon';

const InventoryStats = () => {
  const stats = [
    {
      id: 1,
      title: "Total Items",
      value: "2,847",
      change: "+12%",
      changeType: "positive",
      icon: "Package",
      description: "Active inventory items"
    },
    {
      id: 2,
      title: "Low Stock Alerts",
      value: "23",
      change: "-8%",
      changeType: "negative",
      icon: "AlertTriangle",
      description: "Items below threshold"
    },
    {
      id: 3,
      title: "Total Value",
      value: "$1.2M",
      change: "+5%",
      changeType: "positive",
      icon: "DollarSign",
      description: "Current inventory value"
    },
    {
      id: 4,
      title: "Pending Orders",
      value: "47",
      change: "+18%",
      changeType: "positive",
      icon: "ShoppingCart",
      description: "Orders in progress"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats?.map((stat) => (
        <div key={stat?.id} className="bg-card border border-border rounded-lg p-6 brand-shadow hover-lift">
          <div className="flex items-center justify-between mb-4">
            <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${
              stat?.changeType === 'positive' ? 'bg-success/10' : 'bg-warning/10'
            }`}>
              <Icon 
                name={stat?.icon} 
                size={24} 
                className={stat?.changeType === 'positive' ? 'text-success' : 'text-warning'}
              />
            </div>
            <div className={`flex items-center space-x-1 text-sm font-medium ${
              stat?.changeType === 'positive' ? 'text-success' : 'text-warning'
            }`}>
              <Icon 
                name={stat?.changeType === 'positive' ? 'TrendingUp' : 'TrendingDown'} 
                size={16} 
              />
              <span>{stat?.change}</span>
            </div>
          </div>
          <div className="space-y-1">
            <h3 className="text-2xl font-bold text-foreground">{stat?.value}</h3>
            <p className="text-sm font-medium text-foreground">{stat?.title}</p>
            <p className="text-xs text-muted-foreground">{stat?.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InventoryStats;