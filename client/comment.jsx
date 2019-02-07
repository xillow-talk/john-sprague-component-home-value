import React from 'react';
import * as Styles from './style';
import Profile from './components/ProfilePicture/profilePicture';
import Username from './components/Username/username';

const Comment = props => (
  <Styles.CommentContainer>
    <Profile />
    <Styles.Container>
      <Username username={props.username} commentTime={props.commentTime} />
      <Styles.Comment>{props.comment}</Styles.Comment>
    </Styles.Container>
    <Styles.TimeStamp>
      {props.time}
    </Styles.TimeStamp>
    {/* going to have the profile pic here first  */}
    {/* neeed the user name and time in the song which this was submitted  */}
    {/* need the time stamp of the song it self */}
    {/* need the comment itself */}
    {/* add the hover for the reply that a user should be able to make to that comment  */}
    {/* when the reply button is hit should be able to add upon that comment and post to it  */}
  </Styles.CommentContainer>
);

export default Comment;
