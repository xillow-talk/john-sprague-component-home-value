import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faReply } from '@fortawesome/free-solid-svg-icons';
import Comment from './comment';

library.add(faReply);

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }


  render() {
    return (
      <>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </>
    );
  }
}
