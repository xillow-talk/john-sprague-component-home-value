import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faReply, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import Comment from './comment';
import CommentConut from './components/CommentCount/commentCount.jsx';
import * as _ from 'lodash';
import moment from 'moment';
import Loader from './components/Loader/loader';

library.add(faReply);
library.add(faCommentAlt);

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      count: '',
      displayedComments: [],
      commentCount: 20, 
      loading: true
    };
  }


  componentDidMount() {
    this.getComments();
    this.getCommentCount();
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
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
    .then(() => {
      this.renderComments()
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

  handleScroll = (e) => {
      if(this.state.commentCount !== this.state.comments.length){
          if(this.state.commentCount + 20 > this.state.comments.length){
            this.setState(state => {
              state.loading = false
              state.commentCount = state.commentCount = this.state.comments.length;
            }, () => this.renderComments());
          }else{
            // this.setState(state => state.commentCount = state.commentCount + 20, () => this.renderComments());
            this.setState(state => {
              state.commentCount = state.commentCount = state.commentCount + 20;
            }, () => this.renderComments());
          }
        }
  }

    onScroll = () => {
      if (
        (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) 
      ) {
        this.handleScroll()
      }
    }
  
  renderComments = () => {
    this.setState({displayedComments: []}, () => {
      for (let i = 0; i < this.state.commentCount; i++) {
        this.setState(state => {
          return state.displayedComments.push(state.comments[i])
          }
        )
      }
    })
  }

  render() {
    return (
      <div onScroll={this.handleScroll}>
      {this.state.count &&
        <CommentConut count={this.state.count} />
      }
      {this.state.displayedComments&& 
      this.state.displayedComments.map((i, index) => (
        <Comment 
        key={index}
        image={i.profilePic}
        username={i.username}
        songTime={i.songTime}
        comment={i.message}
        postedAt={i.postedAt}
        />
      ))}
        <Loader loading={this.state.loading} />
      </div>
    );
  }
}
