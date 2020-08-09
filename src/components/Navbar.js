import React from 'react'
import '../css/Navbar.css';
import NavbarOption from './NavbarOption';
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {Button} from '@material-ui/core';

function Navbar() {
  return (
    <div className="navbar">
      {/* ICON */}
      <TwitterIcon className="icon" />
      {/* OPTIONS */}
      <NavbarOption active Icon={HomeIcon} text="Home" />
      <NavbarOption Icon={SearchIcon} text="Explore" />
      <NavbarOption Icon={NotificationsNoneIcon} text="Notifications" />
      <NavbarOption Icon={MailOutlineIcon} text="Messages" />
      <NavbarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      <NavbarOption Icon={ListAltIcon} text="Lists" />
      <NavbarOption Icon={PermIdentityIcon} text="Profile" />
      <NavbarOption Icon={MoreHorizIcon} text="More" />
      {/* TWEET BUTTON */}
      <Button variant="outlined" className="navBtn" fullWidth>Tweet</Button>
    </div>
  )
}

export default Navbar
