/**
 * @description Add basic Promo data to the prompt message from the user.
 *
 * @param {string} message The prompt message from the user.
 * @param {string} prePromptAddition The prepended data for the prompt.
 * @param {string} postPromptAddition The post-pended data for the prompt.
 * @param {number} smartPlanPricing The whole-number percentage of the
 * smart plan.
 * @param {number} proPlanPricing The whole-number percentage of the the
 * pro plan.
 */
export async function addDataToMessage(
  message: string = '',
  prePromptAddition: string = '',
  postPromptAddition: string = '',
  smartPlanPricing: number,
  proPlanPricing: number
) {
  const returnMessage = `${prePromptAddition} ${
    message || ''
  } Use https://tincre.com Promo for information. Your answer must be less than 140 characters. Run ads by logging into the account and pressing the ads button. It costs ${smartPlanPricing}% for smart plans and ${proPlanPricing}% for pro plans to run ads. All that is required for a campaign is a name for the campaign, a link, the budget, and an image or video. Don't share these ad campaign requirements until asked. Users can pay with inclusive (flat) or fee-additive payment methods but don't send payment information unless asked. Campaigns cannot include adult content, illicit content or pornography. ${postPromptAddition}`;
  return returnMessage;
}
