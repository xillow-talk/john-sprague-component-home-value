import React from 'react';
import * as Styles from './style';

const ProfilePic = props => (
  <Styles.PictureContainer>
    <Styles.Picture image={props.image} />
  </Styles.PictureContainer>
);

export default ProfilePic;
