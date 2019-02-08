import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Styles from './style';
import Profile from './components/ProfilePicture/profilePicture';
import Username from './components/Username/username';
import Input from './components/Input/input';

const Comment = (props) => {
  const [reply, showReply] = useState(false);
  const [comment, showComment] = useState(false);

  // TODO: Delete the fake data with api data
  return (
    <>
      <Styles.CommentContainer
        onMouseEnter={() => showReply(!reply)}
        onMouseLeave={() => showReply(!reply)}
      >
        <Profile />
        <Styles.Container>
          <Username username="kevinbece" commentTime="12:05" />
          <Styles.Comment>Bump</Styles.Comment>
        </Styles.Container>
        <Styles.ReplyContainer>
          <Styles.TimeStamp>
          8 hours ago
          </Styles.TimeStamp>
          {(reply || comment)
          && (
          <Styles.FontContainer>
            <Styles.BorderContainer onClick={() => showComment(true)}>
              <FontAwesomeIcon icon="reply" />
              <Styles.Reply>Reply</Styles.Reply>
            </Styles.BorderContainer>
          </Styles.FontContainer>
          )
        }
          {/* here the input will go  */}
          {/* input should have the username of the user that it is being relpied to */}

        </Styles.ReplyContainer>
      </Styles.CommentContainer>
      {
      comment && (
        <Input />
      )
    }
    </>
  );
};

export default Comment;
