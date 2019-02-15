import React from 'react'; 
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faHome, faAngleDown} from '@fortawesome/free-solid-svg-icons'

library.add(faHome, faCircle, faAngleDown);


const ZestDeepDiveButtonContainer = styled.button`
  background: white;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: '700';
  font-size: 15px;
  line-height: 17px;
  color: #444444
  border-top: solid 1px #eee;
  border-bottom: solid 1px #eee;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 15px;
`;

const ZestDeepDiveEstimate = styled.div`
  float: right;
`;

const DropDownArrow = styled.span`
  padding-left: 5px;
  text-align: right; 
  float: right;
  font-weight:;
`;


var ZestDeepDiveButton = ({name, estimate, onClick}) => {
  return (
    <ZestDeepDiveButtonContainer onClick={onClick}>
      {name}
      <ZestDeepDiveEstimate>
        {estimate}
        <DropDownArrow>
          <FontAwesomeIcon icon='angle-down' size='sm'/>
        </DropDownArrow>
      </ZestDeepDiveEstimate>
    </ZestDeepDiveButtonContainer>
  );
};


export default ZestDeepDiveButton; 

