import React from 'react';
import * as Styles from './style';

const Username = props => (
  <Styles.UsernameContainer>
    <Styles.Username>
      {props.username}
    </Styles.Username>
    <Styles.At>at</Styles.At>
    <Styles.CommentTime>
      {props.commentTime}
    </Styles.CommentTime>
  </Styles.UsernameContainer>
);

export default Username;
