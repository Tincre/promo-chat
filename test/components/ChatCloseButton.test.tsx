import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { ChatCloseButton } from '../../src/components/ChatCloseButton'; // adjust the import based on your file structure

describe('ChatCloseButton', () => {
  it('renders the button and responds to click events', () => {
    const mockHandleChatButtonClose = jest.fn();

    render(
      <ChatCloseButton handleChatButtonClose={mockHandleChatButtonClose} />
    );

    const button = screen.getByRole('button');
    expect(button).toBeDefined();

    // Simulate a click event
    fireEvent.click(button);

    // Expect the mock function to have been called once
    expect(mockHandleChatButtonClose).toHaveBeenCalledTimes(1);
  });
});
