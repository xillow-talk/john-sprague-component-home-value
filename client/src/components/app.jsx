import React from 'react';
import ZestimateRow from './ZestimateRow.jsx';
import ZestimateAdditionalInfo from './ZestimateAdditionalInfo.jsx';

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

          <ZestimateRow /> 
          <ZestimateAdditionalInfo />
        </div>
      </div>
    );
  }
}

export default App; 


