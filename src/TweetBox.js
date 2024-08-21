import { Avatar, Button } from '@mui/material'
import React, { useState } from 'react'
import "./Tweetbox.css";
import Image from "./rahul.jpg";
import db from './Firebase';

function TweetBox() {

  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState('');
  const sendTweet = (e) => {
    e.preventDefault();
    db.collection('post').add({
      displayName: "CodewithRahul",
      userName: "rahulnaitam_16",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "http://localhost:3001/static/media/krishna.03bb0ca74164932ac1fa.jpg"
    })
    setTweetMessage("");
    setTweetImage("");
  }

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetbox_input">
          <Avatar src={Image} />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening"
            type="text"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetbox_imageInput" placeholder="optional: Enter image URL">
        </input>
        <Button
          onClick={sendTweet}
          className="tweetBox_tweetButton">Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox 
