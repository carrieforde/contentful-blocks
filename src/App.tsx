import React, { Component } from 'react';
import './App.css';
import { getEntryWithLinks } from './contentful/contentful';
import { Block } from './entities/block.interface';
import Factory from './Factory/Factory';
import OfferDetailsCard from './OfferDetailsCard/OfferDetailsCard';

const offer = {
  apr: 6.5,
  loan_amount: 58614.6,
  monthly_payment: 510.6,
  product_name: 'LENDAGE DEBT CONSOLIDATION+ 15-YEAR FIXED RATE HELOC',
  product_type: 'HELOC',
  rate: 6.5,
  qualification_data: {
    ach: true,
    cltv_percent: 0.2027,
    eligible_debt_amount: 55864,
    eligible_debt_mpa_amount: 4855,
    equity: 722468,
    fico: 840,
    installment_balance: 52042,
    loan_amount: 58614.6,
    max_cashout_amount: 13966,
    max_eligible_loan: 55864,
    min_debt_amount: 10000,
    monthly_savings_amount: 4344.4,
    mortgage_balance: 110200,
    mortgage_count: 1,
    product_line: 'CONSOLIDATION_PLUS',
    property_state: 'CO',
    property_type: 'SFR',
    property_value: 832668,
    qualifying_equity: 555934.4,
    revolving_balance: 3822,
  },
};

class App extends Component {
  state = {
    content: [],
  };

  async componentDidMount() {
    const layoutConfigWithLinks = await getEntryWithLinks(
      '1eNhHkzhS2mJFWNvJyVu5B'
    );

    function getConfig(field: any) {
      if (!field.fields) {
        return;
      }

      if (field.fields.settings) {
        const settings: { [key: string]: string } = {};

        field.fields.settings.forEach((setting: any) => {
          settings[setting.fields.key] = setting.fields.value;
        });

        return settings;
      }
    }

    const blocks = layoutConfigWithLinks.items[0].fields.contentArea3.map(
      (item: any) => {
        Object.keys(item.fields).forEach((subItem: any) => {
          const settings = getConfig(item.fields[subItem]);

          if (settings) {
            item.fields[subItem] = settings;
          }
        });

        return {
          blockName: item.sys.contentType.sys.id,
          blockData: { ...item.fields },
        };
      }
    );

    this.setState({ content: blocks });
  }

  render() {
    if (this.state.content && this.state.content.length > 0) {
      return (
        <>
          {this.state.content.map((block: Block) =>
            Factory({ ...block, ...{ offer } })
          )}
        </>
      );
    }

    return <h1>hi</h1>;
  }
}

export default App;
