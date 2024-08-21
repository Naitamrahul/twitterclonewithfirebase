import React from 'react'
import "./Feed.css";
import Post from "./Post";
import TweetBox from './TweetBox';

function Feed() {
  return (
    <div className="feed">
      <div className="feed_headre">
        {/* Home*/}
        <h2>Home</h2>
      </div>
      {/* tweetbox*/}
      <TweetBox />

      {/* post*/}
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default Feed
