import React from 'react';

var ZestimateRow = (props) => {
  return (
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

    </div> 
  );
};

export default ZestimateRow;
