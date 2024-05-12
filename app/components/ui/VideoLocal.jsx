import React from 'react';

const VideoLocal = (props) => {
  return (
    <>
      <video autoPlay muted loop controls={false}>
        <source src={props.src} type='video/mp4' />
      </video>
    </>
  );
};

export default VideoLocal;
