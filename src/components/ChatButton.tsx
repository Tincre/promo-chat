/* Copyright Tincre (Musicfox, Inc)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import React, {
  Dispatch,
  SetStateAction,
  MutableRefObject,
  KeyboardEvent,
  ReactNode,
} from 'react';

export type ChatButtonProps = {
  agentName: string;
  setIsPromoChatButtonClicked: Dispatch<SetStateAction<boolean>>;
  userInputRef: MutableRefObject<HTMLInputElement | null>;
  handleChatButtonEnter: (event: KeyboardEvent<HTMLButtonElement>) => void;
  children: ReactNode;
};
export function ChatButton({
  agentName,
  setIsPromoChatButtonClicked,
  userInputRef,
  handleChatButtonEnter,
  children,
}: ChatButtonProps) {
  return (
    <button
      id="promo-chat-button-not-clicked"
      tabIndex={1}
      className="fixed bottom-10 right-10 flex h-16 w-16 animate-wave items-center justify-center rounded-full bg-blue-900 text-2xl text-slate-50 shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-800 hover:shadow-xl dark:bg-blue-100 dark:text-blue-900 hover:dark:bg-blue-200 z-[90]"
      title={`Chat with ${agentName}`}
      onClick={() => {
        setIsPromoChatButtonClicked(true);
        userInputRef.current?.focus();
      }}
      onKeyDown={handleChatButtonEnter}
    >
      {children}
    </button>
  );
}
