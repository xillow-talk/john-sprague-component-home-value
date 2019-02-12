import React from 'react';

var MarketAppreciation = (props) => {
  return (
    <section className='home-details-collapsible-component'>
      <div className='collapsible-content'>
        <div className='last-sale-price-header'>
          This estimate takes the price this home last sold for and adjusts it by the percentage change in market value for that area since that sale.
          <span className='zest-deep-dive-tooltip-text'>
            <a>What affects the accuracy of this estimate?</a>
          </span>
        </div>
        <div className='calculation-section'>
          <h5 className='calculation-header'>How it's calculated</h5>
          <div className='calculation-equation'>
            <div className='calculation-value'>
              $12,232,232
              <span className='calculation-value-data'>Last sale price</span>
              <div className='calculation-value-data'>
                (7/19/2018)
              </div>
            </div>
            <h3 className='calculation-operator'>+</h3>
            <div className='calculation-value'>
              17.3%
              <span className='calculation-value-data'>Local market appreciation</span>
            </div>
            <h3 className='calculation-operator'>+</h3>
            <div className='calculation-value'>
              $14,660,343
              <span className='calculation-value-data'>Sale-based estimate</span>
            </div>
          </div>
        </div>
        <div id='listHeader'>
          <p>
            Top comparable homes in this estimate
            <span>$/sqft</span>  
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketAppreciation;