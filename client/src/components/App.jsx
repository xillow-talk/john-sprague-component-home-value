import React from 'react';
import ZestimateRow from './ZestimateRow.jsx';
import {
  Button, 
  DropDownArrow, 
  HomeDetails, 
  ZestimateHeaderContainer, 
  ZestimateTitle, 
  ZestimateValue, 
  CollapsibleContent
} from '../style.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      propertyData: [{}],
      comparableHomesData: [{}],
      localHomesData: [{}], 
      photosData: [{}],
      isHidden: true,
      propertyId: 5
    };
  }

  componentDidMount () {
    fetch(`/api/properties/${this.props.propertyId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          propertyData: data.singlePropertyData
        });
      });
    fetch('/api/properties')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          comparableHomesData: data.comparableHomesData,
          localHomesData: data.localHomesData,
          photosData: data.photosData
        });
      });
  }

  fetchPropertyData () {
    fetch('/api/properties')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          propertyData: data.propertyData
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
            <i className="fas fa-angle-down"></i>
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

const Child = ({propertyData, comparableHomesData, localHomesData, photosData}) => {
  return (
    <div>
      <CollapsibleContent>
        <HomeDetails>
          <ZestimateHeaderContainer>
            <ZestimateTitle>
            Zestimate
            </ZestimateTitle>
            <ZestimateValue> 
              {`$${propertyData[0].zestimationPrice}`}
            </ZestimateValue>
          </ZestimateHeaderContainer>
        </HomeDetails>
      </CollapsibleContent>
    
      <ZestimateRow 
        propertyData={propertyData[0]}
        comparableHomesData={comparableHomesData}
        localHomesData={localHomesData}
        photosData={photosData}
      /> 
    </div>
  );
};

export default App; 