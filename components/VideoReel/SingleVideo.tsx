'use client';

import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import ProductTag from './ProductTag';
import VideoControls from './VideoControls';
import VideoDescription from './VideoDescription';
import { VideoItem } from './type';  // Correct import

interface SingleVideoProps {
  video: VideoItem;
  isMuted: boolean;
  likedVideos: Set<number>;
  onLike: (videoId: number) => void;
  onShare: (videoId: number) => void;
  toggleMute: () => void;
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
  const playerRef = useRef<YT.Player | null>(null);

  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  const validVideoUrl = video.videoUrl || undefined;
  const isYouTube = validVideoUrl && validVideoUrl.includes('youtube.com/watch');
  const videoId = validVideoUrl?.split('v=')[1];

  useEffect(() => {
    if (!isYouTube) return;

    // Load YouTube IFrame API
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = initPlayer;
    } else {
      initPlayer();
    }

    function initPlayer() {
      playerRef.current = new window.YT.Player(`youtube-iframe-${video.id}`, {
        videoId: videoId,
        playerVars: {
          autoplay: inView ? 1 : 0,
          controls: 0,
          mute: isMuted ? 1 : 0,
          playsinline: 1,
          modestbranding: 1,
          loop: 1,
          playlist: videoId
        },
        events: {
          onReady: () => {
            setIsLoading(false);
            if (inView) {
              setIsPlaying(true);
            }
          },
          onStateChange: (event: YT.OnStateChangeEvent) => {
            setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
          },
          onError: () => {
            setError('Error loading video');
            setIsLoading(false);
          }
        }
      });
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [video.id, videoId, isYouTube, inView, isMuted]);

  const handlePlayPause = () => {
    if (!playerRef.current) return;

    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
    setIsPlaying(!isPlaying);
  };

  const handleMouseMove = () => {
    setShowControls(true);
    const timeoutId = setTimeout(() => setShowControls(false), 3000);
    return () => clearTimeout(timeoutId);
  };

  useEffect(() => {
    if (!playerRef.current) return;

    if (isMuted) {
      playerRef.current.mute();
    } else {
      playerRef.current.unMute();
    }
  }, [isMuted]);

  return (
    <div
      className="relative h-screen snap-start"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setShowControls(false)}
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

      {isYouTube ? (
        <div ref={ref} className="relative w-full h-full">
          <div id={`youtube-iframe-${video.id}`} className="w-full h-full" />
        </div>
      ) : (
        <video
          ref={ref}
          className="w-full h-full object-cover"
          loop
          muted={isMuted}
          autoPlay={inView}
          playsInline
          poster="https://via.placeholder.com/400x720"
        >
          <source src={validVideoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

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
