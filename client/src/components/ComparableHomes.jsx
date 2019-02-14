import React from 'react';
import styled from 'styled-components';


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

var ComparableHomes = (props) => {
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
            {/* property cards, this will be refactored into a component */}
            <PropertyCard>
              <PropertyDetailSection>
                <HomeStatus>
                  <RecentlySoldIcon>
                    <div>
                      SOLD 4/14/2018
                    </div>
                  </RecentlySoldIcon>
                </HomeStatus>
                <Price>
                  $16,232,232
                </Price>
                <PropertyDetailedInfo>
                  6 bds - 6.5 ba - 6,180 sqft
                </PropertyDetailedInfo>
                <PropertyAddress>
                  454 Francisco St
                </PropertyAddress>
              </PropertyDetailSection>
              <PropertySqftCalculation>
                    $2,434
              </PropertySqftCalculation>
            </PropertyCard>


            <PropertyCard>
              <PropertyDetailSection>
                <HomeStatus>
                  <RecentlySoldIcon>
                    <div>
                      SOLD 4/14/2018
                    </div>
                  </RecentlySoldIcon>
                </HomeStatus>
                <Price>
                  $16,232,232
                </Price>
                <PropertyDetailedInfo>
                ` 6 bds - 6.5 ba - 6,180 sqft                            
                </PropertyDetailedInfo>
                <PropertyAddress>
                  454 Francisco St
                </PropertyAddress>
              </PropertyDetailSection>
              <PropertySqftCalculation>
              $2,434
              </PropertySqftCalculation>
            </PropertyCard>

          </PropertyList>
        </ComparableHomesList>
      </CollapsibleContent>
    </HomeDetailsCollapsibleComponent>
  );
};

export default ComparableHomes; 