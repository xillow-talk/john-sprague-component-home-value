import React from 'react';
import ComparableHomes from './ComparableHomes.jsx';
import MarketAppreciation from './MarketAppreciation.jsx';

class ZestimateAdditionalInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className='additional-zestimate-info'>
        <div className='zest-deep-dive'>
          <h3>Inside the Zestimate</h3>
          <p>The Zestimate is Zillow’s best estimate of a home’s value. It is based on a blend of valuation methods, each of which may produce a different estimate depending on the available data.</p>
          <h4>Estimate based on</h4>
          {/* This will be refactored into another component 
            When a user clicks on the down arrow, display the additional content
          */}
          <div className='zest-deep-dive-collapsible'>
            <button className="collapsible">
              <div className='zest-deep-dive-collapsible-title'>
                <span className='zest-deep-dive-collapsible-title-text'>
                  Comparable Homes
                </span>
                <span className='zest-deep-dive-estimate'>
                  $10,233,343
                </span>
                <span className='drop-down-arrow'>></span>
              </div>
            </button>
            <ComparableHomes /> 
            {/* thise will be the additional sub-component for market appreciation*/}
            <button className="collapsible">
              <div className='zest-deep-dive-collapsible-title'>
                <span className='zest-deep-dive-collapsible-title-text'>
                  Market appreciation
                </span>
                <span className='zest-deep-dive-estimate'>
                  $10,233,343
                </span>
                <span className='drop-down-arrow'>></span>
              </div>
            </button>
            <MarketAppreciation />
          
            <section className='home-details-collapsible-component'>
            
            </section>

          </div>
        </div>
      </div>
    );
  }
}

export default ZestimateAdditionalInfo; 