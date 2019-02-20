import React from 'react';
import ZestimateRow from './ZestimateRow.jsx';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faHome } from '@fortawesome/free-solid-svg-icons';
import fetchPropertyData from '../lib/get.js';
import {Button, DropDownArrow, HomeDetails, ZestimateHeaderContainer, ZestimateTitle, ZestimateValue, CollapsibleContent} from '../style.js';
library.add(faAngleDown, faHome);


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      propertyData: [{}],
      comparableHomesData: [{}],
      localHomesData: [{}], 
      photosData: [{}],
      isHidden: true,
      propertyId: 1
    };
  }

  componentDidMount () {
    fetch('http://localhost:3000/api/properties')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          propertyData: data.propertyData, 
          comparableHomesData: data.comparableHomesData,
          localHomesData: data.localHomesData,
          photosData: data.photosData
        });
      });
  }
  
  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  render () {
    return (

      <div> 
        <Button onClick={this.toggleHidden.bind(this)}>
          Home Value
          <DropDownArrow>
            <FontAwesomeIcon icon='angle-down' size='sm'/>
          </DropDownArrow>
        </Button>
        {!this.state.isHidden && 
          <Child 
            propertyData={this.state.propertyData} 
            comparableHomesData={this.state.comparableHomesData}
            localHomesData={this.state.localHomesData}
            photosData={this.state.photosData}
            propertyId = {this.state.propertyId}
          />
        }  
      </div>
    );
  }
}

const Child = ({propertyData, comparableHomesData, localHomesData, photosData, propertyId}) => {
  return (
    <div>
      <CollapsibleContent>
        <HomeDetails>
          <ZestimateHeaderContainer>
            <ZestimateTitle>
            Zestimate
            </ZestimateTitle>
            <ZestimateValue> 
              {`$${propertyData[propertyId].zestimationPrice}`}
            </ZestimateValue>
          </ZestimateHeaderContainer>
        </HomeDetails>
      </CollapsibleContent>
    
      <ZestimateRow 
        propertyData={propertyData}
        comparableHomesData={comparableHomesData}
        localHomesData={localHomesData}
        photosData={photosData}
        propertyId={propertyId}
      /> 
    </div>
  );
};

export default App; 