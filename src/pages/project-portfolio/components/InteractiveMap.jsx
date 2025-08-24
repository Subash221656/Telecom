import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InteractiveMap = ({ projects, onProjectSelect }) => {
  const [selectedState, setSelectedState] = useState('all');

  const states = [
    { code: 'all', name: 'All Australia', count: projects?.length },
    { code: 'NSW', name: 'New South Wales', count: projects?.filter(p => p?.state === 'NSW')?.length },
    { code: 'VIC', name: 'Victoria', count: projects?.filter(p => p?.state === 'VIC')?.length },
    { code: 'QLD', name: 'Queensland', count: projects?.filter(p => p?.state === 'QLD')?.length },
    { code: 'WA', name: 'Western Australia', count: projects?.filter(p => p?.state === 'WA')?.length },
    { code: 'SA', name: 'South Australia', count: projects?.filter(p => p?.state === 'SA')?.length },
    { code: 'TAS', name: 'Tasmania', count: projects?.filter(p => p?.state === 'TAS')?.length }
  ];

  const filteredProjects = selectedState === 'all' 
    ? projects 
    : projects?.filter(p => p?.state === selectedState);

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden mb-8">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Icon name="Map" size={24} className="text-primary" />
            <div>
              <h3 className="text-lg font-semibold text-foreground">Project Locations</h3>
              <p className="text-sm text-muted-foreground">Interactive map of our infrastructure projects across Australia</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="MapPin" size={16} className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {filteredProjects?.length} projects {selectedState !== 'all' && `in ${states?.find(s => s?.code === selectedState)?.name}`}
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
        {/* State Filter */}
        <div className="lg:border-r border-border p-6">
          <h4 className="font-semibold text-foreground mb-4">Filter by State</h4>
          <div className="space-y-2">
            {states?.map((state) => (
              <button
                key={state?.code}
                onClick={() => setSelectedState(state?.code)}
                className={`w-full flex items-center justify-between p-3 rounded-lg brand-transition ${
                  selectedState === state?.code
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted text-foreground'
                }`}
              >
                <span className="font-medium">{state?.name}</span>
                <span className={`text-sm px-2 py-1 rounded-full ${
                  selectedState === state?.code
                    ? 'bg-primary-foreground/20 text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {state?.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="lg:col-span-2 p-6">
          <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              title="FiberLink Pro Project Locations"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=-25.2744,133.7751&z=5&output=embed"
              className="w-full h-full"
            />
            
            {/* Overlay with project markers */}
            <div className="absolute inset-0 pointer-events-none">
              {filteredProjects?.slice(0, 8)?.map((project, index) => (
                <div
                  key={project?.id}
                  className="absolute pointer-events-auto"
                  style={{
                    left: `${20 + (index % 4) * 20}%`,
                    top: `${20 + Math.floor(index / 4) * 30}%`
                  }}
                >
                  <button
                    onClick={() => onProjectSelect(project)}
                    className="w-8 h-8 bg-accent border-2 border-accent-foreground rounded-full flex items-center justify-center hover:scale-110 brand-transition group relative"
                  >
                    <Icon name="MapPin" size={16} className="text-accent-foreground" />
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 brand-transition pointer-events-none">
                      <div className="bg-card border border-border rounded-lg p-3 shadow-lg min-w-48">
                        <div className="font-medium text-foreground text-sm">{project?.title}</div>
                        <div className="text-xs text-muted-foreground">{project?.location}</div>
                        <div className="text-xs text-primary mt-1">{project?.serviceType}</div>
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-success rounded-full"></div>
                <span>Completed</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-warning rounded-full"></div>
                <span>In Progress</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span>Planning</span>
              </div>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              iconName="ExternalLink"
              iconPosition="right"
            >
              View Full Map
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;