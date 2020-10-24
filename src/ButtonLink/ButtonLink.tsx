import React, { ReactElement } from 'react';
import { ButtonLinkProps } from './ButtonLink.interface';
import styles from './ButtonLink.module.scss';

function ButtonLink({
  linkType,
  linkValue,
  children,
}: ButtonLinkProps): ReactElement {
  const link = linkType ? `${linkType}:${linkValue}` : linkValue;
  return (
    <a href={link} className={styles.buttonLink}>
      {children}
    </a>
  );
}

export default ButtonLink;
