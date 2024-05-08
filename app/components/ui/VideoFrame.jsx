import React from 'react';

const VideoFrame = (props) => {
  return (
    <iframe
      src={`https://player.vimeo.com/video/${props.videoID}?autoplay=1&amp;loop=1&amp;badge=0&amp;autopause=0&amp;muted=1&amp;player_id=0&amp;app_id=58479`}
      frameborder='0'
      allow='autoplay; fullscreen;'
      title={props.title}
      className='w-full aspect-video'
    ></iframe>
  );
};

export default VideoFrame;
