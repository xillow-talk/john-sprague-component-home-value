import styled from 'styled-components';

// App
export const Button = styled.button`
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

export const DropDownArrow = styled.span`
size: 27px;
line-height: 31px;
color: #444444;
text-align: right; 
float: right;
font-weight:;
`;
export const HomeDetails = styled.div`
`;

export const ZestimateHeaderContainer = styled.div`
padding: 20px 0px 20px 0px;
`;
export const ZestimateTitle = styled.div`
float: center;
text-align:center;
style: normal;
font-weight: 700;
font-size: 20px;
line-height: 30px;
color: #444444;
`;

export const ZestimateValue = styled.div`
text-align:center;
style: normal;
font-weight: 700;
font-size: 28px;
line-height: 36px;
color: #444444;
`;

export const CollapsibleContent = styled.div`
margin-top: 20px;
`;

// ComparableHomes
export const HomeDetailsCollapsibleComponent = styled.section`
padding: 18px 0px 18px 0px;
`;

// export const CollapsibleContent = styled.div``;

export const ComparableHomesHeader = styled.div`
float: left;
text-align: left;
style: normal;
color: #444444;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: 400;
font-size: 15px;
line-height: 1.5;
`;

export const ComparableHomesToolTip = styled.span`
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

export const ComparableHomesToolTipText = styled.a`
style: normal;
color: #444444;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: 300;
font-size: 15px;
`;

export const ComparableHomesListHeader = styled.p`
text-align: left;
style: normal;
color: #444444;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: 700;
font-size: 15px;
line-height: 1.5;
margin-top: 40px;
`;

export const ComparableHomesListHeaderSqft = styled.span`
  float: right;
`;

export const ComparableHomesList = styled.section``;

export const PropertyList = styled.div``;

// ComparableHomesItem
export const PropertyCard = styled.div`
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

export const PropertyDetailSection = styled.div`
padding-top: 3px;
`;


export const HomeStatus = styled.span`
font-size: .83em
`;

export const RecentlySold = styled.span`
  font-size: 13px;
  line-height: 15px;
  font-weight: 700;
`;

export const RecentlySoldIcon = styled.span`
padding-top: 1px;
background-color: #fce013;
height: .75em;
width: .75em;
border-radius: 50%;
display: inline-block;
`;


export const Price = styled.div`
  font-size: 28px;
  line-height: 40px;
  font-weight: 400;
`;

export const PropertyDetailedInfo = styled.div`
  font-size: 15px;
  line-height: 20px;
  font-weight: 700;
`;

export const PropertyAddress = styled.div`
  font-size: 15px;
  line-height: 20px;
  font-weight: 400;
  color: #0074e4;
  : hover {
    color: #62aef7;
  }
`;

export const PropertySqftCalculation = styled.span`
  flex: 3;
  text-align: right
  padding-top: 30px;
  font-size: 20px;
  line-height: 15px;
  font-weight: 400;
`;

export const PropertyImage = styled.img`
box-sizing: border-box;
width: 150px;
height: 112px;
background-size: 150px 112px
padding-right: 20px
padding-top: -5px;
`;

// LocalHomes
export const LocalHomeDetailsCollapsibleComponent = styled.section`
padding: 18px 0px 18px 0px;
`;

// export const CollapsibleContent = styled.div``;

export const LocalHomesHeader = styled.div`
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

export const LocalHomesToolTip = styled.span`
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

export const LocalHomesToolTipText = styled.a`
text-align: left;
style: normal;
color: #444444;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: 300;
font-size: 15px;
line-height: 1.5;
`;

export const LocalHomesListHeader = styled.p`
text-align: left;
style: normal;
color: #444444;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: 700;
font-size: 15px;
line-height: 15px;
`;

export const LocalHomesListHeaderSqft = styled.span`
  float: right;
`;

export const LocalHomesList = styled.section``;

// export const PropertyList = styled.div``;
