import React, { createRef } from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import {
  ChatInputContainerExpanded,
  ChatInputContainer,
} from '../../src/components/ChatInputContainer'; // Adjust the import path as necessary

describe('ChatInputContainerExpanded', () => {
  it('renders correctly and responds to input events', () => {
    const mockHandleInputChange = jest.fn();
    const mockHandleInputEnter = jest.fn();
    const userInputRef = createRef<HTMLInputElement>();
    const latestMessage = 'Hello!';
    const inputMessagePlaceholder = 'Type a message';

    render(
      <ChatInputContainerExpanded
        latestMessage={latestMessage}
        userInputRef={userInputRef}
        inputMessagePlaceholder={inputMessagePlaceholder}
        handleInputChange={mockHandleInputChange}
        handleInputEnter={mockHandleInputEnter}
      />
    );

    const input = screen.getByPlaceholderText(inputMessagePlaceholder);

    // Simulate user typing in the input
    fireEvent.change(input, { target: { value: 'New message' } });

    // Simulate user pressing a key (e.g., Enter)
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    // Verify that the handlers are called
    expect(mockHandleInputChange).toHaveBeenCalledTimes(1);
    expect(mockHandleInputEnter).toHaveBeenCalledTimes(1);
  });
});

describe('ChatInputContainer', () => {
  it('renders correctly and responds to input events', () => {
    const mockHandleInputChange = jest.fn();
    const mockHandleInputEnter = jest.fn();
    const userInputRef = createRef<HTMLInputElement>();
    const latestMessage = 'Hello!';
    const inputMessagePlaceholder = 'Type a message';

    render(
      <ChatInputContainer
        latestMessage={latestMessage}
        userInputRef={userInputRef}
        inputMessagePlaceholder={inputMessagePlaceholder}
        handleInputChange={mockHandleInputChange}
        handleInputEnter={mockHandleInputEnter}
      />
    );

    const input = screen.getByPlaceholderText(inputMessagePlaceholder);

    // Simulate user typing in the input
    fireEvent.change(input, { target: { value: 'New message' } });

    // Simulate user pressing a key (e.g., Enter)
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    // Verify that the handlers are called
    expect(mockHandleInputChange).toHaveBeenCalledTimes(1);
    expect(mockHandleInputEnter).toHaveBeenCalledTimes(1);
  });
});
