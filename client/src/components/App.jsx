import React from 'react';
import ZestimateRow from './ZestimateRow.jsx';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faHome } from '@fortawesome/free-solid-svg-icons';
import fetchPropertyData from '../lib/get.js';
library.add(faAngleDown, faHome);

const Button = styled.button`
  background: white;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: '900';
  font-size: 28px;
  line-height: 31px;
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
  size: 27px;
  line-height: 31px;
  color: #444444;
  text-align: right; 
  float: right;
  font-weight:;
`;
const HomeDetails = styled.div`
`;

const ZestimateHeaderContainer = styled.div`
  padding: 20px 0px 20px 0px;
`;
const ZestimateTitle = styled.div`
  float: center;
  text-align:center;
  style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #444444;
`;

const ZestimateValue = styled.div`
  text-align:center;
  style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
  color: #444444;
`;

const CollapsibleContent = styled.div`
  margin-top: 20px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      propertyData: [{}],
      comparableHomesData: [{}],
      localHomesData: [{}], 
      photosData: [{}],
      isHidden: true
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
    console.log(this.state)
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
        propertyData={propertyData}
        comparableHomesData={comparableHomesData}
        localHomesData={localHomesData}
        photosData={photosData}
      /> 
    </div>
  );
};

export default App; 