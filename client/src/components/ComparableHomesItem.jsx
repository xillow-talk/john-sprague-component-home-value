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

const PropertyDetailSection = styled.div`
padding-top: 3px;
`;


const HomeStatus = styled.span`
font-size: .83em
`;

const RecentlySold = styled.span`
  font-size: 13px;
  line-height: 15px;
  font-weight: 700;
`;

const RecentlySoldIcon = styled.span`
padding-top: 1px;
background-color: #fce013;
height: .75em;
width: .75em;
border-radius: 50%;
display: inline-block;
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

const PropertyImage = styled.img`
box-sizing: border-box;
width: 150px;
height: 112px;
background-size: 150px 112px
padding-right: 20px
padding-top: -5px;
`;

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