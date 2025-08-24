import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';


const MediaUploadSection = ({ onUpload, recentUploads }) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(null);

  const handleDrag = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    if (e?.type === "dragenter" || e?.type === "dragover") {
      setDragActive(true);
    } else if (e?.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    setDragActive(false);
    
    if (e?.dataTransfer?.files && e?.dataTransfer?.files?.[0]) {
      handleFiles(e?.dataTransfer?.files);
    }
  };

  const handleFiles = (files) => {
    Array.from(files)?.forEach(file => {
      // Simulate upload progress
      setUploadProgress({ name: file?.name, progress: 0 });
      
      const interval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev?.progress >= 100) {
            clearInterval(interval);
            setTimeout(() => setUploadProgress(null), 1000);
            onUpload({
              id: Date.now(),
              name: file?.name,
              type: file?.type?.startsWith('image/') ? 'image' : 'video',
              size: file?.size,
              timestamp: new Date(),
              location: "Current Location",
              project: "NBN Installation - Site 247"
            });
            return null;
          }
          return { ...prev, progress: prev?.progress + 10 };
        });
      }, 200);
    });
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i))?.toFixed(2)) + ' ' + sizes?.[i];
  };

  const formatTimestamp = (timestamp) => {
    const now = new Date();
    const uploadTime = new Date(timestamp);
    const diffInMinutes = Math.floor((now - uploadTime) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return uploadTime?.toLocaleDateString();
  };

  return (
    <div className="space-y-6">
      {/* Upload Area */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="font-semibold text-foreground mb-4">Document Progress</h3>
        
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center brand-transition ${
            dragActive 
              ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Icon name="Upload" size={32} className="text-primary" />
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Upload Photos & Videos</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Drag and drop files here, or click to select
              </p>
              <div className="flex items-center justify-center space-x-2">
                <Button variant="default" iconName="Camera" iconPosition="left">
                  Take Photo
                </Button>
                <Button variant="outline" iconName="Video" iconPosition="left">
                  Record Video
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Upload Progress */}
        {uploadProgress && (
          <div className="mt-4 p-4 bg-muted rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">{uploadProgress?.name}</span>
              <span className="text-sm text-muted-foreground">{uploadProgress?.progress}%</span>
            </div>
            <div className="w-full bg-border rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full brand-transition"
                style={{ width: `${uploadProgress?.progress}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          <Button variant="outline" size="sm" iconName="MapPin" iconPosition="left">
            Add Location
          </Button>
          <Button variant="outline" size="sm" iconName="Tag" iconPosition="left">
            Add Tags
          </Button>
          <Button variant="outline" size="sm" iconName="MessageSquare" iconPosition="left">
            Add Notes
          </Button>
          <Button variant="outline" size="sm" iconName="Share" iconPosition="left">
            Share
          </Button>
        </div>
      </div>
      {/* Recent Uploads */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-foreground">Recent Uploads</h3>
          <Button variant="ghost" size="sm" iconName="MoreHorizontal" />
        </div>

        <div className="space-y-3">
          {recentUploads?.map((upload) => (
            <div key={upload?.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted brand-transition">
              <div className="flex-shrink-0">
                {upload?.type === 'image' ? (
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon name="Image" size={20} className="text-accent" />
                  </div>
                ) : (
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Video" size={20} className="text-primary" />
                  </div>
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-foreground truncate">{upload?.name}</h4>
                  <span className="text-xs text-muted-foreground">{formatTimestamp(upload?.timestamp)}</span>
                </div>
                <p className="text-sm text-muted-foreground truncate">{upload?.project}</p>
                <div className="flex items-center space-x-4 mt-1">
                  <span className="text-xs text-muted-foreground">{formatFileSize(upload?.size)}</span>
                  <div className="flex items-center space-x-1">
                    <Icon name="MapPin" size={12} className="text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{upload?.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" iconName="Eye" />
                <Button variant="ghost" size="sm" iconName="Share" />
                <Button variant="ghost" size="sm" iconName="Download" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaUploadSection;