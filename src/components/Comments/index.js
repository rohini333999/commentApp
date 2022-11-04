import {Component} from 'react'

import {formatDistanceToNow} from 'date-fns'

import './index.css'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    name: '',
    comment: '',
    commentCount: 0,
    appendTime: '',
    isLiked: false,
  }

  onchangeName = event => {
    const {name} = this.state
    this.setState({name: event.target.value})
  }

  onchangeComment = event => {
    const {comment} = this.state
    this.setState({comment: event.target.value})
  }

  onclickAddComment = () => {
    console.log('click')
    const {name, comment, appendTime, isLiked} = this.state
    const showTime = formatDistanceToNow(new Date())
    this.setState(prevState => ({
      commentCount: prevState.commentCount + 1,
      name: '',
      comment: '',
      appendTime: showTime,
      isLiked: !prevState.isLiked,
    }))
    console.log(name, comment, appendTime, isLiked)
  }

  render() {
    const {name, comment, commentCount, appendTime} = this.state

    return (
      <div className="bg-image">
        <h1 className="heading">Comments</h1>
        <div className="comment-container">
          <div className="comment-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              className="comment-image"
              alt="comments"
            />
          </div>

          <div className="comment-section">
            <p>Say Something about ccbp 4.0</p>
            <input
              type="text"
              className="name-input"
              placeholder="Your Name"
              onChange={this.onchangeName}
            />
            <textarea
              rows="10"
              cols="25"
              placeholder="Your Comment"
              className="comment-input"
              onChange={this.onchangeComment}
            />
          </div>
        </div>
        <button
          className="button"
          type="button"
          onClick={this.onclickAddComment}
        >
          Add Comment
        </button>
        <hr className="line" />
        <div>
          <p>
            <span className="count">0</span> Comments
          </p>
        </div>
        <CommentItem
          name={name}
          comment={comment}
          backgroundClassNames={initialContainerBackgroundClassNames}
          appendTime={appendTime}
        />
      </div>
    )
  }
}

export default Comments
