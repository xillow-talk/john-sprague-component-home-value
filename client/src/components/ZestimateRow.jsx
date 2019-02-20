import React from 'react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faHome, faAngleDown} from '@fortawesome/free-solid-svg-icons';
import ZestimateAdditionalInfo from './ZestimateAdditionalInfo.jsx';
import {
  SecondaryZestimateItems,
  SecondaryRow,
  ZestimateIcon,
  SecondaryWrapper,
  SecondaryTitle,
  SecondaryContent,
  PercentIncrease,
  ToggleSection,
  ToggleHistory,
  ExpandDown
} from '../style.js';

library.add(faHome, faCircle);

class ZestimateRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true
    };
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  render () {
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
                  {`$_${this.props.propertyData[this.props.propertyId].thirtyDayPriceChange} `}
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
                  {`$${this.props.propertyData[this.props.propertyId].oneYearForcast} - $${this.props.propertyData[this.props.propertyId].oneYearForcast}`}
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
            photosData={this.props.photosData}
            propertyId={this.props.propertyId}
          />
        }
      </div> 
    );
  }
}

export default ZestimateRow;
