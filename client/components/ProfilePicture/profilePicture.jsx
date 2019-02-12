import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Styles from './style';

const ProfilePic = (props) => {
  const [userProfile, showProfile] = useState(false);
  return (
    <>
      <Styles.ProfileContainer>
        <Styles.Arrow />
        <Styles.Profile>
          <Styles.Photo image={props.image} />
          <Styles.Username>{props.username}</Styles.Username>
          <Styles.FollowersContainer>
            <FontAwesomeIcon icon="user-friends" />
            <Styles.Followers>{props.followers}</Styles.Followers>
          </Styles.FollowersContainer>
        </Styles.Profile>
      </Styles.ProfileContainer>
      <Styles.PictureContainer
        onMouseEnter={() => showProfile(!userProfile)}
        onMouseLeave={() => showProfile(!userProfile)}
      >
        <Styles.Picture image={props.image} />
      </Styles.PictureContainer>
    </>
  );
};

export default ProfilePic;
