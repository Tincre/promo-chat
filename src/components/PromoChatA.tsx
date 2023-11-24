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
