import React from 'react';
import { render, screen } from '@testing-library/react';
import { PromoChatA } from '../../src/components/PromoChatA'; // Adjust the import based on your file structure

describe('PromoChatA', () => {
  it('renders the component with props and children', () => {
    const linkText = 'Click me';
    const className = 'custom-class';
    const target = '_blank';
    const rel = 'noopener noreferrer';

    render(
      <PromoChatA className={className} target={target} rel={rel}>
        {linkText}
      </PromoChatA>
    );

    const link = screen.getByText(linkText);

    // Check if the link is in the document
    expect(link).toBeDefined();
  });
});
