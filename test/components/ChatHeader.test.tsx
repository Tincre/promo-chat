import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import {
  ChatHeaderExpanded,
  ChatHeader,
} from '../../src/components/ChatHeader'; // Adjust the import path as necessary

describe('ChatHeaderExpanded', () => {
  it('renders correctly and responds to button clicks', () => {
    const mockHandleChatButtonShrink = jest.fn();
    const mockHandleChatButtonClose = jest.fn();
    const agentName = 'Agent Smith';
    const supportEmail = 'support@email.com';

    render(
      <ChatHeaderExpanded
        agentName={agentName}
        supportEmail={supportEmail}
        handleChatButtonShrink={mockHandleChatButtonShrink}
        handleChatButtonClose={mockHandleChatButtonClose}
      />
    );

    // Verify text content
    expect(screen.getByText(`💬 Chatting with ${agentName}`)).toBeDefined();

    // Simulate button clicks
    fireEvent.click(screen.getAllByRole('button')[0]); // Adjust if you have a specific test id or use another query
    fireEvent.click(screen.getAllByRole('button')[1]); // Adjust accordingly

    // Verify button click handlers were called
    expect(mockHandleChatButtonShrink).toHaveBeenCalledTimes(1);
    expect(mockHandleChatButtonClose).toHaveBeenCalledTimes(1);
  });
});

describe('ChatHeader', () => {
  it('renders correctly and responds to button clicks', () => {
    const mockHandleChatButtonExpand = jest.fn();
    const mockHandleChatButtonClose = jest.fn();
    const agentName = 'Agent Smith';

    render(
      <ChatHeader
        agentName={agentName}
        handleChatButtonExpand={mockHandleChatButtonExpand}
        handleChatButtonClose={mockHandleChatButtonClose}
      />
    );

    // Verify text content
    expect(screen.getByText(`💬 Chatting with ${agentName}`)).toBeDefined();

    // Simulate button clicks
    fireEvent.click(screen.getAllByRole('button')[0]); // Adjust if you have a specific test id or use another query
    fireEvent.click(screen.getAllByRole('button')[1]); // Adjust accordingly
    // Verify button click handlers were called
    expect(mockHandleChatButtonExpand).toHaveBeenCalledTimes(1);
    expect(mockHandleChatButtonClose).toHaveBeenCalledTimes(1);
  });
});
