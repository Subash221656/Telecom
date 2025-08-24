import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SupplierPanel = () => {
  const [activeTab, setActiveTab] = useState('suppliers');

  const suppliers = [
    {
      id: 1,
      name: "Corning Inc.",
      category: "Fiber Optics",
      contactPerson: "James Mitchell",
      email: "j.mitchell@corning.com",
      phone: "+61 2 9876 5432",
      rating: 4.8,
      activeOrders: 3,
      totalValue: "$125,400",
      lastOrder: "2025-01-18",
      status: "active",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center"
    },
    {
      id: 2,
      name: "Panduit Corp",
      category: "Copper Infrastructure",
      contactPerson: "Sarah Thompson",
      email: "s.thompson@panduit.com",
      phone: "+61 3 8765 4321",
      rating: 4.6,
      activeOrders: 1,
      totalValue: "$67,800",
      lastOrder: "2025-01-20",
      status: "active",
      logo: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=100&h=100&fit=crop&crop=center"
    },
    {
      id: 3,
      name: "CommScope",
      category: "Connectors",
      contactPerson: "David Chen",
      email: "d.chen@commscope.com",
      phone: "+61 7 6543 2109",
      rating: 4.7,
      activeOrders: 0,
      totalValue: "$89,200",
      lastOrder: "2025-01-15",
      status: "pending",
      logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=center"
    },
    {
      id: 4,
      name: "EXFO Inc.",
      category: "Testing Equipment",
      contactPerson: "Maria Rodriguez",
      email: "m.rodriguez@exfo.com",
      phone: "+61 8 4321 0987",
      rating: 4.9,
      activeOrders: 2,
      totalValue: "$234,600",
      lastOrder: "2025-01-21",
      status: "active",
      logo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=center"
    }
  ];

  const pendingOrders = [
    {
      id: "PO-2025-001",
      supplier: "Corning Inc.",
      items: 12,
      totalValue: "$45,600",
      orderDate: "2025-01-19",
      expectedDelivery: "2025-01-26",
      status: "processing",
      priority: "high"
    },
    {
      id: "PO-2025-002",
      supplier: "EXFO Inc.",
      items: 3,
      totalValue: "$78,900",
      orderDate: "2025-01-20",
      expectedDelivery: "2025-01-28",
      status: "confirmed",
      priority: "medium"
    },
    {
      id: "PO-2025-003",
      supplier: "Panduit Corp",
      items: 8,
      totalValue: "$23,400",
      orderDate: "2025-01-21",
      expectedDelivery: "2025-01-25",
      status: "shipped",
      priority: "low"
    }
  ];

  const getStatusBadge = (status) => {
    const statusConfig = {
      active: { color: 'bg-success/10 text-success', label: 'Active' },
      pending: { color: 'bg-warning/10 text-warning', label: 'Pending' },
      inactive: { color: 'bg-muted text-muted-foreground', label: 'Inactive' }
    };
    
    const config = statusConfig?.[status] || statusConfig?.active;
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${config?.color}`}>
        {config?.label}
      </span>
    );
  };

  const getOrderStatusBadge = (status) => {
    const statusConfig = {
      processing: { color: 'bg-blue-500/10 text-blue-600', label: 'Processing' },
      confirmed: { color: 'bg-success/10 text-success', label: 'Confirmed' },
      shipped: { color: 'bg-purple-500/10 text-purple-600', label: 'Shipped' },
      delivered: { color: 'bg-green-500/10 text-green-600', label: 'Delivered' }
    };
    
    const config = statusConfig?.[status] || statusConfig?.processing;
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${config?.color}`}>
        {config?.label}
      </span>
    );
  };

  const getPriorityBadge = (priority) => {
    const priorityConfig = {
      high: { color: 'bg-error/10 text-error', label: 'High' },
      medium: { color: 'bg-warning/10 text-warning', label: 'Medium' },
      low: { color: 'bg-success/10 text-success', label: 'Low' }
    };
    
    const config = priorityConfig?.[priority] || priorityConfig?.medium;
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${config?.color}`}>
        {config?.label}
      </span>
    );
  };

  return (
    <div className="bg-card border border-border rounded-lg brand-shadow">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-foreground">Supplier Management</h2>
          <Button variant="default" iconName="Plus" iconPosition="left">
            Add Supplier
          </Button>
        </div>

        <div className="flex space-x-1 bg-muted/30 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('suppliers')}
            className={`flex-1 px-4 py-2 rounded-md text-sm font-medium brand-transition ${
              activeTab === 'suppliers' ?'bg-primary text-primary-foreground' :'text-muted-foreground hover:text-foreground'
            }`}
          >
            Suppliers
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`flex-1 px-4 py-2 rounded-md text-sm font-medium brand-transition ${
              activeTab === 'orders' ?'bg-primary text-primary-foreground' :'text-muted-foreground hover:text-foreground'
            }`}
          >
            Pending Orders
          </button>
        </div>
      </div>
      <div className="p-6">
        {activeTab === 'suppliers' && (
          <div className="space-y-4">
            {suppliers?.map((supplier) => (
              <div key={supplier?.id} className="flex items-center space-x-4 p-4 bg-muted/20 hover:bg-muted/30 border border-border rounded-lg brand-transition">
                <div className="w-12 h-12 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src={supplier?.logo} 
                    alt={supplier?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-foreground">{supplier?.name}</h3>
                    {getStatusBadge(supplier?.status)}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Category</p>
                      <p className="font-medium text-foreground">{supplier?.category}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Contact</p>
                      <p className="font-medium text-foreground">{supplier?.contactPerson}</p>
                      <p className="text-xs text-muted-foreground">{supplier?.email}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Performance</p>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <Icon name="Star" size={14} className="text-yellow-500 fill-current" />
                          <span className="font-medium text-foreground">{supplier?.rating}</span>
                        </div>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-success font-medium">{supplier?.totalValue}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 flex-shrink-0">
                  {supplier?.activeOrders > 0 && (
                    <div className="flex items-center space-x-1 px-2 py-1 bg-primary/10 text-primary rounded-full">
                      <Icon name="ShoppingCart" size={12} />
                      <span className="text-xs font-medium">{supplier?.activeOrders}</span>
                    </div>
                  )}
                  <button className="p-2 hover:bg-muted rounded-lg brand-transition">
                    <Icon name="Phone" size={16} className="text-muted-foreground hover:text-foreground" />
                  </button>
                  <button className="p-2 hover:bg-muted rounded-lg brand-transition">
                    <Icon name="Mail" size={16} className="text-muted-foreground hover:text-foreground" />
                  </button>
                  <button className="p-2 hover:bg-muted rounded-lg brand-transition">
                    <Icon name="MoreVertical" size={16} className="text-muted-foreground hover:text-foreground" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="space-y-4">
            {pendingOrders?.map((order) => (
              <div key={order?.id} className="flex items-center justify-between p-4 bg-muted/20 hover:bg-muted/30 border border-border rounded-lg brand-transition">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-foreground">{order?.id}</h3>
                    <div className="flex items-center space-x-2">
                      {getOrderStatusBadge(order?.status)}
                      {getPriorityBadge(order?.priority)}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Supplier</p>
                      <p className="font-medium text-foreground">{order?.supplier}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Items & Value</p>
                      <p className="font-medium text-foreground">{order?.items} items</p>
                      <p className="text-success font-medium">{order?.totalValue}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Order Date</p>
                      <p className="font-medium text-foreground">
                        {new Date(order.orderDate)?.toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Expected Delivery</p>
                      <p className="font-medium text-foreground">
                        {new Date(order.expectedDelivery)?.toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 ml-4">
                  <button className="p-2 hover:bg-muted rounded-lg brand-transition">
                    <Icon name="Eye" size={16} className="text-muted-foreground hover:text-foreground" />
                  </button>
                  <button className="p-2 hover:bg-muted rounded-lg brand-transition">
                    <Icon name="Download" size={16} className="text-muted-foreground hover:text-foreground" />
                  </button>
                  <button className="p-2 hover:bg-muted rounded-lg brand-transition">
                    <Icon name="MoreVertical" size={16} className="text-muted-foreground hover:text-foreground" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SupplierPanel;