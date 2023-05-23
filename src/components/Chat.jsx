import React from 'react'
import { FaCamera, FaUserFriends, FaEllipsisH } from "react-icons/fa";
import Messages from './Messages';
import Input from './input';

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <div className="icon"><FaCamera /></div>
          <div className="icon"><FaUserFriends /></div>
          <div className="icon"><FaEllipsisH /></div>
        </div>
      </div>
        <Messages />
        <Input />
    </div>
  )
}

export default Chat