import React from 'react'
import "./Post.css";
import { Avatar } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import Image from './krishna.jpg';
import Image1 from "./rahul.jpg";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PublishIcon from '@mui/icons-material/Publish';

function Post({
  displayName,
  username,
  verified,
  text,
  image,
  avatar
}) {
  return (
    <div className='post'>
      <div className='post_avatar'>
        <Avatar src={Image1} />
      </div>
      <div className='post_body'>
        <div className='post_header'>
          <div className='post_headerText'>
            <h3>displayName
              <span className='post_headerSpecial'>
                <VerifiedUserIcon className="post_badge" />
                @username
              </span>
            </h3>
          </div>
          <div className='post_headerDescription'>
            <p>This is message</p>
          </div>

        </div>
        <img src={Image} width={300} height={300} alt='sample' />
        <div className="post_footer">
          <ChatBubbleIcon />
          <RepeatIcon />
          <FavoriteIcon />
          <PublishIcon />
        </div>
      </div>
    </div>
  )
}

export default Post 
