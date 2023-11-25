import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { ChatShrinkButton } from '../../src/components/ChatShrinkButton'; // adjust the import based on your file structure

describe('ChatShrinkButton', () => {
  it('renders the button and responds to click events', () => {
    const mockHandleChatButtonShrink = jest.fn();

    render(
      <ChatShrinkButton handleChatButtonShrink={mockHandleChatButtonShrink} />
    );

    const button = screen.getByRole('button');
    expect(button).toBeDefined();

    // Simulate a click event
    fireEvent.click(button);

    // Expect the mock function to have been called once
    expect(mockHandleChatButtonShrink).toHaveBeenCalledTimes(1);
  });
});
