import React from 'react'
import '../css/PostTweet.css';
import { Button, Avatar } from '@material-ui/core';

function PostTweet() {
  return (
    <div className="postTweet">
      <form>
        <div class="postTweet__input">
          <Avatar src="https://thumbs.dreamstime.com/b/default-male-avatar-profile-picture-icon-grey-man-photo-placeholder-vector-illustration-88414414.jpg"/>
          <input placeholder="What's happening?" type="text"></input>
        </div>
        <input class="postImage__input" placeholder="Enter image URL" type="text"></input>
        <Button className="tweetBtn">Tweet</Button>
      </form>
    </div>
  )
}

export default PostTweet
