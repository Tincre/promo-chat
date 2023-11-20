/* Copyright Tincre (Musicfox, Inc)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

type BetaPillProps = {
  supportEmail?: string;
};

function InternalBetaPill() {
  return (
    <span
      id="promo-chat-header-beta-label"
      className="inline-flex items-center justify-start rounded-full bg-gray-100 px-2 py-1 text-xs italic text-gray-600 ml-2 mt-2"
      title="We're trying to make this chat perfect for you so please let us know if you have a suggestion!"
    >
      Beta
    </span>
  );
}
export function BetaPill({ supportEmail = undefined }: BetaPillProps) {
  const mailtoEmail =
    typeof supportEmail !== 'undefined'
      ? `mailto:${supportEmail}?subject=Chat%20feedback&body=Hi!%20I%20have%20feedback%20regarding%20my%20recent%20chat.%0D%0A%0D%0A%3CTell%20us%20in%20detail%20what%20happened%20and%20what%20you'd%20like%20to%20see%20differently%3E`
      : undefined;
  return typeof mailtoEmail === 'undefined' ? (
    <InternalBetaPill />
  ) : (
    <a href={mailtoEmail} target="_blank" rel="noopener noreferrer">
      <InternalBetaPill />
    </a>
  );
}
