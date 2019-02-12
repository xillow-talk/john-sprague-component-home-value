import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div> 

        {/*} THIS IS THE BEGINNING OF THE COMPONENT. WHEN THE USER CLICKS ON THE DROP DOWN ARROW, 
        ADDITIONAL CONTENT WILL BE SHOWN */}

        <button className="collapsible">Home Value<span className='drop-down-arrow'>></span></button>
        <div className="content">
          <p>Lorem ipsum...</p>
        </div>
        {/*all additional content will come below */}
        <div className='collapsible-content'>  
          <div id='home-details-home-values'>
            <div className='primary-zestimate-item'>
              <div className='zestimate-title'>
                Zestimate
              </div>
              <div className='zetimate-content'>
                <div className='zestimate-value'>
                  $10,323,353
                </div>
              </div>
            </div>
          </div>

          {/* row of zestimate-items */}
          <div className='secondary-zestimate-items'>
            <div className='secondary-row'>
              <span className='zestimate-icon'>
                <img></img>
              </span>
              <div className='secondary-wrapper'>
                <div className='secondary-title'>
                  Zestimate Range 
                  <div className='secondary-content'>
                      $9.54m - $16.95m
                  </div>
                </div>
              </div>
            </div>
            <div className='secondary-row'>
              <span className='zestimate-icon'>
                <img></img>
              </span>
              <div className='secondary-wrapper'>
                <div className='secondary-title'>
                Last 30-Day Change
                  <div className='secondary-content'>
                _$8,351
                    <span className='percent-increase'>(+0.1%)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='secondary-row'>
              <span className='zestimate-icon'>
                <img></img>
              </span>
              <div className='secondary-wrapper'>
                <div className='secondary-title'>
                One Year Forecast
                  <div className='secondary-content'>
                  $9.54m - $16.95m
                    <span className='percent-increase'>(+0.1%)</span>
                  </div>
                </div>
              </div>
            </div>

            {/*toggle button to show addition home details */}
            <div className='toggle-section'>
              <a className='toggle-center'>
                Zestimate history and details
                <span className='expand-down'>  
                  down arrow icon needed 
                </span>
              </a>
            </div>

            {/*This will be refactored into an additional component */}
            <div className='additional-zestimate-info'>
              <div className='zest-deep-dive'>
                <h3>Inside the Zestimate</h3>
                <p>The Zestimate is Zillow’s best estimate of a home’s value. It is based on a blend of valuation methods, each of which may produce a different estimate depending on the available data.</p>
                <h4>Estimate based on</h4>
                {/* This will be refactored into another component 
                  When a user clicks on the down arrow, display the additional content
                */}
                <div className='zest-deep-dive-collapsible'>
                  <section className='home-details-collapsible-component'>
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

                    {/* Additional comparable home propertie headers */}
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

                  {/* thise will be the additional sub-component for market appreciation*/}
                  <section className='home-details-collapsible-component'>

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

                    {/* Additional market appreciation headers */}
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

                  <section className='home-details-collapsible-component'>
                  
                  </section>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </div>
    );
  }
}

export default App; 


