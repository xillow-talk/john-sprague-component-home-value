import React from 'react'; 
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faHome, faAngleDown} from '@fortawesome/free-solid-svg-icons'
import { 
  ZestDeepDiveButtonContainer, 
  ZestDeepDiveEstimate,
  ZestDeepDiveDropDownArrow, 
} from '../style.js';

library.add(faHome, faCircle, faAngleDown);

var ZestDeepDiveButton = ({name, estimate, onClick}) => {
  return (
    <ZestDeepDiveButtonContainer onClick={onClick}>
      {name}
      <ZestDeepDiveEstimate>
        {estimate}
        <ZestDeepDiveDropDownArrow>
          <FontAwesomeIcon icon='angle-down' size='sm'/>
        </ZestDeepDiveDropDownArrow>
      </ZestDeepDiveEstimate>
    </ZestDeepDiveButtonContainer>
  );
};


export default ZestDeepDiveButton; 

