import React from 'react';
import ComparableHomes from './ComparableHomes.jsx';
<<<<<<< HEAD
import LocalHomes from './LocalHomes.jsx';
=======
>>>>>>> e1cfa818b3da8461d97c6ef8840333f017b6cb8d
import MarketAppreciation from './MarketAppreciation.jsx';
import ZestDeepDiveButton from './ZestDeepDiveButton.jsx';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faHome, faAngleDown} from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faCircle, faAngleDown);

const AdditionalZestimateInformation = styled.div`
  display: flex;
`;
const ZestDeepDive = styled.div``;

const ZestDeepDiveIntro = styled.div`
  text-align: left;
  float: left;
  text-align: left;
  style: normal;
  color: #444444;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const ZestDeepDiveIntroTitle = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
`;

const ZestDeepDiveIntroContent = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 23px;
`;

const ZestDeepDiveIntroEstimate = styled.h4`
  font-weight: 700;
  font-size: 13px;
  line-height: 20px;
  text-transform: uppercase;
`;

const ZestDeepDiveCollapsible = styled.div``;
const ZestDeepDiveCollapisibleTitle = styled.div``;
const ZestDeepDiveCollapisibleTitleText = styled.span``;

class ZestimateAdditionalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHiddenComparableHomes: true,
<<<<<<< HEAD
      isHiddenMarketAppreciation: true,
      isHiddenLocalHomes: true
=======
      isHiddenMarketAppreciation: true
>>>>>>> e1cfa818b3da8461d97c6ef8840333f017b6cb8d
    };

  }

  toggleHiddenComparableHomes () {
    this.setState({
      isHiddenComparableHomes: !this.state.isHiddenComparableHomes
    });
  }

  toggleHiddenMarketAppreciation () {
    this.setState({
      isHiddenMarketAppreciation: !this.state.isHiddenMarketAppreciation
    });
  }

<<<<<<< HEAD
  toggleLocalHomes () {
    this.setState({
      isHiddenLocalHomes: !this.state.isHiddenLocalHomes
    });
  }
=======
>>>>>>> e1cfa818b3da8461d97c6ef8840333f017b6cb8d
  render () {
    return (
      <div>
        <AdditionalZestimateInformation>
          <ZestDeepDive>

            <ZestDeepDiveIntro>
              <ZestDeepDiveIntroTitle>
              Inside the Zestimate
              </ZestDeepDiveIntroTitle>
              <ZestDeepDiveIntroContent>
                The Zestimate is Zillow’s best estimate of a home’s value. It is based on a blend of valuation methods, each of which may produce a different estimate depending on the available data.
              </ZestDeepDiveIntroContent>
              <ZestDeepDiveIntroEstimate>Estimate based on</ZestDeepDiveIntroEstimate>
            </ZestDeepDiveIntro>

            <ZestDeepDiveCollapsible>
              <ZestDeepDiveButton 
<<<<<<< HEAD
                name={'Comparable homes'} 
=======
                name={'Comparable Homes'} 
>>>>>>> e1cfa818b3da8461d97c6ef8840333f017b6cb8d
                estimate={`$${this.props.propertyData[0].comparableHomePrice}`} 
                onClick={this.toggleHiddenComparableHomes.bind(this)}
              />
              {!this.state.isHiddenComparableHomes && <ComparableHomes comparableHomesData={this.props.comparableHomesData} /> }
              <ZestDeepDiveButton 
<<<<<<< HEAD
                name={'Market appreciation'} 
=======
                name={'Market Appreciation'} 
>>>>>>> e1cfa818b3da8461d97c6ef8840333f017b6cb8d
                estimate={`$${this.props.propertyData[0].marketAppreciationPrice}`} 
                onClick={this.toggleHiddenMarketAppreciation.bind(this)}  
              />
              {!this.state.isHiddenMarketAppreciation && 
                <MarketAppreciation marketAppreciationData={this.props.propertyData} />}
<<<<<<< HEAD
              <ZestDeepDiveButton 
                name={'Local sale prices'}
                estimate={`$${this.props.propertyData[0].comparableHomePrice}`} 
                onClick={this.toggleLocalHomes.bind(this)}
              />
              {!this.state.isHiddenLocalHomes && 
                <LocalHomes localHomesData={this.props.localHomesData} /> 
              }
=======
>>>>>>> e1cfa818b3da8461d97c6ef8840333f017b6cb8d
            </ZestDeepDiveCollapsible>
          </ZestDeepDive>

        </AdditionalZestimateInformation>
      </div>
    );
  }
}

export default ZestimateAdditionalInfo; 