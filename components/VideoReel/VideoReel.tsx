'use client';

import { useState } from 'react';
import { DUMMY_VIDEOS, VideoItem } from './types';  // Correct import
import SingleVideo from './SingleVideo';

const VideoReel = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [likedVideos, setLikedVideos] = useState<Set<number>>(new Set());

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleLike = (videoId: number) => {
    setLikedVideos((prev) => {
      const newLiked = new Set(prev);
      if (newLiked.has(videoId)) {
        newLiked.delete(videoId);
      } else {
        newLiked.add(videoId);
      }
      return newLiked;
    });
  };

  const shareVideo = (videoId: number) => {
    alert(`Sharing video ${videoId}`);
  };

  if (!Array.isArray(DUMMY_VIDEOS) || DUMMY_VIDEOS.length === 0) {
    return <p>No videos available</p>;
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-md mx-auto relative">
        {DUMMY_VIDEOS.map((video: VideoItem) => (
          <SingleVideo
            key={video.id}
            video={video}
            isMuted={isMuted}
            likedVideos={likedVideos}
            onLike={toggleLike}
            onShare={shareVideo}
            toggleMute={toggleMute}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoReel;
