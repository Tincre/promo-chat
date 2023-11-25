import React, { MouseEvent, KeyboardEvent } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

export type ChatCloseButtonProps = {
  handleChatButtonClose: (
    event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
  ) => void;
};
export function ChatCloseButton({
  handleChatButtonClose,
}: ChatCloseButtonProps) {
  return (
    <button
      id="promo-chat-close-chat-button"
      className="text-blue-50 hover:text-blue-200 focus:text-blue-200 focus:outline-blue-200 focus:ring-2 focus:ring-inset focus:ring-blue-200 z-[100]"
      tabIndex={4}
      onClick={handleChatButtonClose}
    >
      <XMarkIcon
        className="h-6 w-6 text-blue-50 hover:text-blue-200 focus:text-blue-200 focus:outline-none z-[100]"
        id="promo-chat-close-chat-icon"
      />
    </button>
  );
}
