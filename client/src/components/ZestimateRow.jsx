import React from 'react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faHome, faAngleDown} from '@fortawesome/free-solid-svg-icons';
import ZestimateAdditionalInfo from './ZestimateAdditionalInfo.jsx';

library.add(faHome, faCircle);

const SecondaryZestimateItems = styled.div`
  display: flex
  text-align: center;
  float: center;
  padding-bottom: 20px;
  margin-bottom: 30px;
`;

const SecondaryRow = styled.div`
    flex: 1;
`;

const ZestimateIcon = styled.div`
  size: 27px;
  line-height: 31px;
  color: #0074e4;
  text-align: center; 
  float: center;
  font-weight:light;
`;

const SecondaryWrapper = styled.div``;

const SecondaryTitle = styled.div`
  text-transform: uppercase;
  float: center;
  text-align:center;
  style: normal;
  font-weight: 700;
  font-size: 13px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 20px;
  #444444;
  padding: 20px 0px 20px 0px;
`;

const SecondaryContent = styled.div`
  float: center;
  text-align:center;
  style: normal;
  font-weight: 400;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 15px;
  line-height: 23px;
  #444444;
`;

const PercentIncrease = styled.span``;

const ToggleSection = styled.div`
  display: flex;  
  justify-content: center;
  style: normal;
  font-weight: 300;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 15px;
  line-height: 23px;
  color: #0074e4;
  : hover {
    color: #62aef7;
  }

`;

const ToggleHistory = styled.a``;

const ExpandDown = styled.span`
margin-top: 5px;
`;

class ZestimateRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true
    }

  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  render () {
    console.log(this.props);
    return (
      <div>
        <SecondaryZestimateItems>
          <SecondaryRow>
            <ZestimateIcon>
              <span className="fa-stack fa-2x">
                <i className="far fa-circle fa-stack-2x "></i>
                <i className="fas fa-home fa-stack-1x  "></i>
              </span>
            </ZestimateIcon>
            <SecondaryWrapper>
              <SecondaryTitle>
                Zestimate Range
                <SecondaryContent>
                $9.54m - $16.95m
                </SecondaryContent>
              </SecondaryTitle>
            </SecondaryWrapper>
          </SecondaryRow>
  
          <SecondaryRow>
            <ZestimateIcon>
              <span className="fa-stack fa-2x">
                <i className="far fa-circle fa-stack-2x "></i>
                <i className="fas fa-arrow-up fa-stack-1x  "></i>
              </span>
            </ZestimateIcon>
            <SecondaryWrapper>
              <SecondaryTitle>
              Last 30-Day Change
                <SecondaryContent>
                  {`$_${this.props.propertyData[0].thirtyDayPriceChange} `}
                  <PercentIncrease>(+0.1%)</PercentIncrease>
                </SecondaryContent>
              </SecondaryTitle>
            </SecondaryWrapper>
          </SecondaryRow>
  
          <SecondaryRow>
            <ZestimateIcon>
              <span className="fa-stack fa-2x">
                <i className="far fa-circle fa-stack-2x "></i>
                <i className="fas fa-chart-line fa-stack-1x  "></i>
              </span>
            </ZestimateIcon>
            <SecondaryWrapper>
              <SecondaryTitle>
                One Year Forecast
                <SecondaryContent>
                  {`$${this.props.propertyData[0].oneYearForcast} - $${this.props.propertyData[0].oneYearForcast}`}
                  <PercentIncrease></PercentIncrease>
                </SecondaryContent>
              </SecondaryTitle>
            </SecondaryWrapper>
          </SecondaryRow>
        </SecondaryZestimateItems>
        <ToggleSection>
          <ToggleHistory onClick={this.toggleHidden.bind(this)}>
          Zestimate history and details <ExpandDown><FontAwesomeIcon icon='angle-down' /> </ExpandDown>
          </ToggleHistory>
        </ToggleSection>
        {!this.state.isHidden && 
          <ZestimateAdditionalInfo 
            propertyData={this.props.propertyData}
            comparableHomesData={this.props.comparableHomesData}
            localHomesData={this.props.localHomesData}
          />
        }
      </div> 
    );
  }
}


export default ZestimateRow;
