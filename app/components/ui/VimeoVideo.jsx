'use client';
import React, { useEffect, useRef } from 'react';
import Player from '@vimeo/player';

const VimeoVideo = (props) => {
  const iframeRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    const player = new Player(iframe);
    playerRef.current = player;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          player.play().catch((error) => {
            console.error('Error playing video:', error);
          });
        } else {
          player.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    observer.observe(iframe);

    return () => {
      observer.unobserve(iframe);
      playerRef.current = null;
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      loading='lazy'
      src={`https://player.vimeo.com/video/${
        props.videoID
      }?autoplay=1&loop=1&badge=0&autopause=0&${
        props?.background ? 'background=1' : null
      }&dnt=1&muted=1&player_id=0&app_id=58479`}
      allow='autoplay; fullscreen;'
      title={props.title}
      className={`w-full
      ${props.aspectRatio ? props.aspectRatio : 'aspect-video'}`}
    ></iframe>
  );
};

export default VimeoVideo;
