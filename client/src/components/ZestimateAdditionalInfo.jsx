import React from 'react';
import ComparableHomes from './ComparableHomes.jsx';
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
  }

  render () {
    console.log(this.props.data.propertyData);
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
              <ZestDeepDiveButton name={'Comparable Homes'} estimate={'$10,233,343'} />
              <ComparableHomes />
              <ZestDeepDiveButton name={'Market Appreciation'} estimate={'$12,454,454'} />
              <MarketAppreciation />
            </ZestDeepDiveCollapsible>
          </ZestDeepDive>

        </AdditionalZestimateInformation>
      </div>
    );
  }
}

export default ZestimateAdditionalInfo; 