import React from 'react';
import { addDataToMessage } from '../../src/lib/prompts';

describe('addDataToMessage', () => {
  it('returns a string with the included data', async () => {
    const prePrompt = 'prePrompt';
    const postPrompt = 'postPrompt';
    const smartPlanPricing = 10;
    const proPlanPricing = 9;
    const baseMessage = 'Test message';
    const testMessage = await addDataToMessage(
      baseMessage,
      prePrompt,
      postPrompt,
      smartPlanPricing,
      proPlanPricing
    );
    expect(testMessage).toContain(baseMessage);
    expect(testMessage).toContain(prePrompt);
    expect(testMessage).toContain(postPrompt);
    expect(testMessage).toContain(smartPlanPricing.toString());
    expect(testMessage).toContain(proPlanPricing.toString());
  });
});
