import React, {useState} from 'react'
import '../css/PostTweet.css';
import { Button, Avatar } from '@material-ui/core';
import db from '../firebase';

function PostTweet() {

  const [tweet, setTweet] = useState("");
  const [image, setImage] = useState("");

  const sendTweet = e => {
    // PREVENTS PAGE REFRESH ON CLICK!
    e.preventDefault();
    // Sends tweet up to database.
    db.collection('posts').add({
      displayName: 'Dan\'s Test User',
      username: 'test.user',
      verified: true,
      text: tweet,
      image: image,
      avatar: 'https://thumbs.dreamstime.com/b/default-male-avatar-profile-picture-icon-grey-man-photo-placeholder-vector-illustration-88414414.jpg'
    });
    // Reset fields after posting.
    setTweet("");
    setImage("");
  };

  return (
    <div className="postTweet">
      <form>
        <div class="postTweet__input">
          <Avatar src="https://thumbs.dreamstime.com/b/default-male-avatar-profile-picture-icon-grey-man-photo-placeholder-vector-illustration-88414414.jpg"/>
          <input onChange={(e) => setTweet(e.target.value)} value={tweet} placeholder="What's happening?" type="text"></input>
        </div>
        <input onChange={(e) => setImage(e.target.value)} value={image} class="postImage__input" placeholder="Enter OPTIONAL image URL" type="text"></input>
        <Button onClick={sendTweet} className="tweetBtn">Tweet</Button>
      </form>
    </div>
  )
}

export default PostTweet
