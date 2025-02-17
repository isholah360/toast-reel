'use client';

import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { VideoItem } from './types';
import ProductTag from './ProductTag';
import VideoControls from './VideoControls';
import VideoDescription from './VideoDescription';

interface SingleVideoProps {
  video: VideoItem;
  isMuted: boolean;
  likedVideos: Set<number>;
  onLike: (videoId: number) => void;
  onShare: (videoId: number) => void;
  toggleMute: () => void;
}

declare global {
  interface Window {
    YT: typeof YT;
    onYouTubeIframeAPIReady: () => void;
  }
}

const SingleVideo = ({
  video,
  isMuted,
  likedVideos,
  onLike,
  onShare,
  toggleMute,
}: SingleVideoProps) => {
  const [showTags, setShowTags] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [playerReady, setPlayerReady] = useState(false);
  
  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  const validVideoUrl = video.videoUrl || null;
  const isYouTube = validVideoUrl && validVideoUrl.includes('youtube.com/watch');
  const videoId = validVideoUrl?.split('v=')[1];

  // Create a ref to store the YouTube player instance
  const playerInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (!isYouTube || !videoId) return;

    let loadingTimeout: NodeJS.Timeout;

    const loadYouTubeAPI = () => {
      return new Promise<void>((resolve) => {
        if (window.YT) {
          resolve();
          return;
        }

        window.onYouTubeIframeAPIReady = () => {
          resolve();
        };

        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
      });
    };

    const initializePlayer = async () => {
      try {
        await loadYouTubeAPI();

        playerInstanceRef.current = new window.YT.Player(`youtube-player-${video.id}`, {
          videoId: videoId,
          playerVars: {
            autoplay: inView ? 1 : 0,
            controls: 0,
            mute: isMuted ? 1 : 0,
            playsinline: 1,
            modestbranding: 1,
            loop: 1,
            playlist: videoId,
            origin: window.location.origin
          },
          events: {
            onReady: () => {
              setPlayerReady(true);
              setIsLoading(false);
              if (inView) {
                setIsPlaying(true);
              }
            },
            onStateChange: (event) => {
              setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
            },
            onError: () => {
              setError('Error loading video');
              setIsLoading(false);
            }
          }
        });
      } catch (error) {
        console.error('Error initializing YouTube player:', error);
        setError('Error initializing video player');
        setIsLoading(false);
      }
    };

    loadingTimeout = setTimeout(() => {
      if (isLoading) {
        setError('Loading timeout');
        setIsLoading(false);
      }
    }, 10000);

    initializePlayer();

    return () => {
      clearTimeout(loadingTimeout);
      if (playerInstanceRef.current) {
        playerInstanceRef.current.destroy();
      }
    };
  }, [video.id, videoId, isYouTube, inView, isMuted, isLoading]);

  const handlePlayPause = () => {
    if (!playerInstanceRef.current || !playerReady) return;

    try {
      if (isPlaying) {
        playerInstanceRef.current.pauseVideo();
      } else {
        playerInstanceRef.current.playVideo();
      }
    } catch (error) {
      console.error('Error controlling video:', error);
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    const timeoutId = setTimeout(() => setShowControls(false), 3000);
    return () => clearTimeout(timeoutId);
  };

  useEffect(() => {
    if (!playerInstanceRef.current || !playerReady) return;

    try {
      if (isMuted) {
        playerInstanceRef.current.mute();
      } else {
        playerInstanceRef.current.unMute();
      }
    } catch (error) {
      console.error('Error controlling volume:', error);
    }
  }, [isMuted, playerReady]);

  return (
    <div 
      className="relative h-screen snap-start"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setShowControls(false)}
      ref={videoContainerRef}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="text-white">Loading...</div>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="text-red-500">{error}</div>
        </div>
      )}

      <div ref={ref} className="relative w-full h-full">
        <div id={`youtube-player-${video.id}`} className="w-full h-full" />
      </div>

      <div className={`transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
        <VideoControls 
          isMuted={isMuted}
          toggleMute={toggleMute}
          isLiked={likedVideos.has(video.id)}
          likes={video.likes}
          onLike={() => onLike(video.id)}
          onShare={() => onShare(video.id)}
          isPlaying={isPlaying}
          onPlayPause={handlePlayPause}
        />
      </div>
      
      <VideoDescription description={video.description} />

      <div 
        className="absolute inset-0"
        onMouseEnter={() => setShowTags(true)}
        onMouseLeave={() => setShowTags(false)}
      >
        {showTags && Array.isArray(video.products) && video.products.length > 0 ? (
          video.products.map((product) => (
            <ProductTag key={product.id} product={product} />
          ))
        ) : null}
      </div>
    </div>
  );
};

export default SingleVideo;