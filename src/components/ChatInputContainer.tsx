/* Copyright Tincre (Musicfox, Inc)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

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
    <div className="w-full" id="promo-chat-input-only-container">
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
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-slate-50 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-slate-700 placeholder:text-gray-400 dark:placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:focus:ring-slate-600 sm:text-sm sm:leading-6 dark:bg-slate-900"
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
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 dark:text-slate-50 dark:bg-slate-900 dark:focus:ring-slate-600 dark:ring-slate-700 dark:placeholder:text-slate-400"
        placeholder={inputMessagePlaceholder}
        onChange={handleInputChange}
        onKeyDown={handleInputEnter}
      />
    </div>
  );
}
