import React from 'react';

var ComparableHomes = (props) => {
  return (
    <section className='home-details-collapsible-component'>

      <div className='collapsible-content'>
        <div className='comparables-header'>
          This estimate looks at for-sale or recently sold homes with similar features to this home, like its location, square footage and beds/baths. We then adjust the price of each comparable home based on its “similarity score” and local appreciation rate and use that set of adjusted values to calculate this estimate.
          <span className='zest-deep-dive-tooltip-text'>
            <a>What affects the accuracy of this estimate?</a>
          </span>
        </div>
        <div id='listHeader'>
          <p>
            Top comparable homes in this estimate
            <span>$/sqft</span>  
          </p>
        </div>

        {/* Additional comparable home property section cards */}
        <section>
          <div className='property-list'>
            <div className='property-card'>
              <a href='#'></a>
              <div className='property-detail-section'>
                <h5 className='home-status'>
                  <span className='recently-sold-icon'></span>  
                  <div>
                  SOLD 4/14/2018
                  </div>
                </h5>
                <div className='price'>
                  $16,232,232
                </div>
                <div className='detailed-info'>
                  <div>
                  6 bds - 6.5 ba - 6,180 sqft
                  </div>
                  <div className='address'>
                    454 Francisco St
                  </div>
                </div>
                <h3 className='calculation'>
                  $2,434
                </h3>
              </div>
            </div>

            <div className='property-card'>
              <a href='#'></a>
              <div className='property-detail-section'>
                <h5 className='home-status'>
                  <span className='recently-sold-icon'></span>  
                  <div>
                SOLD 4/14/2018
                  </div>
                </h5>
                <div className='price'>
                $16,232,232
                </div>
                <div className='detailed-info'>
                  <div>
                6 bds - 6.5 ba - 6,180 sqft
                  </div>
                  <div className='address'>
                  454 Francisco St
                  </div>
                </div>
                <h3 className='calculation'>
                $2,434
                </h3>
              </div>
            </div>
          
            <div className='property-card'>
              <a href='#'></a>
              <div className='property-detail-section'>
                <h5 className='home-status'>
                  <span className='recently-sold-icon'></span>  
                  <div>
                  SOLD 4/14/2018
                  </div>
                </h5>
                <div className='price'>
                  $16,232,232
                </div>
                <div className='detailed-info'>
                  <div>
                  6 bds - 6.5 ba - 6,180 sqft
                  </div>
                  <div className='address'>
                    454 Francisco St
                  </div>
                </div>
                <h3 className='calculation'>
                  $2,434
                </h3>
              </div>
            </div>

            <div className='property-card'>
              <a href='#'></a>
              <div className='property-detail-section'>
                <h5 className='home-status'>
                  <span className='recently-sold-icon'></span>  
                  <div>
                  SOLD 4/14/2018
                  </div>
                </h5>
                <div className='price'>
                  $16,232,232
                </div>
                <div className='detailed-info'>
                  <div>
                  6 bds - 6.5 ba - 6,180 sqft
                  </div>
                  <div className='address'>
                    454 Francisco St
                  </div>
                </div>
                <h3 className='calculation'>
                  $2,434
                </h3>
              </div>
            </div>

            <div className='property-card'>
              <a href='#'></a>
              <div className='property-detail-section'>
                <h5 className='home-status'>
                  <span className='recently-sold-icon'></span>  
                  <div>
                SOLD 4/14/2018
                  </div>
                </h5>
                <div className='price'>
                $16,232,232
                </div>
                <div className='detailed-info'>
                  <div>
                6 bds - 6.5 ba - 6,180 sqft
                  </div>
                  <div className='address'>
                  454 Francisco St
                  </div>
                </div>
                <h3 className='calculation'>
                $2,434
                </h3>
              </div>
            </div>
          </div>
        </section>

      </div>
    </section>
  );
};

export default ComparableHomes; 