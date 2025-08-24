import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProductivityDashboard = ({ timesheet, certifications, training, metrics }) => {
  const getProgressColor = (percentage) => {
    if (percentage >= 80) return 'text-safety-green bg-safety-green';
    if (percentage >= 60) return 'text-warning bg-warning';
    return 'text-urgent-red bg-urgent-red';
  };

  const formatHours = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  return (
    <div className="space-y-6">
      {/* Timesheet Section */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-foreground">Today's Timesheet</h3>
          <Button variant="outline" size="sm" iconName="Clock" iconPosition="left">
            Clock In/Out
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">{formatHours(timesheet?.hoursWorked)}</div>
            <div className="text-sm text-muted-foreground">Hours Worked</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">{formatHours(timesheet?.breakTime)}</div>
            <div className="text-sm text-muted-foreground">Break Time</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-safety-green">{formatHours(timesheet?.overtime)}</div>
            <div className="text-sm text-muted-foreground">Overtime</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">{timesheet?.projectsCompleted}</div>
            <div className="text-sm text-muted-foreground">Projects Done</div>
          </div>
        </div>

        <div className="space-y-3">
          {timesheet?.entries?.map((entry, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  entry?.status === 'active' ? 'bg-safety-green animate-pulse' : 'bg-muted-foreground'
                }`}></div>
                <div>
                  <div className="font-medium text-foreground">{entry?.project}</div>
                  <div className="text-sm text-muted-foreground">{entry?.location}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium text-foreground">{entry?.startTime} - {entry?.endTime || 'Active'}</div>
                <div className="text-sm text-muted-foreground">{formatHours(entry?.duration)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Certifications & Training */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Certifications */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-foreground">Certifications</h3>
            <Button variant="ghost" size="sm" iconName="Award" />
          </div>

          <div className="space-y-3">
            {certifications?.map((cert) => (
              <div key={cert?.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted brand-transition">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    cert?.status === 'valid' ? 'bg-safety-green/10' : 
                    cert?.status === 'expiring' ? 'bg-warning/10' : 'bg-urgent-red/10'
                  }`}>
                    <Icon 
                      name="Award" 
                      size={20} 
                      className={
                        cert?.status === 'valid' ? 'text-safety-green' : 
                        cert?.status === 'expiring' ? 'text-warning' : 'text-urgent-red'
                      } 
                    />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{cert?.name}</div>
                    <div className="text-sm text-muted-foreground">Expires: {cert?.expiryDate}</div>
                  </div>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                  cert?.status === 'valid' ? 'bg-safety-green/10 text-safety-green' : 
                  cert?.status === 'expiring' ? 'bg-warning/10 text-warning' : 'bg-urgent-red/10 text-urgent-red'
                }`}>
                  {cert?.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Training Modules */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-foreground">Training Progress</h3>
            <Button variant="ghost" size="sm" iconName="BookOpen" />
          </div>

          <div className="space-y-4">
            {training?.map((module) => (
              <div key={module.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="font-medium text-foreground">{module.name}</div>
                  <div className="text-sm text-muted-foreground">{module.progress}%</div>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full brand-transition ${getProgressColor(module.progress)}`}
                    style={{ width: `${module.progress}%` }}
                  ></div>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{module.completedLessons}/{module.totalLessons} lessons</span>
                  <span>Due: {module.dueDate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Performance Metrics */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="font-semibold text-foreground mb-4">Performance Metrics</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
              <Icon name="Target" size={24} className="text-primary" />
            </div>
            <div className="text-2xl font-bold text-foreground">{metrics?.efficiency}%</div>
            <div className="text-sm text-muted-foreground">Efficiency</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-safety-green/10 rounded-full flex items-center justify-center">
              <Icon name="Shield" size={24} className="text-safety-green" />
            </div>
            <div className="text-2xl font-bold text-foreground">{metrics?.safetyScore}</div>
            <div className="text-sm text-muted-foreground">Safety Score</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-accent/10 rounded-full flex items-center justify-center">
              <Icon name="Star" size={24} className="text-accent" />
            </div>
            <div className="text-2xl font-bold text-foreground">{metrics?.qualityRating}</div>
            <div className="text-sm text-muted-foreground">Quality Rating</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-warning/10 rounded-full flex items-center justify-center">
              <Icon name="TrendingUp" size={24} className="text-warning" />
            </div>
            <div className="text-2xl font-bold text-foreground">{metrics?.projectsCompleted}</div>
            <div className="text-sm text-muted-foreground">Projects Done</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductivityDashboard;