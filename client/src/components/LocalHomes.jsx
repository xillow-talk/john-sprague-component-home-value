import React from 'react';
import LocalHomesItem from './LocalHomesItem.jsx';
import {LocalHomeDetailsCollapsibleComponent, CollapsibleContent, LocalHomesHeader, LocalHomesToolTip, LocakHomesToolTipText, LocalHomesListHeader, LocalHomesListHeaderSqft, LocalHomesList, PropertyList} from '../style.js';mon

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