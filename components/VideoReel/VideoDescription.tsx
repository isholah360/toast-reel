'use client';

interface VideoDescriptionProps {
  description: string;
}

const VideoDescription = ({ description }: VideoDescriptionProps) => (
  <div className="absolute bottom-4 left-4 text-white">
    <p className="text-sm font-medium">{description}</p>
  </div>
);

export default VideoDescription;