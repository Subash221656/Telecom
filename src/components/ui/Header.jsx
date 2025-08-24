import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Services', path: '/services-overview', icon: 'Settings' },
    { name: 'Client Portal', path: '/client-portal', icon: 'Users' },
    { name: 'Employee Hub', path: '/employee-hub', icon: 'UserCheck' },
    { name: 'Projects', path: '/project-portfolio', icon: 'FolderOpen' },
  ];

  const moreMenuItems = [
    { name: 'Inventory', path: '/inventory-management', icon: 'Package' },
    { name: 'Settings', path: '/settings', icon: 'Settings' },
    { name: 'Help', path: '/help', icon: 'HelpCircle' },
    { name: 'Admin', path: '/admin', icon: 'Shield' },
  ];

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-header bg-card border-b border-border brand-shadow">
      <div className="flex items-center justify-between h-16 px-6">
        {/* Logo Section */}
        <Link to="/homepage" className="flex items-center space-x-3 hover:opacity-80 brand-transition">
          <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg">
            <Icon name="Zap" size={24} color="white" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-primary tracking-tight">FiberLink</span>
            <span className="text-sm font-medium text-accent -mt-1">Pro</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navigationItems?.map((item) => (
            <Link
              key={item?.path}
              to={item?.path}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg brand-transition hover:bg-muted ${
                isActivePath(item?.path)
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground hover:text-primary'
              }`}
            >
              <Icon name={item?.icon} size={18} />
              <span className="font-medium">{item?.name}</span>
            </Link>
          ))}
          
          {/* More Menu Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-2 px-4 py-2 rounded-lg brand-transition hover:bg-muted text-foreground hover:text-primary">
              <Icon name="MoreHorizontal" size={18} />
              <span className="font-medium">More</span>
            </button>
            
            <div className="absolute right-0 top-full mt-2 w-48 bg-popover border border-border rounded-lg brand-shadow opacity-0 invisible group-hover:opacity-100 group-hover:visible brand-transition z-50">
              <div className="py-2">
                {moreMenuItems?.map((item) => (
                  <Link
                    key={item?.path}
                    to={item?.path}
                    className="flex items-center space-x-3 px-4 py-2 text-sm text-popover-foreground hover:bg-muted brand-transition"
                  >
                    <Icon name={item?.icon} size={16} />
                    <span>{item?.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-3">
          <Button variant="ghost" size="sm" iconName="Bell" iconPosition="left">
            Notifications
          </Button>
          <Button variant="outline" size="sm" iconName="Phone" iconPosition="left">
            Emergency
          </Button>
          <Button variant="default" size="sm" iconName="MessageSquare" iconPosition="left">
            Start Project
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-muted brand-transition"
        >
          <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <div className="px-6 py-4 space-y-2">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg brand-transition ${
                  isActivePath(item?.path)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={item?.icon} size={20} />
                <span className="font-medium">{item?.name}</span>
              </Link>
            ))}
            
            <div className="border-t border-border pt-2 mt-4">
              {moreMenuItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-foreground hover:bg-muted brand-transition"
                >
                  <Icon name={item?.icon} size={20} />
                  <span className="font-medium">{item?.name}</span>
                </Link>
              ))}
            </div>
            
            <div className="border-t border-border pt-4 mt-4 space-y-2">
              <Button variant="ghost" fullWidth iconName="Bell" iconPosition="left">
                Notifications
              </Button>
              <Button variant="outline" fullWidth iconName="Phone" iconPosition="left">
                Emergency Contact
              </Button>
              <Button variant="default" fullWidth iconName="MessageSquare" iconPosition="left">
                Start Your Project
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;