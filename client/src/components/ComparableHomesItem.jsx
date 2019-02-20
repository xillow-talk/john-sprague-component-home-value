import React from 'react';
import {
  PropertyCard, 
  PropertyDetailSection, 
  HomeStatus, 
  RecentlySold, 
  RecentlySoldIcon, 
  Price, 
  PropertyDetailedInfo, 
  PropertyAddress, 
  PropertySqftCalculation,
  PropertyImage
} from '../style.js';
var ComparableHomesItem = ({homeData, photo}) => {
  return (
    <div>
      <PropertyCard>
        <PropertyImage src={photo.url} />
        <PropertyDetailSection>
          <HomeStatus>
            <RecentlySoldIcon></RecentlySoldIcon>
            <RecentlySold> SOLD ({homeData.sellDate})</RecentlySold>
          </HomeStatus>
          <Price>
            {`$${homeData.sellPrice}`}
          </Price>
          <PropertyDetailedInfo>
            {`${homeData.beds} bds - ${homeData.baths} ba - 1555 sqft`}                          
          </PropertyDetailedInfo>
          <PropertyAddress>
            {homeData.streetAddress}
          </PropertyAddress>
        </PropertyDetailSection>
        <PropertySqftCalculation>
          {`$${homeData.priceSqft}`}
        </PropertySqftCalculation>
      </PropertyCard>
    </div>
  );
};


export default ComparableHomesItem; 