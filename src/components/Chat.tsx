/* Copyright Tincre (Musicfox, Inc)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import React, { useState, useRef, useEffect } from 'react';
import { CampaignData, DownloadableCampaignStats } from '../lib/types';

export function Chat({
  promoData,
  apiRoute = '/api/chat',
  startingAgentMessage = '👋 What can I help you with?',
  agentName = 'Sym',
  inputMessagePlaceholder = 'How do I run ads?',
}: {
  promoData?: CampaignData | DownloadableCampaignStats;
  apiRoute?: string;
  startingAgentMessage?: string;
  agentName?: string;
  inputMessagePlaceholder?: string;
}) {
  const [isPromoChatButtonClicked, setIsPromoChatButtonClicked] =
    useState(false);
  const [latestMessages, setLatestMessages] = useState([
    { message: startingAgentMessage, role: 'assistant' },
  ]);
  const [latestMessage, setLatestMessage] = useState<string | undefined>(
    undefined
  );
  const [latestResponse, setLatestResponse] = useState<string | undefined>(
    undefined
  );
  const [wasSubmitButtonClicked, setWasSubmitButtonClicked] = useState(false);
  const submitButtonRef = useRef(null);
  const [isWaitingOnResponse, setIsWaitingOnResponse] = useState(false);
  const [userId, setUserId] = useState<string | undefined>(undefined);
  useEffect(() => {
    if (typeof latestMessage !== 'undefined' && wasSubmitButtonClicked) {
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
  }, [latestResponse, isWaitingOnResponse]);
  return (
    <>
      <button
        className="fixed bottom-10 right-10 flex h-16 w-16 animate-wave items-center justify-center rounded-full bg-blue-900 text-2xl text-slate-50 shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-800 hover:shadow-xl dark:bg-blue-100 dark:text-blue-900 hover:dark:bg-blue-200"
        title={`Chat with ${agentName}`}
        onClick={() => setIsPromoChatButtonClicked(true)}
      >
        👋
      </button>
      {isPromoChatButtonClicked ? (
        <div
          id="promo-chat-container"
          className="fixed bottom-0 w-full select-none sm:bottom-6 sm:right-6 sm:w-96"
        >
          <div className="w-full max-w-lg rounded-lg bg-white shadow-md">
            <div className="flex items-center justify-between rounded-t-lg border-b bg-blue-800 p-4 text-white">
              <p className="text-lg font-semibold">{`💬 Chatting with ${agentName}`}</p>
              <button
                id="close-chat"
                className="text-blue-50 hover:text-blue-200 focus:text-blue-200 focus:outline-none"
                onClick={() => setIsPromoChatButtonClicked(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div id="chatbox" className="h-80 overflow-y-auto p-4">
              {latestMessages.map((messagePackage, index) => {
                const lastIndex = latestMessages.length - 1;
                const { message, role } = messagePackage;
                return role === 'user' ? (
                  <div
                    key={`user-message-${index}`}
                    className="mb-2 text-right"
                    id={`user-message-${index}`}
                  >
                    <p className="inline-block rounded-lg bg-blue-700 px-4 py-2 text-white">
                      {message}
                    </p>
                  </div>
                ) : (
                  <div
                    key={`assistant-message-${index}`}
                    className="mb-2"
                    id={`assistant-message-${index}`}
                  >
                    <p className="inline-block rounded-lg bg-gray-200 px-4 py-2 text-gray-700">
                      {message}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col items-center border-t px-3 py-4 sm:flex-row">
              <div className="w-full sm:max-w-xs">
                <label htmlFor="text-input" className="sr-only">
                  Text input
                </label>
                <input
                  type="text"
                  name="text-input"
                  id="text-input"
                  value={latestMessage}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  placeholder={
                    !promoData
                      ? inputMessagePlaceholder
                      : inputMessagePlaceholder || 'How are my ads doing today?'
                  }
                  onChange={(event) => {
                    setLatestMessage(event.target.value);
                  }}
                />
              </div>
              <button
                type="button"
                ref={submitButtonRef}
                onClick={async (event) => {
                  try {
                    setWasSubmitButtonClicked(true);
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
                    setLatestMessage('');
                    // @ts-ignore https://github.com/microsoft/TypeScript/issues/11498
                    submitButtonRef.current.blur();
                  } catch (error) {
                    console.error(error);
                  }
                }}
                className="mt-3 w-full items-center justify-center rounded-md bg-blue-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:ml-3 sm:mt-0 sm:w-auto sm:flex-row"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
