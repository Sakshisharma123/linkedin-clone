import React from 'react';
import "./Sidebar.css";
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Sidebar() {

    const user = useSelector(selectUser);
    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )
  return (
    <div>
      <div className="sidebar">
        <div className="sidebar_top">
            <img src="https://img.freepik.com/premium-photo/retro-style-background_522560-5795.jpg?w=826" alt="" />
            <Avatar src={user.photoUrl} className="sidebar_avatar"> {user.email[0]}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>
        <div className="sidebar_stats">
           <div className="sidebar_stat">
                <p>Who viewed you</p>
                <p className="sidebar_statNumber">2,543</p>
           </div>
           <div className="sidebar_stat">
                <p>Views on post</p>
                <p className="sidebar_statNumber">2,448</p>
           </div>
        </div>
        <div className="sidebar_bottom">
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('softwareneginnering')}
            {recentItem('webdevlopment')}
            {recentItem('developer')}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
