'use client';

import { Heart, Share2, Volume2, VolumeX, Play, Pause } from 'lucide-react';

interface VideoControlsProps {
  isMuted: boolean;
  toggleMute: () => void;
  isLiked: boolean;
  likes: number;
  onLike: () => void;
  onShare: () => void;
  isPlaying: boolean;
  onPlayPause: () => void;
}

const VideoControls = ({
  isMuted,
  toggleMute,
  isLiked,
  likes,
  onLike,
  onShare,
  isPlaying,
  onPlayPause
}: VideoControlsProps) => (
  <>
    {/* Center Play/Pause Button */}
    <button
      onClick={onPlayPause}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-300"
      aria-label={isPlaying ? 'Pause video' : 'Play video'}
    >
      {isPlaying ? (
        <Pause className="w-12 h-12 text-white" />
      ) : (
        <Play className="w-12 h-12 text-white" />
      )}
    </button>

    {/* Right Side Controls */}
    <div className="absolute bottom-4 right-4 flex flex-col space-y-4 items-center">
      <button
        onClick={onLike}
        className="p-2 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-300"
        aria-label={isLiked ? 'Unlike video' : 'Like video'}
      >
        <Heart
          className={`w-8 h-8 ${isLiked ? 'text-red-500 fill-red-500' : 'text-white'}`}
        />
        <span className="text-white text-xs">{likes}</span>
      </button>

      <button
        onClick={onShare}
        className="p-2 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-300"
        aria-label="Share video"
      >
        <Share2 className="w-8 h-8 text-white" />
      </button>

      <button
        onClick={toggleMute}
        className="p-2 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-300"
        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
      >
        {isMuted ? (
          <VolumeX className="w-8 h-8 text-white" />
        ) : (
          <Volume2 className="w-8 h-8 text-white" />
        )}
      </button>
    </div>
  </>
);

export default VideoControls;