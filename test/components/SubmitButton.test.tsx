import React, { createRef } from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { SubmitButton } from '../../src/components/SubmitButton'; // Adjust the import path as necessary

describe('SubmitButton', () => {
  it('renders the button with children and handles click events', () => {
    const mockHandleChatSubmit = jest.fn();
    const submitButtonRef = createRef<HTMLButtonElement>();

    render(
      <SubmitButton
        handleChatSubmit={mockHandleChatSubmit}
        submitButtonRef={submitButtonRef}
      >
        Submit
      </SubmitButton>
    );

    const button = screen.getByRole('button', { name: 'Submit' });

    // Check if the button is in the document
    expect(button).toBeDefined();

    // Check if the ref is attached to the button
    expect(submitButtonRef.current).toBe(button);

    // Simulate a click event
    fireEvent.click(button);

    // Expect the mock function to have been called once
    expect(mockHandleChatSubmit).toHaveBeenCalledTimes(1);
  });

  it('renders with default children when none are provided', () => {
    const mockHandleChatSubmit = jest.fn();
    const submitButtonRef = createRef<HTMLButtonElement>();

    render(
      <SubmitButton
        handleChatSubmit={mockHandleChatSubmit}
        submitButtonRef={submitButtonRef}
      />
    );

    // The default text should be 'Submit'
    expect(screen.getByRole('button', { name: 'Submit' })).toBeDefined();
  });
});
