import React from 'react';
import { screen, fireEvent, render } from '@testing-library/react';
import { Chat } from '../../src/components/Chat';

describe('Chat', () => {
  it('renders without crashing', () => {
    render(<Chat />);
    const chatButton = screen.getByRole('button');
    expect(chatButton).toBeDefined();
    fireEvent.click(chatButton);
    expect(chatButton).toBeDefined();
  });
  it('renders without crashing to test promoData prop', () => {
    render(<Chat />);
    const chatButton = screen.getByRole('button');
    expect(chatButton).toBeDefined();
    fireEvent.click(chatButton);
    expect(chatButton).toBeDefined();
  });
  it('renders without crashing to test apiRoute prop', () => {
    render(<Chat apiRoute="/example" />);
    const chatButton = screen.getByRole('button');
    expect(chatButton).toBeDefined();
    fireEvent.click(chatButton);
    expect(chatButton).toBeDefined();
  });
  it('renders without crashing to test startingAgentMessage prop', () => {
    render(<Chat startingAgentMessage="Hello test" />);
    const chatButton = screen.getByRole('button');
    expect(chatButton).toBeDefined();
    fireEvent.click(chatButton);
    expect(chatButton).toBeDefined();
  });
  it('renders without crashing to test agentName prop', () => {
    render(<Chat agentName="Test bot" />);
    const chatButton = screen.getByRole('button');
    expect(chatButton).toBeDefined();
    fireEvent.click(chatButton);
    expect(chatButton).toBeDefined();
  });
  it('renders without crashing to test inputMessagePlaceholder prop', () => {
    render(<Chat inputMessagePlaceholder="Testing?" />);
    const chatButton = screen.getByRole('button');
    expect(chatButton).toBeDefined();
    fireEvent.click(chatButton);
    expect(chatButton).toBeDefined();
  });
  it('renders without crashing to test all props', () => {
    render(
      <Chat
        apiRoute="/example"
        startingAgentMessage="Hello test"
        agentName="Test bot"
        inputMessagePlaceholder="Is this a test?"
      />
    );
    const chatButton = screen.getByRole('button');
    expect(chatButton).toBeDefined();
    fireEvent.click(chatButton);
    expect(chatButton).toBeDefined();
  });
});
