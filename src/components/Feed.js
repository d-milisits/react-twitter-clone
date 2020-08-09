import React from 'react'
import PostTweet from './PostTweet';
import '../css/Feed.css';

function Feed() {
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {/* Post a Tweet */}
      <PostTweet />

      {/* Posts */}
    </div>
  )
}

export default Feed
