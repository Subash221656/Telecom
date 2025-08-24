import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen || !project) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Info' },
    { id: 'gallery', label: 'Gallery', icon: 'Image' },
    { id: 'timeline', label: 'Timeline', icon: 'Clock' },
    { id: 'testimonials', label: 'Testimonials', icon: 'MessageSquare' }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project?.gallery?.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project?.gallery?.length - 1 : prev - 1
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-card border border-border rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-4">
            <Image
              src={project?.clientLogo}
              alt={project?.client}
              className="w-8 h-8 object-contain"
            />
            <div>
              <h2 className="text-xl font-semibold text-foreground">{project?.title}</h2>
              <p className="text-sm text-muted-foreground">{project?.client} • {project?.location}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            iconName="X"
            onClick={onClose}
          />
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-6 py-3 text-sm font-medium brand-transition ${
                activeTab === tab?.id
                  ? 'text-primary border-b-2 border-primary bg-primary/5' :'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span>{tab?.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Project Details</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Service Type:</span>
                        <span className="font-medium text-foreground">{project?.serviceType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-medium text-foreground">{project?.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Project Value:</span>
                        <span className="font-medium text-foreground">{project?.value}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Status:</span>
                        <span className={`font-medium ${
                          project?.status === 'Completed' ? 'text-success' :
                          project?.status === 'In Progress' ? 'text-warning' : 'text-primary'
                        }`}>
                          {project?.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Key Achievements</h3>
                    <ul className="space-y-2">
                      {project?.achievements?.map((achievement, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Icon name="CheckCircle" size={16} className="text-success mt-0.5" />
                          <span className="text-sm text-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Technical Specifications</h3>
                    <div className="bg-muted rounded-lg p-4 space-y-2">
                      {project?.specifications?.map((spec, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span className="text-muted-foreground">{spec?.label}:</span>
                          <span className="font-medium text-foreground">{spec?.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Project Description</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project?.fullDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'gallery' && (
            <div className="space-y-4">
              <div className="relative">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <Image
                    src={project?.gallery?.[currentImageIndex] || project?.image}
                    alt={`${project?.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                {project?.gallery && project?.gallery?.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-card/90 backdrop-blur-sm border border-border rounded-full flex items-center justify-center hover:bg-card brand-transition"
                    >
                      <Icon name="ChevronLeft" size={20} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-card/90 backdrop-blur-sm border border-border rounded-full flex items-center justify-center hover:bg-card brand-transition"
                    >
                      <Icon name="ChevronRight" size={20} />
                    </button>
                  </>
                )}
              </div>
              
              {project?.gallery && project?.gallery?.length > 1 && (
                <div className="flex space-x-2 overflow-x-auto pb-2">
                  {project?.gallery?.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 brand-transition ${
                        index === currentImageIndex ? 'border-primary' : 'border-border'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'timeline' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Project Timeline</h3>
              <div className="space-y-4">
                {project?.timeline?.map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                      milestone?.completed ? 'bg-success text-success-foreground' : 'bg-muted text-muted-foreground'
                    }`}>
                      <Icon name={milestone?.completed ? "CheckCircle" : "Clock"} size={16} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-foreground">{milestone?.title}</h4>
                        <span className="text-sm text-muted-foreground">{milestone?.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{milestone?.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'testimonials' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">Client Testimonials</h3>
              {project?.testimonials?.map((testimonial, index) => (
                <div key={index} className="bg-muted rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <Image
                      src={testimonial?.avatar}
                      alt={testimonial?.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-medium text-foreground">{testimonial?.name}</h4>
                        <span className="text-sm text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">{testimonial?.role}</span>
                      </div>
                      <p className="text-sm text-foreground leading-relaxed mb-3">
                        "{testimonial?.content}"
                      </p>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)]?.map((_, i) => (
                          <Icon
                            key={i}
                            name="Star"
                            size={14}
                            className={i < testimonial?.rating ? 'text-warning fill-current' : 'text-muted-foreground'}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;