import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faReply, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import Comment from './comment';
import CommentConut from './components/CommentCount/commentCount.jsx';
import * as _ from 'lodash';
import moment from 'moment';

library.add(faReply);
library.add(faCommentAlt);

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      count: '',
    };
  }


  componentDidMount() {
    this.getComments();
    this.getCommentCount();
  }

  getComments = () => {
    fetch('/comments')
    .then((res) => {
      return res.json()
    })
    .then((comments) => {
      const sortedComments = _.sortBy(comments, (i) => {
        return new moment(i.postedAt)
      }).reverse();
      this.setState({
        comments: sortedComments
      })
    })
  }

  getCommentCount = () => {
    fetch('/commentCount')
    .then((res) => {
      return res.json();
    })
    .then((response) => {
      this.setState({
        count: response.count
      })
    })
  }


  render() {
    return (
      <>
      {this.state.count &&
        <CommentConut count={this.state.count} />
      }
      {this.state.comments&& 
      this.state.comments.map((i) => (
        <Comment 
        key={i.id}
        image={i.profilePic}
        username={i.username}
        songTime={i.songTime}
        comment={i.message}
        postedAt={i.postedAt}

        />
      ))}
      </>
    );
  }
}
