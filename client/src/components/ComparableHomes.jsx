import React from 'react';
import styled from 'styled-components';

const HomeDetailsCollapsibleComponent = styled.section``;

const CollapsibleContent = styled.div``;

const ComparableHomesHeader = styled.div``;

const ComparableHomesToolTip = styled.span``;

const ComparableHomesToolTipText = styled.a``;

const ComparableHomesListHeader = styled.p``;

const ComparableHomesList = styled.section``;

const PropertyList = styled.div``;

const PropertyCard = styled.div``;

const PropertyDetailSection = styled.div``;

const HomeStatus = styled.h5``;

const RecentlySoldIcon = styled.span``;

const Price = styled.div``;

const PropertyDetailedInfo = styled.div``;

const PropertyAddress = styled.div``;

const PropertySqftCalculation = styled.h3``;






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
          <span>$/sqft</span>  
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
                ` 6 bds - 6.5 ba - 6,180 sqft
                </PropertyDetailedInfo>
                <PropertyAddress>
                  454 Francisco St
                </PropertyAddress>
                <PropertySqftCalculation>
                  $2,434
                </PropertySqftCalculation>
              </PropertyDetailSection>
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
                <PropertySqftCalculation>
                  $2,434
                </PropertySqftCalculation>
              </PropertyDetailSection>
            </PropertyCard>

          </PropertyList>
        </ComparableHomesList>
      </CollapsibleContent>
    </HomeDetailsCollapsibleComponent>
  );
};

export default ComparableHomes; 