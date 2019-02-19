import React from 'react';
import styled from 'styled-components';

const HomeDetailsCollapsibleComponent = styled.section`
padding-bottom: 18px;
`;

const CollapsibleContent = styled.div``;

const MarketAppreciationHeader = styled.div`
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

const MarketAppreciationToolTip = styled.span`
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

const MarketAppreciationToolTipText = styled.a`
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

const CalculationSection = styled.div``;

const CalculationHeader = styled.h5`
  padding-top: 20px;
  font-weight: 800;
  font-size: 13px;
  line-height: 20px;
  padding-top: 40px;
`;

const CalculationEquation =  styled.div`
  display: flex;
`;

const CalculationOperator = styled.h3`
  flex: 1;
  text-align: center;
`;
const CalculationValuePercentage = styled.div`
  flex: 1;
  style: normal;
  color: #444444;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 100;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
`;

const CalculationValueInfo = styled.div`
  style: normal;
  color: #444444;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 100;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
`;

const CalculationValue = styled.div`
  flex: 1;
  style: normal;
  color: #444444;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 100;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
`;
const CalculationValueDate = styled.div`
  flex: 1;
  style: normal;
  color: #444444;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 100;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
`;
const ListHeader = styled.div``;

const ListContent = styled.p``;

class MarketAppreciation extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <HomeDetailsCollapsibleComponent>
          <CollapsibleContent>
            <MarketAppreciationHeader>
              This estimate takes the price this home last sold for and adjusts it by the percentage change in market value for that area since that sale.
              <MarketAppreciationToolTip>
                <MarketAppreciationToolTipText>
                  What affects the accuracy of this estimate?
                </MarketAppreciationToolTipText>
              </MarketAppreciationToolTip>
            </MarketAppreciationHeader>
            <CalculationSection>
              <CalculationHeader>
                How it's calculated
              </CalculationHeader>
              <CalculationEquation>
                <CalculationValue>
                  $12,232,232
                  <CalculationValueInfo>
                    Last sale price
                  </CalculationValueInfo>
                  <CalculationValueDate>
                    (7/19/2018)
                  </CalculationValueDate>
                  
                </CalculationValue>
                <CalculationOperator>
                +
                </CalculationOperator>
                <CalculationValuePercentage>
                    17.3%
                  <CalculationValueInfo>
                      Local market appreciation
                  </CalculationValueInfo>
                </CalculationValuePercentage>
                <CalculationOperator>
                =
                </CalculationOperator>
                <CalculationValue>
                  $14,660,343
                  <CalculationValueInfo>
                    Sale-based estimate
                  </CalculationValueInfo>
                </CalculationValue>
              </CalculationEquation>
            </CalculationSection>
            <ListHeader>
            </ListHeader>
          </CollapsibleContent>
        </HomeDetailsCollapsibleComponent>
      </div>
    );
  }
}

export default MarketAppreciation;