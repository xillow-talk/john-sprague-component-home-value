import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Styles from './style';

const Count = props => (
  <Styles.Container>
    <FontAwesomeIcon style={{ color: '#999' }} icon="comment-alt" />
    <Styles.Count className="commentCountKevin">{`${props.count} comments`}</Styles.Count>
  </Styles.Container>
);

export default Count;
