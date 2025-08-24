import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const DocumentLibrary = ({ documents }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'All Documents' },
    { value: 'contracts', label: 'Contracts' },
    { value: 'certifications', label: 'Certifications' },
    { value: 'safety', label: 'Safety Reports' },
    { value: 'compliance', label: 'Compliance' },
    { value: 'photos', label: 'Project Photos' }
  ];

  const getDocumentIcon = (type) => {
    switch (type) {
      case 'pdf':
        return 'FileText';
      case 'image':
        return 'Image';
      case 'video':
        return 'Video';
      case 'excel':
        return 'FileSpreadsheet';
      case 'word':
        return 'FileText';
      default:
        return 'File';
    }
  };

  const getDocumentColor = (type) => {
    switch (type) {
      case 'pdf':
        return 'text-urgent-red bg-urgent-red/10';
      case 'image':
        return 'text-safety-green bg-safety-green/10';
      case 'video':
        return 'text-accent bg-accent/10';
      case 'excel':
        return 'text-safety-green bg-safety-green/10';
      case 'word':
        return 'text-primary bg-primary/10';
      default:
        return 'text-muted-foreground bg-muted';
    }
  };

  const filteredDocuments = documents?.filter(doc => {
    const matchesSearch = doc?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                         doc?.description?.toLowerCase()?.includes(searchTerm?.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || doc?.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i))?.toFixed(2)) + ' ' + sizes?.[i];
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Document Library</h3>
        <Button variant="default" size="sm" iconName="Upload" iconPosition="left">
          Upload Document
        </Button>
      </div>
      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1">
          <Input
            type="search"
            placeholder="Search documents..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e?.target?.value)}
          />
        </div>
        <div className="flex space-x-2 overflow-x-auto">
          {categories?.map((category) => (
            <button
              key={category?.value}
              onClick={() => setSelectedCategory(category?.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap brand-transition ${
                selectedCategory === category?.value
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {category?.label}
            </button>
          ))}
        </div>
      </div>
      {/* Document Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDocuments?.map((document, index) => (
          <div key={index} className="border border-border rounded-lg p-4 hover:shadow-md brand-transition">
            <div className="flex items-start justify-between mb-3">
              <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${getDocumentColor(document?.type)}`}>
                <Icon name={getDocumentIcon(document?.type)} size={20} />
              </div>
              <div className="flex space-x-1">
                <button className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-muted brand-transition">
                  <Icon name="Download" size={16} className="text-muted-foreground" />
                </button>
                <button className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-muted brand-transition">
                  <Icon name="Share" size={16} className="text-muted-foreground" />
                </button>
              </div>
            </div>

            <h4 className="font-medium text-foreground mb-1 truncate">{document?.name}</h4>
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{document?.description}</p>

            <div className="space-y-2 text-xs text-muted-foreground">
              <div className="flex items-center justify-between">
                <span>Size: {formatFileSize(document?.size)}</span>
                <span className="capitalize">{document?.category}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Modified: {document?.lastModified}</span>
                {document?.isNew && (
                  <span className="px-2 py-1 bg-accent text-white rounded-full text-xs">New</span>
                )}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center">
                    <Icon name="User" size={12} className="text-muted-foreground" />
                  </div>
                  <span className="text-xs text-muted-foreground">{document?.uploadedBy}</span>
                </div>
                <Button variant="ghost" size="sm">
                  View
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {filteredDocuments?.length === 0 && (
        <div className="text-center py-12">
          <Icon name="FileX" size={48} className="text-muted-foreground mx-auto mb-4" />
          <h4 className="text-lg font-medium text-foreground mb-2">No documents found</h4>
          <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default DocumentLibrary;