import React from 'react';
import ComparableHomes from './ComparableHomes.jsx';
import MarketAppreciation from './MarketAppreciation.jsx';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faHome, faAngleDown} from '@fortawesome/free-solid-svg-icons'

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
const ZestDeepDiveButton = styled.button`
background: white;
cursor: pointer;
padding: 18px;
width: 100%;
border: none;
text-align: left;
outline: none;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: '700';
font-size: 15px;
line-height: 17px;
color: #444444
border-top: solid 1px #eee;
border-bottom: solid 1px #eee;
padding-top: 20px;
padding-bottom: 20px;
margin-bottom: 15px;
:hover {
  
}
`;

const DropDownArrow = styled.span`
padding-left: 5px;
text-align: right; 
float: right;
font-weight:;
`;
const ZestDeepDiveCollapsible = styled.div``;
const ZestDeepDiveCollapisibleTitle = styled.div``;

const ZestDeepDiveCollapisibleTitleText = styled.span``;

const ZestDeepDiveEstimate = styled.div`
float: right;
`;



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
            <ZestDeepDiveButton>
              Comparable Homes
              <ZestDeepDiveEstimate>
                $10,233,343
                <DropDownArrow>
                  <FontAwesomeIcon icon='angle-down' size='sm'/>
                </DropDownArrow>
              </ZestDeepDiveEstimate>
            </ZestDeepDiveButton>
            <ComparableHomes />
            <ZestDeepDiveButton>
              Market Appreciation
              <ZestDeepDiveEstimate>
                $10,233,343
                <DropDownArrow>
                <FontAwesomeIcon icon='angle-down' size='sm'/>
              </DropDownArrow>
              </ZestDeepDiveEstimate>
            </ZestDeepDiveButton>

            <MarketAppreciation />
          </ZestDeepDiveCollapsible>
        </ZestDeepDive>  
      </AdditionalZestimateInformation>
    </div>
    );
  }
}

export default ZestimateAdditionalInfo; 