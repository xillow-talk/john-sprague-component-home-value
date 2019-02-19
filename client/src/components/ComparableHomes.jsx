import React from 'react';
import styled from 'styled-components';
import ComparableHomesItem from './ComparableHomesItem.jsx';

const HomeDetailsCollapsibleComponent = styled.section``;

const CollapsibleContent = styled.div``;

const ComparableHomesHeader = styled.div`
text-align: left;
float: left;
text-align: left;
style: normal;
color: #444444;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: 400;
font-size: 15px;
line-height: 15px;
padding-top: 23px;
`;

const ComparableHomesToolTip = styled.span`
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

const ComparableHomesToolTipText = styled.a`
text-align: left;
float: left;
text-align: left;
style: normal;
color: #444444;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: 700;
font-size: 15px;
line-height: 23px;
`;

const ComparableHomesListHeader = styled.p`
text-align: left;
style: normal;
color: #444444;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: 700;
font-size: 15px;
line-height: 15px;
margin-top: 40px;
`;

const ComparableHomesListHeaderSqft = styled.span`
  float: right;
`;

const ComparableHomesList = styled.section``;

const PropertyList = styled.div``;

class ComparableHomes extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <HomeDetailsCollapsibleComponent>
        <CollapsibleContent>
          <ComparableHomesHeader>
          This estimate looks at for-sale or recently sold homes with similar features to this home, like its location, square footage and beds/baths. We then adjust the price of each comparable home based on its “similarity score” and local appreciation rate and use that set of adjusted values to calculate this estimate.
            <ComparableHomesToolTip>
              <ComparableHomesToolTipText>
                What affects the accuracy of this estimate?
              </ComparableHomesToolTipText>
            </ComparableHomesToolTip>
          </ComparableHomesHeader>
          <ComparableHomesListHeader>
            Top comparable homes in this estimate
            <ComparableHomesListHeaderSqft>$/sqft</ComparableHomesListHeaderSqft>
          </ComparableHomesListHeader>
          <ComparableHomesList>
            <PropertyList>
              {this.props.comparableHomesData.map((home, i) => {
                return <ComparableHomesItem key={i} homeData={home} />;
              })}
            </PropertyList>
          </ComparableHomesList>
        </CollapsibleContent>
      </HomeDetailsCollapsibleComponent>

    );
  }
} 


export default ComparableHomes; 