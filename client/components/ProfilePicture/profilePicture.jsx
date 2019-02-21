import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Styles from './style';

const ProfilePic = (props) => {
  const [userProfileHover, showProfileHover] = useState(false);
  return (
    <div
      onMouseEnter={() => showProfileHover(true)}
      onMouseLeave={() => showProfileHover(false)}
    >
      {userProfileHover && (
      <Styles.ProfileContainer className="profileContainerKevin">
        <Styles.Arrow />
        <Styles.Profile>
          <Styles.Photo image={props.image} />
          <Styles.Username>{props.username}</Styles.Username>
          <Styles.FollowersContainer>
            <FontAwesomeIcon icon="user-friends" />
            <Styles.Followers>{props.followers}</Styles.Followers>
          </Styles.FollowersContainer>
          <Styles.Follow>Follow</Styles.Follow>
        </Styles.Profile>
      </Styles.ProfileContainer>
      )}
      <Styles.PictureContainer>
        <Styles.Picture
          image={props.image}
        />
      </Styles.PictureContainer>
    </div>
  );
};

export default ProfilePic;
