import React, { ReactElement } from 'react';
import { OfferDetailsCardProps } from './OfferDetailsCard.interface';
import styles from './OfferDetailsCard.module.scss';

function OfferDetailsCard({
  offer,
  productBenefit,
  productNameMapping,
}: OfferDetailsCardProps): ReactElement {
  const {
    product_name,
    monthly_payment,
    qualification_data,
    loan_amount,
    apr,
  } = offer;
  const { monthly_savings_amount } = qualification_data;
  // const { productBenefit } = content;

  const details = [
    {
      key: 'monthly_payment',
      label: 'Est. Monthly Payment',
      value: monthly_payment,
    },
    {
      key: 'monthly_savings',
      label: 'Est. Monthly Savings<sup>1</sup>',
      value: monthly_savings_amount,
    },
    {
      key: 'loan_amount',
      label: 'Loan Amount<sup>2</sup>',
      value: loan_amount,
    },
    {
      key: 'apr',
      label: 'Est. APR<sup>3</sup>',
      value: apr,
    },
  ];

  return (
    <div className={`bg-light ${styles.card}`}>
      <h3 className={styles.card_title}>
        {productNameMapping[product_name] || product_name}
      </h3>

      <p className={styles.card_benefit}>{productBenefit}</p>

      <ul className={`list-reset ${styles.card_details}`}>
        {details.map((detail) => (
          <li
            key={detail.key}
            className={`${styles.card_detail} ${detail.key}`}
          >
            <span className={`text-gray-dark ${styles.card_detail__label}`}>
              {detail.label}
            </span>
            <span className="card_detail__value">{detail.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OfferDetailsCard;
