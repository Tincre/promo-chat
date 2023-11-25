import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { ChatExpandButton } from '../../src/components/ChatExpandButton'; // adjust the import based on your file structure

describe('ChatExpandButton', () => {
  it('renders the button and responds to click events', () => {
    const mockHandleChatButtonExpand = jest.fn();

    render(
      <ChatExpandButton handleChatButtonExpand={mockHandleChatButtonExpand} />
    );

    const button = screen.getByRole('button');
    expect(button).toBeDefined();

    // Simulate a click event
    fireEvent.click(button);

    // Expect the mock function to have been called once
    expect(mockHandleChatButtonExpand).toHaveBeenCalledTimes(1);
  });
});
