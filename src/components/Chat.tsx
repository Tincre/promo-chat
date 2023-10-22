/* Copyright Tincre (Musicfox, Inc)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import {
  MouseEvent,
  ChangeEvent,
  KeyboardEvent,
  useState,
  useRef,
  useEffect,
} from 'react';
import { CampaignData, DownloadableCampaignStats } from '../lib/types';
import { Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { Messages, MessageType } from './Messages';

type ChatProps = {
  promoData?: CampaignData | DownloadableCampaignStats;
  apiRoute?: string;
  startingAgentMessage?: string;
  agentName?: string;
  inputMessagePlaceholder?: string;
};
export function Chat({
  promoData,
  apiRoute = '/api/chat',
  startingAgentMessage = '👋 What can I help you with?',
  agentName = 'Sym',
  inputMessagePlaceholder = 'How do I run ads?',
}: ChatProps) {
  const [isPromoChatButtonClicked, setIsPromoChatButtonClicked] =
    useState(false);
  const [latestMessages, setLatestMessages] = useState<MessageType[]>([
    { message: startingAgentMessage, role: 'assistant' },
  ]);
  const [latestMessage, setLatestMessage] = useState<string | undefined>(
    undefined
  );
  const [latestResponse, setLatestResponse] = useState<string | undefined>(
    undefined
  );
  const [wasSubmitButtonClicked, setWasSubmitButtonClicked] = useState(false);
  const [isWaitingOnResponse, setIsWaitingOnResponse] = useState(false);
  const [userId, setUserId] = useState<string | undefined>(undefined);
  const submitButtonRef = useRef<HTMLButtonElement | null>(null);
  const userInputRef = useRef<HTMLInputElement | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    setLatestMessage('');
  }, [latestMessages]);
  useEffect(() => {
    if (latestMessage && wasSubmitButtonClicked) {
      setLatestMessages([
        ...latestMessages,
        {
          message: latestMessage,
          role: 'user',
        },
      ]);
    }
  }, [latestMessage, wasSubmitButtonClicked]);

  useEffect(() => {
    if (isWaitingOnResponse) {
      setWasSubmitButtonClicked(false);
    }
  }, [isWaitingOnResponse]);
  useEffect(() => {
    if (!isWaitingOnResponse && latestResponse) {
      setLatestMessages([
        ...latestMessages,
        {
          role: 'assistant',
          message: latestResponse,
        },
      ]);
    }
    if (isWaitingOnResponse && latestResponse) {
      userInputRef.current?.focus();
    }
  }, [latestResponse, isWaitingOnResponse]);
  useEffect(() => {
    if (isPromoChatButtonClicked === true) userInputRef.current?.focus();
  }, [isPromoChatButtonClicked]);
  /**
   * @description Handle the chat 'submit' button press or click. This function
   * generally sets a waiting response flag so that the UI can update to
   * demonstrate that the event was received and we're waiting for a
   * response.
   *
   * In addition, this function calls the actual backend at the given `apiRoute`
   * prop value with a POST request and body payload
   * `{ message: '', userId: '' }`.
   * Lastly, this function resets the `latestValue` internal state prop
   * which the UI uses to display prior to users seeing their input text.
   *
   * @param {MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLInputElement>} event from the onClick prop
   *
   * @returns void
   */
  const handleChatSubmit = async (
    event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLInputElement>
  ) => {
    try {
      setWasSubmitButtonClicked(true);
      submitButtonRef.current?.blur();
      userInputRef.current?.blur();
      setIsWaitingOnResponse(true);
      const response = await fetch(apiRoute, {
        method: 'POST',
        body: JSON.stringify({
          message: latestMessage,
          promoData: promoData || {},
          userId: userId,
        }),
        headers: { 'Content-type': 'application/json' },
      });
      const responseData = await response.json();
      setLatestResponse(responseData?.message);
      setUserId(responseData?.userId);
      setIsWaitingOnResponse(false);
      userInputRef.current?.focus();
    } catch (error) {
      console.error(error);
    }
  };
  /**
   * @description A handler for the user input text field.
   *
   * @param {ChangeEvent<HTMLInputElement>} event the input change event
   *
   * @returns void
   */
  const handleInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    console.log(`handleInputChange::event fired`);
    setLatestMessage(event.target.value);
  };
  /**
   * @description A handler for the user input enter key press on the input
   * field.
   *
   * @param {KeyboardEvent<HTMLInputElement>} event the input keyboard 'Enter'
   * press.
   *
   * @returns void
   */
  const handleInputEnter = async (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleChatSubmit(event);
    }
  };
  const handleChatButtonEnter = async (
    event: KeyboardEvent<HTMLButtonElement>
  ) => {
    if (event.key === 'Enter') {
      setIsPromoChatButtonClicked(true);
      userInputRef.current?.focus();
    }
  };
  const handleCloseChatWindowEscape = async (
    event: KeyboardEvent<HTMLDivElement>
  ) => {
    if (event.key === 'Escape') {
      setIsPromoChatButtonClicked(false);
    }
  };
  return (
    <>
      <button
        tabIndex={1}
        className="fixed bottom-10 right-10 flex h-16 w-16 animate-wave items-center justify-center rounded-full bg-blue-900 text-2xl text-slate-50 shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-800 hover:shadow-xl dark:bg-blue-100 dark:text-blue-900 hover:dark:bg-blue-200 z-90"
        title={`Chat with ${agentName}`}
        onClick={() => {
          setIsPromoChatButtonClicked(true);
          userInputRef.current?.focus();
        }}
        onKeyDown={handleChatButtonEnter}
      >
        👋
      </button>
      <Transition
        show={isPromoChatButtonClicked}
        as="div"
        id="promo-chat-container"
        className="fixed bottom-0 w-full select-none sm:bottom-6 sm:right-6 sm:w-96 z-90"
        enter="transition-opacity duration-150"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        onKeyDown={handleCloseChatWindowEscape}
      >
        <div className="w-full max-w-lg rounded-lg bg-white shadow-md">
          <div className="flex items-center justify-between rounded-t-lg border-b bg-blue-800 p-4 text-white">
            <p className="text-lg font-semibold">{`💬 Chatting with ${agentName}`}</p>
            <button
              id="close-chat"
              className="text-blue-50 hover:text-blue-200 focus:text-blue-200 focus:outline-blue-200 focus:ring-2 focus:ring-inset focus:ring-blue-200 z-90"
              tabIndex={4}
              onClick={() => setIsPromoChatButtonClicked(false)}
            >
              <XMarkIcon className="h-6 w-6 text-blue-50 hover:text-blue-200 focus:text-blue-200 focus:outline-none z-90" />
            </button>
          </div>
          <div id="chatbox" className="h-80 overflow-y-auto p-4">
            <Messages latestMessages={latestMessages} />
            <div ref={messagesEndRef} />
          </div>
          <div className="flex flex-col items-center border-t px-3 py-4 sm:flex-row">
            <div className="w-full sm:max-w-xs">
              <label htmlFor="text-input" className="sr-only">
                Text input
              </label>
              <input
                tabIndex={2}
                type="text"
                name="text-input"
                autoFocus={true}
                ref={userInputRef}
                id="text-input"
                value={latestMessage}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                placeholder={
                  !promoData
                    ? inputMessagePlaceholder
                    : inputMessagePlaceholder || 'How are my ads doing today?'
                }
                onChange={handleInputChange}
                onKeyDown={handleInputEnter}
              />
            </div>
            <button
              tabIndex={3}
              type="button"
              ref={submitButtonRef}
              onClick={handleChatSubmit}
              className="mt-3 w-full items-center justify-center rounded-md bg-blue-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:ml-3 sm:mt-0 sm:w-auto sm:flex-row"
            >
              Submit
            </button>
          </div>
        </div>
      </Transition>
    </>
  );
}
