import { ReactNode } from 'react';

export interface ButtonLinkProps {
  linkType?: 'tel' | 'mailto';
  linkValue: string;
  children: ReactNode;
}
