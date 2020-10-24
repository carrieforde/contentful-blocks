export interface OfferDetailsCardProps {
  offer: {
    apr: number;
    loan_amount: number;
    monthly_payment: number;
    product_name: string; // get enums
    rate: number;
    qualification_data: {
      ach: boolean;
      cltv_percent: number;
      eligible_debt_amount: number;
      eligible_debt_mpa_amount: number;
      equity: number;
      fico: number;
      installment_balance: number;
      loan_amount: number;
      max_cashout_amount: number;
      max_eligible_loan: number;
      min_debt_amount: number;
      monthly_savings_amount: number;
      mortgage_balance: number;
      mortgage_count: number;
      product_line: string; // get enums
      property_state: string; // create enum for state (two-letter abbr.)
      property_type: string; // get enums
      property_value: number;
      qualifying_equity: number;
      revolving_balance: number;
    };
  };
  blockTitle: string;
  productNameMapping: { [key: string]: string };
  productBenefit: string;
}
