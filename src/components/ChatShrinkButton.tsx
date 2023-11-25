/* Copyright Tincre (Musicfox, Inc)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import React, { MouseEvent, KeyboardEvent } from 'react';
import { ArrowsPointingInIcon } from '@heroicons/react/24/solid';

export type ChatShrinkButtonProps = {
  handleChatButtonShrink: (
    event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
  ) => void;
};
export function ChatShrinkButton({
  handleChatButtonShrink,
}: ChatShrinkButtonProps) {
  return (
    <button
      id="promo-chat-shrink-button"
      className=""
      tabIndex={5}
      onClick={handleChatButtonShrink}
    >
      <ArrowsPointingInIcon
        className="h-6 w-6 text-blue-50 hover:text-blue-200 focus:text-blue-200 focus:outline-none z-[100]"
        id="promo-chat-shrink-button-icon"
      />
    </button>
  );
}
