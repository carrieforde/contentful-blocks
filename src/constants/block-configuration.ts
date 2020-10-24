import { ReactNode } from 'react';
import ContactCard from '../ContactCard/ContactCard';
import OfferDetailsCard from '../OfferDetailsCard/OfferDetailsCard';

export const BLOCK_CONFIG: { [key: string]: ReactNode } = {
  blockOfferDetailsCard: OfferDetailsCard,
  blockContactCard: ContactCard,
};
