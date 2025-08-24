import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const TeamChatPanel = ({ channels, activeChannel, onChannelChange, onSendMessage }) => {
  const [newMessage, setNewMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleSendMessage = () => {
    if (newMessage?.trim()) {
      onSendMessage(activeChannel, newMessage);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e?.key === 'Enter' && !e?.shiftKey) {
      e?.preventDefault();
      handleSendMessage();
    }
  };

  const formatTimestamp = (timestamp) => {
    const now = new Date();
    const messageTime = new Date(timestamp);
    const diffInMinutes = Math.floor((now - messageTime) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return messageTime?.toLocaleDateString();
  };

  const currentChannel = channels?.find(c => c?.id === activeChannel);

  return (
    <div className="bg-card border border-border rounded-lg h-96 flex flex-col">
      {/* Channel Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-safety-green rounded-full"></div>
          <div>
            <h3 className="font-semibold text-foreground">{currentChannel?.name}</h3>
            <p className="text-xs text-muted-foreground">{currentChannel?.members} members online</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" iconName="Phone">
            Call
          </Button>
          <Button variant="ghost" size="sm" iconName="Video">
            Video
          </Button>
        </div>
      </div>
      {/* Channel Tabs */}
      <div className="flex items-center space-x-1 p-2 border-b border-border overflow-x-auto">
        {channels?.map((channel) => (
          <button
            key={channel?.id}
            onClick={() => onChannelChange(channel?.id)}
            className={`px-3 py-1 rounded-md text-sm font-medium whitespace-nowrap brand-transition ${
              activeChannel === channel?.id
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
            }`}
          >
            {channel?.name}
            {channel?.unreadCount > 0 && (
              <span className="ml-2 px-1.5 py-0.5 bg-accent text-accent-foreground text-xs rounded-full">
                {channel?.unreadCount}
              </span>
            )}
          </button>
        ))}
      </div>
      {/* Messages */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {currentChannel?.messages?.map((message) => (
          <div key={message?.id} className="flex items-start space-x-3">
            <img
              src={message?.sender?.avatar}
              alt={message?.sender?.name}
              className="w-8 h-8 rounded-full object-cover flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <span className="font-medium text-sm text-foreground">{message?.sender?.name}</span>
                <span className="text-xs text-muted-foreground">{formatTimestamp(message?.timestamp)}</span>
                {message?.sender?.role && (
                  <span className="px-2 py-0.5 bg-accent/10 text-accent text-xs rounded-full">
                    {message?.sender?.role}
                  </span>
                )}
              </div>
              <p className="text-sm text-foreground">{message?.content}</p>
              {message?.attachment && (
                <div className="mt-2 p-2 bg-muted rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Icon name={message?.attachment?.type === 'image' ? 'Image' : 'File'} size={16} />
                    <span className="text-sm text-foreground">{message?.attachment?.name}</span>
                    <Button variant="ghost" size="sm" iconName="Download">
                      Download
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
          <Button variant="ghost" size="sm" iconName="Paperclip" />
          <Button variant="ghost" size="sm" iconName="Camera" />
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e?.target?.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
          <Button variant="ghost" size="sm" iconName="Smile" onClick={() => setShowEmojiPicker(!showEmojiPicker)} />
          <Button variant="default" size="sm" iconName="Send" onClick={handleSendMessage} />
        </div>
      </div>
    </div>
  );
};

export default TeamChatPanel;