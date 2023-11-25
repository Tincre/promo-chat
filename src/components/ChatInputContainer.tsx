import React, { MutableRefObject, ChangeEvent, KeyboardEvent } from 'react';
export type ChatInputContainerProps = {
  latestMessage?: string;
  userInputRef: MutableRefObject<HTMLInputElement | null>;
  inputMessagePlaceholder?: string;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleInputEnter: (event: KeyboardEvent<HTMLInputElement>) => void;
};
export function ChatInputContainerExpanded({
  latestMessage,
  userInputRef,
  inputMessagePlaceholder,
  handleInputChange,
  handleInputEnter,
}: ChatInputContainerProps) {
  return (
    <div className="w-full sm:max-w-xs" id="promo-chat-input-only-container">
      <label htmlFor="text-input" className="sr-only">
        Text input
      </label>
      <input
        tabIndex={2}
        type="text"
        name="text-input"
        autoFocus={true}
        ref={userInputRef}
        id="promo-chat-text-input-expanded"
        value={latestMessage}
        className="inline-flex w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
        placeholder={inputMessagePlaceholder}
        onChange={handleInputChange}
        onKeyDown={handleInputEnter}
      />
    </div>
  );
}
export function ChatInputContainer({
  latestMessage,
  userInputRef,
  inputMessagePlaceholder,
  handleInputChange,
  handleInputEnter,
}: ChatInputContainerProps) {
  return (
    <div className="w-full sm:max-w-xs" id="promo-chat-input-only-container">
      <label htmlFor="text-input" className="sr-only">
        Text input
      </label>
      <input
        tabIndex={2}
        type="text"
        name="text-input"
        autoFocus={true}
        ref={userInputRef}
        id="promo-chat-text-input"
        value={latestMessage}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
        placeholder={inputMessagePlaceholder}
        onChange={handleInputChange}
        onKeyDown={handleInputEnter}
      />
    </div>
  );
}
