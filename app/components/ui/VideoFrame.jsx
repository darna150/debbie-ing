import React from 'react';

const VideoFrame = (props) => {
  return (
    <>
      <iframe
        src={`https://player.vimeo.com/video/${
          props.videoID
        }?autoplay=1&loop=1&badge=0&autopause=0&${
          props?.background ? 'background=1' : null
        }&dnt=1&muted=1&player_id=0&app_id=58479`}
        allow='autoplay; fullscreen;'
        title={props.title}
        className='w-full aspect-video'
      ></iframe>
    </>
  );
};

export default VideoFrame;
