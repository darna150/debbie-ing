import React from 'react';

const VideoLocal = (props) => {
  return (
    <>
      <video
        autoPlay
        muted
        playsInline
        loop
        type='video/mp4'
        src={props.src}
      ></video>
    </>
  );
};

export default VideoLocal;
