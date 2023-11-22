/* Copyright Tincre (Musicfox, Inc)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import Markdown from 'markdown-to-jsx';

export type MessagesProps = {
  latestMessages: MessageType[];
  responseError?: string;
};
export type MessageType = {
  message: string;
  role: 'assistant' | 'system' | 'user';
};

export function Messages({ latestMessages, responseError }: MessagesProps) {
  return (
    <>
      {latestMessages.map((messagePackage, index) => {
        const { message, role } = messagePackage;
        return role === 'user' ? (
          <div
            key={`user-message-${index}`}
            className="mb-2 text-right"
            id={`promo-chat-user-message-${index}`}
          >
            <p
              id="promo-chat-user-message-display"
              className="inline-block rounded-lg bg-blue-700 px-4 py-2 text-white select-all"
            >
              <Markdown>{message}</Markdown>
            </p>
          </div>
        ) : (
          <div
            key={`assistant-message-${index}`}
            className="mb-2"
            id={`promo-chat-assistant-message-${index}`}
          >
            <p
              id="promo-chat-assistant-message-display"
              className="inline-block rounded-lg bg-gray-200 px-4 py-2 text-gray-700 select-all"
            >
              <Markdown>{message}</Markdown>
            </p>
          </div>
        );
      })}
      <>
        {typeof responseError !== 'undefined' ? (
          <div
            key={`error-message`}
            className="mb-2 text-right"
            id={`promo-chat-error-message`}
          >
            <p
              id="promo-chat-error-message-display"
              className="inline-block rounded-lg bg-blue-700 px-4 py-2 text-white select-all"
            >
              <Markdown>{`⚠️ ${responseError} ⚠️`}</Markdown>
            </p>
          </div>
        ) : null}
      </>
    </>
  );
}
