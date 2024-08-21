import React from 'react'
import "./Widgets.css";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import Search from '@mui/icons-material/Search';

function Widgets() {
  return (
    <div className='widgets'>
      <div className="widget_input">
        <Search className="widget_SearchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets_widgetContainer">
        <h2>What's happening</h2>

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="rahulnaitam_16"
          options={{ height: 400 }}
        />
        <TwitterTweetEmbed
          tweetId={'933354946111705097'}
        />
        <TwitterShareButton
          url={'https://facebook.com/rahulnaitam'}
          options={{ text: '#reactjs is awesome', via: 'rahulnaitam_16' }}
        />
        <TwitterMentionButton
          screenName={'rahulnaitam_16'}
        />

        <TwitterFollowButton
          screenName={'rahulnaitam_16'}
        />
        <TwitterMomentShare
          momentId={'650667182356082688'}
        />
        <TwitterDMButton
          id={1364031673}
        />
        <TwitterVideoEmbed
          id={'560070183650213889'}
        />
        <TwitterOnAirButton
          id={'560070183650213889'}
        />
      </div>
    </div>
  );
}

export default Widgets
