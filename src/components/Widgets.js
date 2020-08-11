import React from 'react'
import '../css/Widgets.css';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed';

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchOutlinedIcon className="widgets__search" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTimelineEmbed sourceType="profile" screenName="googledevs" transparent noScrollbar theme='dark' options={{height:'80vh'}} />
      </div>
    </div>
  )
}

export default Widgets
