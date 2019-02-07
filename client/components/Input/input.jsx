import React from 'react';
import * as Styles from './style';

const Input = props => (
  <Styles.InputContainer>
    <Styles.User>@kevin</Styles.User>
    <Styles.ReplyInput placeholder="Write a Reply" />
  </Styles.InputContainer>
);

export default Input;
