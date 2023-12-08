/* Copyright Tincre (Musicfox, Inc)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

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
      className="flex items-center justify-between rounded-t-lg border-b bg-blue-800 p-4 text-white content-center"
      id="promo-chat-header-container-expanded"
    >
      <p className="text-lg font-semibold pb-2" id="promo-chat-header-text">
        {`💬 Chatting with ${agentName}`}
        <BetaPill supportEmail={supportEmail} />
      </p>
      <span className="pt-1">
        <span className="mr-2">
          <ChatShrinkButton handleChatButtonShrink={handleChatButtonShrink} />
        </span>
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
      className="flex items-center justify-between rounded-t-lg border-b bg-blue-800 p-4 text-white text-center content-center"
      id="promo-chat-header-container"
    >
      <p className="text-lg font-semibold pb-2" id="promo-chat-header-text">
        {`💬 Chatting with ${agentName}`}
        <BetaPill supportEmail={supportEmail} />
      </p>
      <span className="">
        <span className="mr-2">
          <ChatExpandButton handleChatButtonExpand={handleChatButtonExpand} />
        </span>
        <ChatCloseButton handleChatButtonClose={handleChatButtonClose} />
      </span>
    </div>
  );
}
