import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectMap = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [mapView, setMapView] = useState('satellite');

  const getStatusMarkerColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'active':
        return '#28A745';
      case 'planning':
        return '#D69E2E';
      case 'on-hold':
        return '#DC3545';
      case 'completed':
        return '#1B365D';
      default:
        return '#6C757D';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">Project Locations</h3>
          <div className="flex items-center space-x-2">
            <Button
              variant={mapView === 'satellite' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setMapView('satellite')}
            >
              Satellite
            </Button>
            <Button
              variant={mapView === 'roadmap' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setMapView('roadmap')}
            >
              Roadmap
            </Button>
          </div>
        </div>
      </div>
      <div className="relative h-96">
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          title="Project Locations Map"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=-33.8688,151.2093&z=10&output=embed"
          className="border-0"
        />
        
        {/* Map Overlay Controls */}
        <div className="absolute top-4 right-4 bg-card border border-border rounded-lg p-3 shadow-lg">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-safety-green rounded-full"></div>
              <span className="text-xs text-foreground">Active</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-warning rounded-full"></div>
              <span className="text-xs text-foreground">Planning</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-urgent-red rounded-full"></div>
              <span className="text-xs text-foreground">On Hold</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="text-xs text-foreground">Completed</span>
            </div>
          </div>
        </div>

        {/* Zoom Controls */}
        <div className="absolute bottom-4 right-4 flex flex-col space-y-1">
          <button className="flex items-center justify-center w-10 h-10 bg-card border border-border rounded-lg hover:bg-muted brand-transition">
            <Icon name="Plus" size={16} />
          </button>
          <button className="flex items-center justify-center w-10 h-10 bg-card border border-border rounded-lg hover:bg-muted brand-transition">
            <Icon name="Minus" size={16} />
          </button>
        </div>
      </div>
      {/* Project List */}
      <div className="p-6 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects?.slice(0, 4)?.map((project, index) => (
            <div 
              key={index}
              className={`p-4 rounded-lg border cursor-pointer brand-transition ${
                selectedProject?.id === project?.id 
                  ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
              }`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-foreground">{project?.name}</h4>
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: getStatusMarkerColor(project?.status) }}
                ></div>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{project?.location}</p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Progress: {project?.progress}%</span>
                <span className="text-muted-foreground">{project?.teamSize} team members</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectMap;