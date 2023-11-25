import React, { MouseEvent, KeyboardEvent } from 'react';
import { ArrowsPointingOutIcon } from '@heroicons/react/24/solid';

export type ChatExpandButtonProps = {
  handleChatButtonExpand: (
    event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
  ) => void;
};
export function ChatExpandButton({
  handleChatButtonExpand,
}: ChatExpandButtonProps) {
  return (
    <button
      id="promo-chat-expand-button"
      className=""
      tabIndex={5}
      onClick={handleChatButtonExpand}
    >
      <ArrowsPointingOutIcon
        className="h-6 w-6 text-blue-50 hover:text-blue-200 focus:text-blue-200 focus:outline-none z-[100]"
        id="promo-chat-expand-button-icon"
      />
    </button>
  );
}
