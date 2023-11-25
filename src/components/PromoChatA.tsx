/* Copyright Tincre (Musicfox, Inc)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import React, { ReactNode } from 'react';

export type PromoChatA = {
  children?: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
};

export function PromoChatA({ children, ...props }: PromoChatA) {
  return <a {...props}>{children}</a>;
}
