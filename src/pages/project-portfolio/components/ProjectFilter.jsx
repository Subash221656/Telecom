import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const ProjectFilter = ({ filters, onFilterChange, onClearFilters, projectCounts }) => {
  const serviceTypeOptions = [
    { value: 'all', label: 'All Services' },
    { value: 'NBN Fiber', label: 'NBN Fiber' },
    { value: 'Civil Works', label: 'Civil Works' },
    { value: 'Structured Cabling', label: 'Structured Cabling' },
    { value: 'HFC Network', label: 'HFC Network' }
  ];

  const statusOptions = [
    { value: 'all', label: 'All Status' },
    { value: 'Completed', label: 'Completed' },
    { value: 'In Progress', label: 'In Progress' },
    { value: 'Planning', label: 'Planning' }
  ];

  const locationOptions = [
    { value: 'all', label: 'All Locations' },
    { value: 'NSW', label: 'New South Wales' },
    { value: 'VIC', label: 'Victoria' },
    { value: 'QLD', label: 'Queensland' },
    { value: 'WA', label: 'Western Australia' },
    { value: 'SA', label: 'South Australia' },
    { value: 'TAS', label: 'Tasmania' }
  ];

  const yearOptions = [
    { value: 'all', label: 'All Years' },
    { value: '2024', label: '2024' },
    { value: '2023', label: '2023' },
    { value: '2022', label: '2022' },
    { value: '2021', label: '2021' }
  ];

  const hasActiveFilters = filters?.serviceType !== 'all' || 
                          filters?.status !== 'all' || 
                          filters?.location !== 'all' || 
                          filters?.year !== 'all';

  return (
    <div className="bg-card border border-border rounded-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Icon name="Filter" size={20} className="text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Filter Projects</h3>
          <span className="text-sm text-muted-foreground">
            ({projectCounts?.total} projects found)
          </span>
        </div>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            iconName="X"
            iconPosition="left"
            onClick={onClearFilters}
          >
            Clear Filters
          </Button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Select
          label="Service Type"
          options={serviceTypeOptions}
          value={filters?.serviceType}
          onChange={(value) => onFilterChange('serviceType', value)}
        />

        <Select
          label="Project Status"
          options={statusOptions}
          value={filters?.status}
          onChange={(value) => onFilterChange('status', value)}
        />

        <Select
          label="Location"
          options={locationOptions}
          value={filters?.location}
          onChange={(value) => onFilterChange('location', value)}
        />

        <Select
          label="Year"
          options={yearOptions}
          value={filters?.year}
          onChange={(value) => onFilterChange('year', value)}
        />
      </div>
      {/* Quick Filter Tags */}
      <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-border">
        <span className="text-sm font-medium text-muted-foreground mr-2">Quick Filters:</span>
        <Button
          variant={filters?.serviceType === 'NBN Fiber' ? 'default' : 'ghost'}
          size="xs"
          onClick={() => onFilterChange('serviceType', filters?.serviceType === 'NBN Fiber' ? 'all' : 'NBN Fiber')}
        >
          NBN Projects
        </Button>
        <Button
          variant={filters?.status === 'Completed' ? 'default' : 'ghost'}
          size="xs"
          onClick={() => onFilterChange('status', filters?.status === 'Completed' ? 'all' : 'Completed')}
        >
          Completed
        </Button>
        <Button
          variant={filters?.year === '2024' ? 'default' : 'ghost'}
          size="xs"
          onClick={() => onFilterChange('year', filters?.year === '2024' ? 'all' : '2024')}
        >
          This Year
        </Button>
      </div>
    </div>
  );
};

export default ProjectFilter;