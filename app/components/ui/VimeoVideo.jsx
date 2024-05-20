'use client';
import React, { useEffect, useRef, useState } from 'react';
import Player from '@vimeo/player';

const VimeoVideo = (props) => {
  const iframeRef = useRef(null);
  const playerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

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

    player.on('loaded', () => {
      setIsLoading(false);
    });

    return () => {
      observer.unobserve(iframe);
      playerRef.current = null;
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src={`https://player.vimeo.com/video/${
        props.videoID
      }?autoplay=0&loop=1&badge=0&autopause=0&${
        props?.background ? 'background=1' : null
      }&dnt=1&muted=1&player_id=0&app_id=58479`}
      loading='lazy'
      allow='autoplay; fullscreen;'
      className={`w-full
      ${
        isLoading
          ? props.whiteBG
            ? 'bg-neutral-200/75 animate-pulse'
            : 'bg-white/75 animate-pulse'
          : ''
      }
      ${props.aspectRatio ? props.aspectRatio : 'aspect-video'}`}
    ></iframe>
  );
};

export default VimeoVideo;
