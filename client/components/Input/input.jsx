import React, { useState } from 'react';
import * as Styles from './style';

const Input = (props) => {
  const [value, valueChange] = useState('');
  const [username, removeUsername] = useState(null);

  const removeUser = (e) => {
    if (!username) {
      if (value === '' && e.key === 'Backspace') {
        if (username === null) {
          removeUsername(false);
        } else if (username === false) {
          removeUsername(true);
        }
      } else if (value !== '') {
        removeUsername(null);
      }
    }
  };

  return (
    <Styles.InputBorder>
      <Styles.InputContainer>
        <Styles.ProfilePicture image={props.userPic} />
        {!username
        && <Styles.User deleting={username}>{props.username}</Styles.User>
      }
        <Styles.ReplyInput value={value} onKeyUp={e => removeUser(e)} onChange={e => valueChange(e.target.value)} placeholder="Write a Reply" />
      </Styles.InputContainer>
    </Styles.InputBorder>
  );
};

export default Input;
