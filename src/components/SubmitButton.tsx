/* Copyright Tincre (Musicfox, Inc)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import React, {
  MouseEvent,
  KeyboardEvent,
  MutableRefObject,
  ReactNode,
} from 'react';
export type SubmitButtonProps = {
  handleChatSubmit: (
    event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLInputElement>
  ) => void;
  submitButtonRef: MutableRefObject<HTMLButtonElement | null>;
  children?: ReactNode;
};
export function SubmitButton({
  handleChatSubmit,
  submitButtonRef,
  children,
}: SubmitButtonProps) {
  return (
    <button
      tabIndex={3}
      type="button"
      ref={submitButtonRef}
      onClick={handleChatSubmit}
      className="mt-3 w-full items-center justify-center rounded-md bg-blue-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:ml-3 sm:mt-0 sm:w-auto sm:flex-row"
      id="promo-chat-input-submit-button"
    >
      {children || 'Submit'}
    </button>
  );
}
