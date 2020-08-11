import React, {useState, useEffect} from 'react'
import PostTweet from './PostTweet';
import Post from './Post';
import '../css/Feed.css';
import db from '../firebase';
import FlipMove from 'react-flip-move';

function Feed() {

  const [posts, setPosts] = useState([]);

  // Every time the firebase posts collection changes, map through the documents and setPosts to the data.
  // Returns an array of mapped posts.
  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => doc.data()))
    ))
  }, [])

  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      {/* Post a Tweet */}
      <PostTweet />
      {/* Posts */}
      {/* STATIC GREETING POST */}
      <Post
        displayName="Dan Milisits" 
        username="dan.milisits"
        verified
        postText="Thank you for taking the time to look at this program! Add a tweet now and watch the feed update. Please note, these are pulling from Firebase and posts may appear out of order due to timestamp issues."
        avatar="https://i.imgur.com/RIN7eYn.jpg"
        image="https://media.giphy.com/media/icUEIrjnUuFCWDxFpU/giphy.gif"
      />
      <FlipMove>
        {posts.map(post=>(
          <Post key={post.text}
            displayName={post.displayName} 
            username={post.username} 
            verified={post.verified} 
            postText={post.text} 
            avatar={post.avatar} 
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  )
}

export default Feed
