import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Styles from './style';
import Profile from './components/ProfilePicture/profilePicture';
import Username from './components/Username/username';

const Comment = (props) => {
  const [reply, showReply] = useState(false);

  return (
    <Styles.CommentContainer
      onMouseEnter={() => showReply(!reply)}
      onMouseLeave={() => showReply(!reply)}
    >
      <Profile />
      <Styles.Container>
        <Username username={props.username} commentTime={props.commentTime} />
        <Styles.Comment>{props.Text}</Styles.Comment>
      </Styles.Container>
      <Styles.ReplyContainer>
        <Styles.TimeStamp>
          {props.time}
        </Styles.TimeStamp>
        {reply
          && (
          <Styles.FontContainer>
            <Styles.BorderContainer>
              <FontAwesomeIcon icon="reply" />
              <Styles.Reply>Reply</Styles.Reply>
            </Styles.BorderContainer>
          </Styles.FontContainer>
          )
        }
      </Styles.ReplyContainer>
      {/* going to have the profile pic here first  */}
      {/* neeed the user name and time in the song which this was submitted  */}
      {/* need the time stamp of the song it self */}
      {/* need the comment itself */}
      {/* add the hover for the reply that a user should be able to make to that comment  */}
      {/* when the reply button is hit should be able to add upon that comment and post to it  */}
    </Styles.CommentContainer>
  );
};

export default Comment;
