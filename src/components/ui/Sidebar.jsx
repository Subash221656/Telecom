import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Sidebar = ({ isCollapsed = false, onToggleCollapse }) => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { 
      name: 'Dashboard', 
      path: '/homepage', 
      icon: 'Home',
      description: 'Overview & metrics'
    },
    { 
      name: 'Services', 
      path: '/services-overview', 
      icon: 'Settings',
      description: 'Service offerings'
    },
    { 
      name: 'Client Portal', 
      path: '/client-portal', 
      icon: 'Users',
      description: 'Client management'
    },
    { 
      name: 'Employee Hub', 
      path: '/employee-hub', 
      icon: 'UserCheck',
      description: 'Team collaboration'
    },
    { 
      name: 'Inventory', 
      path: '/inventory-management', 
      icon: 'Package',
      description: 'Equipment tracking'
    },
    { 
      name: 'Projects', 
      path: '/project-portfolio', 
      icon: 'FolderOpen',
      description: 'Project portfolio'
    },
  ];

  const bottomItems = [
    { name: 'Settings', path: '/settings', icon: 'Settings' },
    { name: 'Help', path: '/help', icon: 'HelpCircle' },
    { name: 'Profile', path: '/profile', icon: 'User' },
  ];

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const sidebarWidth = isCollapsed && !isHovered ? 'w-16' : 'w-64';
  const showLabels = !isCollapsed || isHovered;

  return (
    <aside 
      className={`fixed left-0 top-16 bottom-0 z-sidebar bg-card border-r border-border brand-shadow brand-transition ${sidebarWidth}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col h-full">
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          {showLabels && (
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-safety-green rounded-full animate-pulse-slow"></div>
              <span className="text-sm font-medium text-muted-foreground">Live Operations</span>
            </div>
          )}
          {onToggleCollapse && (
            <button
              onClick={onToggleCollapse}
              className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-muted brand-transition"
            >
              <Icon 
                name={isCollapsed ? "ChevronRight" : "ChevronLeft"} 
                size={16} 
              />
            </button>
          )}
        </div>

        {/* Main Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navigationItems?.map((item) => (
            <Link
              key={item?.path}
              to={item?.path}
              className={`group flex items-center space-x-3 px-3 py-3 rounded-lg brand-transition hover:bg-muted ${
                isActivePath(item?.path)
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground'
              }`}
            >
              <div className="flex-shrink-0">
                <Icon 
                  name={item?.icon} 
                  size={20} 
                  className={isActivePath(item?.path) ? 'text-primary-foreground' : 'text-muted-foreground group-hover:text-primary'}
                />
              </div>
              {showLabels && (
                <div className="flex-1 min-w-0">
                  <div className="font-medium truncate">{item?.name}</div>
                  {item?.description && (
                    <div className={`text-xs truncate ${
                      isActivePath(item?.path) 
                        ? 'text-primary-foreground/70' 
                        : 'text-muted-foreground'
                    }`}>
                      {item?.description}
                    </div>
                  )}
                </div>
              )}
            </Link>
          ))}
        </nav>

        {/* Quick Actions */}
        {showLabels && (
          <div className="p-4 border-t border-border">
            <div className="space-y-2">
              <Button 
                variant="default" 
                size="sm" 
                fullWidth 
                iconName="Plus" 
                iconPosition="left"
              >
                New Project
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                fullWidth 
                iconName="Phone" 
                iconPosition="left"
              >
                Emergency
              </Button>
            </div>
          </div>
        )}

        {/* Bottom Navigation */}
        <div className="p-4 border-t border-border space-y-1">
          {bottomItems?.map((item) => (
            <Link
              key={item?.path}
              to={item?.path}
              className={`group flex items-center space-x-3 px-3 py-2 rounded-lg brand-transition hover:bg-muted ${
                isActivePath(item?.path)
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name={item?.icon} size={18} />
              {showLabels && (
                <span className="font-medium">{item?.name}</span>
              )}
            </Link>
          ))}
        </div>

        {/* Status Indicator */}
        <div className="p-4 border-t border-border">
          <div className={`flex items-center space-x-3 ${showLabels ? '' : 'justify-center'}`}>
            <div className="relative">
              <div className="w-3 h-3 bg-safety-green rounded-full"></div>
              <div className="absolute inset-0 w-3 h-3 bg-safety-green rounded-full animate-ping opacity-75"></div>
            </div>
            {showLabels && (
              <div className="flex-1">
                <div className="text-xs font-medium text-foreground">System Status</div>
                <div className="text-xs text-safety-green">All Systems Operational</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;