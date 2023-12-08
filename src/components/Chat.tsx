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
  Fragment,
} from 'react';
import {
  CampaignData,
  DownloadableCampaignStats,
  DownloadableCampaignMetadataSample,
  CampaignSortedData,
} from '@tincre/promo-types';
import { Transition } from '@headlessui/react';
import { Messages, MessageType } from './Messages';
import { ChatButton } from './ChatButton';
import { ChatHeader, ChatHeaderExpanded } from './ChatHeader';
import { SubmitButton } from './SubmitButton';
import {
  ChatInputContainer,
  ChatInputContainerExpanded,
} from './ChatInputContainer';

type ChatProps = {
  promoData?:
    | CampaignData
    | DownloadableCampaignStats
    | DownloadableCampaignMetadataSample
    | DownloadableCampaignMetadataSample[]
    | CampaignSortedData
    | CampaignSortedData[];
  apiRoute?: string;
  startingAgentMessage?: string;
  agentName?: string;
  inputMessagePlaceholder?: string;
  executeRecaptcha?: (action: string) => Promise<string>;
  supportEmail?: string;
};

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
export function Chat({
  promoData,
  apiRoute = '/api/chat',
  startingAgentMessage = '👋 What can I help you with?',
  agentName = 'Sym',
  inputMessagePlaceholder = 'How do I run ads?',
  executeRecaptcha = undefined,
  supportEmail = undefined,
}: ChatProps) {
  const [isPromoChatButtonClicked, setIsPromoChatButtonClicked] =
    useState(false);
  const [isPromoChatExpandButtonClicked, setIsPromoChatExpandButtonClicked] =
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
  const [responseError, setResponseError] = useState<string | undefined>(
    undefined
  );
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
      let token;
      if (typeof executeRecaptcha === 'function') {
        token = await executeRecaptcha('chat_submit');
      }
      const response = await fetch(apiRoute, {
        method: 'POST',
        body: JSON.stringify({
          message: latestMessage,
          promoData: promoData || {},
          userId: userId,
          token,
        }),
        headers: { 'Content-type': 'application/json' },
      });
      const responseData = await response.json();
      setResponseError(responseData?.error);
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
  const handleChatButtonClose = async (
    event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
  ) => {
    setIsPromoChatExpandButtonClicked(false);
    setIsPromoChatButtonClicked(false);
  };

  const handleChatButtonExpand = async (event: any) => {
    setIsPromoChatExpandButtonClicked(!isPromoChatExpandButtonClicked);
  };
  const handleCloseChatWindowEscape = async (
    event: KeyboardEvent<HTMLDivElement>
  ) => {
    if (event.key === 'Escape') {
      setIsPromoChatExpandButtonClicked(false);
      setIsPromoChatButtonClicked(false);
    }
  };
  return (
    <>
      {!isPromoChatExpandButtonClicked ? (
        <ChatButton
          agentName={agentName}
          setIsPromoChatButtonClicked={setIsPromoChatButtonClicked}
          userInputRef={userInputRef}
          handleChatButtonEnter={handleChatButtonEnter}
        >
          👋
        </ChatButton>
      ) : null}

      <Transition
        show={isPromoChatButtonClicked}
        as="span"
        enter="transition-opacity duration-150"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        onKeyDown={handleCloseChatWindowEscape}
      >
        {!isPromoChatExpandButtonClicked ? (
          <div
            id="promo-chat-container"
            className="fixed bottom-0 w-full select-none sm:bottom-6 sm:right-6 sm:w-96 z-[100]"
          >
            <div
              className="w-full max-w-lg rounded-lg bg-white shadow-md dark:bg-slate-800"
              id="promo-chat-window-container"
            >
              <ChatHeader
                agentName={agentName}
                supportEmail={supportEmail}
                handleChatButtonExpand={handleChatButtonExpand}
                handleChatButtonClose={handleChatButtonClose}
              />
              <div
                className="h-80 overflow-y-auto p-4"
                id="promo-chat-latest-messages"
              >
                <Messages
                  latestMessages={latestMessages}
                  responseError={responseError}
                />
                <div ref={messagesEndRef} />
              </div>
              <div
                className="flex flex-col items-center border-t px-3 py-4 sm:flex-row dark:border-slate-600"
                id="promo-chat-input-container"
              >
                <ChatInputContainer
                  latestMessage={latestMessage}
                  userInputRef={userInputRef}
                  inputMessagePlaceholder={
                    !promoData
                      ? inputMessagePlaceholder
                      : inputMessagePlaceholder || 'How are my ads doing today?'
                  }
                  handleInputChange={handleInputChange}
                  handleInputEnter={handleInputEnter}
                />
                <SubmitButton
                  handleChatSubmit={handleChatSubmit}
                  submitButtonRef={submitButtonRef}
                />
              </div>
            </div>
          </div>
        ) : (
          <div
            id="promo-chat-container-expanded"
            className="fixed bottom-0 w-screen h-full z-[100] p-4"
          >
            <div
              className="w-full min-w-xl h-full rounded-lg bg-white shadow-md dark:bg-slate-800 relative"
              id="promo-chat-window-container-expanded"
            >
              <ChatHeaderExpanded
                agentName={agentName}
                supportEmail={supportEmail}
                handleChatButtonShrink={handleChatButtonExpand}
                handleChatButtonClose={handleChatButtonClose}
              />

              <div className="p-2" id="promo-chat-latest-messages-expanded">
                <Messages
                  latestMessages={latestMessages}
                  responseError={responseError}
                />
                <div ref={messagesEndRef} />
              </div>
              <div
                className="absolute flex flex-col sm:flex-row items-center border-t px-3 py-4 dark:border-slate-600 inset-x-0 bottom-0"
                id="promo-chat-input-container"
              >
                <ChatInputContainerExpanded
                  latestMessage={latestMessage}
                  userInputRef={userInputRef}
                  inputMessagePlaceholder={
                    !promoData
                      ? inputMessagePlaceholder
                      : inputMessagePlaceholder || 'How are my ads doing today?'
                  }
                  handleInputChange={handleInputChange}
                  handleInputEnter={handleInputEnter}
                />
                <SubmitButton
                  handleChatSubmit={handleChatSubmit}
                  submitButtonRef={submitButtonRef}
                />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
}
