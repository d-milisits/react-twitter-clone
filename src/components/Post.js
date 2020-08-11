import React, {forwardRef} from 'react'
import "../css/Post.css";
import {Avatar} from "@material-ui/core";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

const Post = forwardRef(({
  displayName, 
  username, 
  verified, 
  timestamp, 
  postText, 
  image, 
  avatar}, ref) => {
  return (
    <div className="post" ref={ref}>
      {/* Avatar */}
      <div className="avatar">
        <Avatar src={avatar}/>
      </div>
      {/* Post content */}
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>{displayName}{" "}
              <span className="post__headerAt">
                <VerifiedUserIcon className="badge"/> @{username}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{postText}</p>
          </div>
        </div>
        <img src={image} alt=""/>
        <div className="post__footer">
          <ChatBubbleOutlineOutlinedIcon fontSize="small"/>
          <RepeatIcon fontSize="small"/>
          <FavoriteBorderIcon fontSize="small"/>
          <PublishIcon fontSize="small"/>
      </div>
      </div>
    </div>
  );
});

export default Post
