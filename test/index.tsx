import React from 'react';
import { screen, fireEvent, render } from '@testing-library/react';
import { PromoChat } from '../src/index';
import { testPromoApiCampaignData } from './cms.data';
jest.mock('next-recaptcha-v3', () => ({
  useRecaptcha: jest.fn(),
}));
describe('Chat', () => {
  it('renders without crashing and single campaign data', () => {
    render(<PromoChat promoData={testPromoApiCampaignData[0]} />);
    const chatButton = screen.getByRole('button');
    expect(chatButton).toBeDefined();
    fireEvent.click(chatButton);
    expect(chatButton).toBeDefined();
  });
});
