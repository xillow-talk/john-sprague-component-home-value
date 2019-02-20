import React from 'react';
import styled from 'styled-components';
import LocalHomesItem from './LocalHomesItem.jsx';

const LocalHomeDetailsCollapsibleComponent = styled.section`
padding: 18px 0px 18px 0px;
`;

const CollapsibleContent = styled.div``;

const LocalHomesHeader = styled.div`
float: left;
text-align: left;
style: normal;
color: #444444;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: 400;
font-size: 15px;
line-height: 1.5;
padding-top: 23px;
`;

const LocalHomesToolTip = styled.span`
style: normal;
font-weight: 300;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-size: 15px;
line-height: 1.5;
color: #0074e4;
: hover {
  color: #62aef7;
}
`;

const LocalHomesToolTipText = styled.a`
text-align: left;
style: normal;
color: #444444;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: 300;
font-size: 15px;
line-height: 1.5;
`;

const LocalHomesListHeader = styled.p`
text-align: left;
style: normal;
color: #444444;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: 700;
font-size: 15px;
line-height: 15px;
`;

const LocalHomesListHeaderSqft = styled.span`
  float: right;
`;

const LocalHomesList = styled.section``;

const PropertyList = styled.div``;

class LocalHomes extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <LocalHomeDetailsCollapsibleComponent>
        <CollapsibleContent>
          <LocalHomesHeader>
          This estimate looks at the regional average amount that homes sell for above or below their list price. We then use that number to determine the value of this home, based on its list price and other characteristics of the listing.             
            <LocalHomesToolTip>
              <LocalHomesToolTipText>
                {' '}What affects the accuracy of this estimate?
              </LocalHomesToolTipText>
            </LocalHomesToolTip>
          </LocalHomesHeader>
          <LocalHomesListHeader>
            Recent Sales
            <LocalHomesListHeaderSqft>Sale-to-list</LocalHomesListHeaderSqft>
          </LocalHomesListHeader>
          <LocalHomesList>
            <PropertyList>
              {this.props.localHomesData.map((home, i) => {
                return <LocalHomesItem key={i} homeData={home} photo={this.props.photosData[Math.floor(Math.random() * Math.floor(49))]} />;
              })}
            </PropertyList>
          </LocalHomesList>
        </CollapsibleContent>
      </LocalHomeDetailsCollapsibleComponent>

    );
  }
} 

export default LocalHomes; 