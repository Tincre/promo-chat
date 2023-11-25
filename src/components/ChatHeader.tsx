import React, { MouseEvent, KeyboardEvent } from 'react';
import { ChatShrinkButton } from './ChatShrinkButton';
import { ChatExpandButton } from './ChatExpandButton';
import { ChatCloseButton } from './ChatCloseButton';
import { BetaPill } from './BetaPill';

export type ChatHeaderProps = HeaderProps & {
  handleChatButtonExpand: (
    event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
  ) => void;
};
export type ChatHeaderExpandedProps = HeaderProps & {
  handleChatButtonShrink: (
    event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
  ) => void;
};
type HeaderProps = {
  agentName: string;
  supportEmail?: string;
  handleChatButtonClose: (
    event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
  ) => void;
};
export function ChatHeaderExpanded({
  agentName,
  supportEmail,
  handleChatButtonShrink,
  handleChatButtonClose,
}: ChatHeaderExpandedProps) {
  return (
    <div
      className="flex items-center justify-between rounded-t-lg border-b bg-blue-800 p-4 text-white"
      id="promo-chat-header-container-expanded"
    >
      <p className="text-lg font-semibold" id="promo-chat-header-text">
        {`💬 Chatting with ${agentName}`}
        <BetaPill supportEmail={supportEmail} />
      </p>
      <span>
        <ChatShrinkButton handleChatButtonShrink={handleChatButtonShrink} />
        <ChatCloseButton handleChatButtonClose={handleChatButtonClose} />
      </span>
    </div>
  );
}

export function ChatHeader({
  agentName,
  supportEmail,
  handleChatButtonExpand,
  handleChatButtonClose,
}: ChatHeaderProps) {
  return (
    <div
      className="flex items-center justify-between rounded-t-lg border-b bg-blue-800 p-4 text-white"
      id="promo-chat-header-container"
    >
      <p className="text-lg font-semibold" id="promo-chat-header-text">
        {`💬 Chatting with ${agentName}`}
        <BetaPill supportEmail={supportEmail} />
      </p>
      <ChatExpandButton handleChatButtonExpand={handleChatButtonExpand} />
      <ChatCloseButton handleChatButtonClose={handleChatButtonClose} />
    </div>
  );
}
