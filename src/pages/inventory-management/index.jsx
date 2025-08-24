import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Sidebar from '../../components/ui/Sidebar';
import InventoryStats from './components/InventoryStats';
import CategoryGrid from './components/CategoryGrid';
import InventoryTable from './components/InventoryTable';
import QuickActions from './components/QuickActions';
import SupplierPanel from './components/SupplierPanel';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const InventoryManagement = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeView, setActiveView] = useState('overview');

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const viewOptions = [
    { id: 'overview', label: 'Overview', icon: 'LayoutDashboard' },
    { id: 'categories', label: 'Categories', icon: 'Grid3X3' },
    { id: 'items', label: 'All Items', icon: 'Package' },
    { id: 'suppliers', label: 'Suppliers', icon: 'Truck' },
    { id: 'analytics', label: 'Analytics', icon: 'BarChart3' }
  ];

  const renderContent = () => {
    switch (activeView) {
      case 'overview':
        return (
          <div className="space-y-8">
            <InventoryStats />
            <QuickActions />
            <CategoryGrid />
          </div>
        );
      case 'categories':
        return (
          <div className="space-y-8">
            <InventoryStats />
            <CategoryGrid />
          </div>
        );
      case 'items':
        return (
          <div className="space-y-8">
            <InventoryStats />
            <InventoryTable />
          </div>
        );
      case 'suppliers':
        return (
          <div className="space-y-8">
            <InventoryStats />
            <SupplierPanel />
          </div>
        );
      case 'analytics':
        return (
          <div className="space-y-8">
            <InventoryStats />
            <div className="bg-card border border-border rounded-lg p-12 text-center brand-shadow">
              <Icon name="BarChart3" size={48} className="text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Analytics Dashboard</h3>
              <p className="text-muted-foreground mb-6">
                Comprehensive inventory analytics and reporting tools coming soon.
              </p>
              <Button variant="default" iconName="TrendingUp" iconPosition="left">
                View Sample Report
              </Button>
            </div>
          </div>
        );
      default:
        return (
          <div className="space-y-8">
            <InventoryStats />
            <QuickActions />
            <CategoryGrid />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar isCollapsed={sidebarCollapsed} onToggleCollapse={toggleSidebar} />
      <main className={`pt-16 brand-transition ${sidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
        <div className="p-6">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">Inventory Management</h1>
                <p className="text-muted-foreground">
                  Comprehensive stock control and resource allocation for telecommunications equipment
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Button variant="outline" iconName="Download" iconPosition="left">
                  Export Data
                </Button>
                <Button variant="outline" iconName="Settings" iconPosition="left">
                  Settings
                </Button>
                <Button variant="default" iconName="Plus" iconPosition="left">
                  Add New Item
                </Button>
              </div>
            </div>

            {/* View Navigation */}
            <div className="mt-6 flex flex-wrap gap-2">
              {viewOptions?.map((option) => (
                <button
                  key={option?.id}
                  onClick={() => setActiveView(option?.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg brand-transition ${
                    activeView === option?.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted/30 text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                  }`}
                >
                  <Icon name={option?.icon} size={16} />
                  <span className="font-medium">{option?.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Alert Banner */}
          <div className="mb-6 p-4 bg-warning/10 border border-warning/20 rounded-lg">
            <div className="flex items-center space-x-3">
              <Icon name="AlertTriangle" size={20} className="text-warning flex-shrink-0" />
              <div className="flex-1">
                <h4 className="font-medium text-foreground">Low Stock Alert</h4>
                <p className="text-sm text-muted-foreground">
                  23 items are below minimum threshold. Review and reorder to maintain optimal stock levels.
                </p>
              </div>
              <Button variant="outline" size="sm" iconName="Eye">
                View Items
              </Button>
            </div>
          </div>

          {/* Main Content */}
          {renderContent()}

          {/* System Status Footer */}
          <div className="mt-12 p-4 bg-muted/20 border border-border rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse-slow"></div>
                  <span className="text-sm font-medium text-foreground">System Status: Operational</span>
                </div>
                <span className="text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">
                  Last sync: {new Date()?.toLocaleTimeString()}
                </span>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <span>Total Items: 2,847</span>
                <span>•</span>
                <span>Active Suppliers: 12</span>
                <span>•</span>
                <span>Pending Orders: 47</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InventoryManagement;