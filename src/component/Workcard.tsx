import React, { useState } from "react";
import ReactPlayer from "react-player";
interface cardProp {
  item: {
    video_link: string;
    thumbnail: string;
    video_category: string;
  };
  index: number;
  onPlayChange: (isPlaying: boolean) => void;
}
const Workcard: React.FC<cardProp> = ({ item, index }) => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const handlePlay = () => {
    setPlayingIndex(index);
  };
  const handlePause = () => {
    setPlayingIndex(index);
  };
  return (
    <div
      // onMouseLeave={() => setPlayingIndex(null)}
      className="ms-4 md:w-[500px] md:h-[281px] w-[280px] h-[169px] relative"
    >
      <ReactPlayer
        url={item.video_link}
        controls
        width="100%"
        height="100%"
        playing={playingIndex === index}
        light={playingIndex !== index ? item.thumbnail : undefined}
        onClickPreview={handlePlay}
        onPlay={handlePlay}
        onPause={handlePause}
      />
    </div>
  );
};

export default Workcard;
