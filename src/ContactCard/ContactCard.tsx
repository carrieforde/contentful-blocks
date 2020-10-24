import React, { ReactElement } from 'react';
import ButtonLink from '../ButtonLink/ButtonLink';
import { ContactCardProps } from './ContactCard.interface';

function ContactCard({
  businessHours,
  cardHeading,
  contactNumber,
}: ContactCardProps): ReactElement {
  return (
    <div className="contact-card">
      <h3>{cardHeading}</h3>
      <p>
        <ButtonLink linkValue={contactNumber} linkType="tel">
          {contactNumber}
        </ButtonLink>
      </p>
      <p>{businessHours}</p>
    </div>
  );
}

export default ContactCard;
