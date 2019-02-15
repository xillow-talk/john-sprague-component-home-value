import React from 'react';
import styled from 'styled-components';

const PropertyCard = styled.div`
  border-top: solid 1px #eee;
  padding-top: 20px;
  padding-bottom: 20px;
  white-space: nowrap;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.5;
  color: #444;

  :after, :before {
    bow-sizing: border-box;
  }
`;

const PropertyDetailSection = styled.div``;


const HomeStatus = styled.h5``;

const RecentlySoldIcon = styled.span`
  font-size: 13px;
  line-height: 15px;
  font-weight: 700;
`;

const Price = styled.div`
  font-size: 28px;
  line-height: 40px;
  font-weight: 400;
`;

const PropertyDetailedInfo = styled.div`
  font-size: 15px;
  line-height: 20px;
  font-weight: 700;
`;

const PropertyAddress = styled.div`
  font-size: 15px;
  line-height: 20px;
  font-weight: 400;
  color: #0074e4;
  : hover {
    color: #62aef7;
  }
`;

const PropertySqftCalculation = styled.span`
  flex: 3;
  text-align: right
  padding-top: 30px;
  font-size: 20px;
  line-height: 15px;
  font-weight: 400;
`;

var ComparableHomesItem = ({homeData}) => {
  return (
    <div>
      <PropertyCard>
        <PropertyDetailSection>
          <HomeStatus>
            <RecentlySoldIcon>
              <div>
                SOLD ({homeData.sellDate})
              </div>
            </RecentlySoldIcon>
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