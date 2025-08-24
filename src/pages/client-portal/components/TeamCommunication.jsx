import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const TeamCommunication = ({ messages, onSendMessage }) => {
  const [newMessage, setNewMessage] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('all');

  const teams = [
    { value: 'all', label: 'All Teams', count: 24 },
    { value: 'fiber-install', label: 'Fiber Installation', count: 8 },
    { value: 'civil-works', label: 'Civil Works', count: 6 },
    { value: 'project-mgmt', label: 'Project Management', count: 4 },
    { value: 'safety', label: 'Safety Team', count: 6 }
  ];

  const handleSendMessage = () => {
    if (newMessage?.trim()) {
      onSendMessage({
        content: newMessage,
        team: selectedTeam,
        timestamp: new Date()?.toISOString()
      });
      setNewMessage('');
    }
  };

  const formatMessageTime = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInMinutes = Math.floor((now - date) / (1000 * 60));
    
    if (diffInMinutes < 60) {
      return `${diffInMinutes}m ago`;
    } else if (diffInMinutes < 1440) {
      return `${Math.floor(diffInMinutes / 60)}h ago`;
    } else {
      return date?.toLocaleDateString();
    }
  };

  const getMessageTypeIcon = (type) => {
    switch (type) {
      case 'photo':
        return 'Camera';
      case 'document':
        return 'FileText';
      case 'location':
        return 'MapPin';
      case 'urgent':
        return 'AlertTriangle';
      default:
        return 'MessageSquare';
    }
  };

  const filteredMessages = selectedTeam === 'all' 
    ? messages 
    : messages?.filter(msg => msg?.team === selectedTeam);

  return (
    <div className="bg-card border border-border rounded-lg flex flex-col h-96">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">Team Communication</h3>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-safety-green rounded-full animate-pulse-slow"></div>
            <span className="text-sm text-muted-foreground">Live</span>
          </div>
        </div>

        {/* Team Selector */}
        <div className="flex space-x-2 overflow-x-auto">
          {teams?.map((team) => (
            <button
              key={team?.value}
              onClick={() => setSelectedTeam(team?.value)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap brand-transition ${
                selectedTeam === team?.value
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              <span>{team?.label}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${
                selectedTeam === team?.value
                  ? 'bg-primary-foreground/20 text-primary-foreground'
                  : 'bg-background text-muted-foreground'
              }`}>
                {team?.count}
              </span>
            </button>
          ))}
        </div>
      </div>
      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {filteredMessages?.map((message, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-xs font-medium text-primary-foreground">
                  {message?.sender?.split(' ')?.map(n => n?.[0])?.join('')}
                </span>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-sm font-medium text-foreground">{message?.sender}</span>
                <span className="text-xs text-muted-foreground">{formatMessageTime(message?.timestamp)}</span>
                {message?.type && (
                  <Icon name={getMessageTypeIcon(message?.type)} size={12} className="text-muted-foreground" />
                )}
              </div>
              <p className="text-sm text-foreground">{message?.content}</p>
              {message?.attachment && (
                <div className="mt-2 p-3 bg-muted rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Icon name={getMessageTypeIcon(message?.attachment?.type)} size={16} className="text-muted-foreground" />
                    <span className="text-sm text-foreground">{message?.attachment?.name}</span>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Message Input */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center space-x-2">
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e?.target?.value)}
              onKeyPress={(e) => e?.key === 'Enter' && handleSendMessage()}
            />
          </div>
          <Button variant="ghost" size="sm" iconName="Paperclip">
          </Button>
          <Button variant="ghost" size="sm" iconName="Camera">
          </Button>
          <Button 
            variant="default" 
            size="sm" 
            iconName="Send" 
            onClick={handleSendMessage}
            disabled={!newMessage?.trim()}
          >
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TeamCommunication;