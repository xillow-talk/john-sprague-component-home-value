import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import * as Styles from './style';
import Profile from './components/ProfilePicture/profilePicture';
import Username from './components/Username/username';
import Input from './components/Input/input';


const Comment = (props) => {
  const [reply, showReply] = useState(false);
  const [comment, showComment] = useState(false);
  const postedAt = moment(props.postedAt).startOf().fromNow();
  return (
    <>
      <Styles.CommentContainer
        onMouseEnter={() => showReply(!reply)}
        onMouseLeave={() => showReply(!reply)}
      >
        <Profile image={props.image} />
        <Styles.Container>
          <Username username={props.username} commentTime={props.songTime} />
          <Styles.Comment>{props.message}</Styles.Comment>
        </Styles.Container>
        <Styles.ReplyContainer>
          <Styles.TimeStamp>
            {postedAt}
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
        </Styles.ReplyContainer>
      </Styles.CommentContainer>
      {
      comment && (
        <Input username={props.username} image={props.image} />
      )
    }
    </>
  );
};

export default Comment;
