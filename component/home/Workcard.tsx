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
const Workcard: React.FC<cardProp> = ({ item, index, onPlayChange }) => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const handlePlay = () => {
    setPlayingIndex(index);
    onPlayChange(true);
  };
  const handlePause = () => {
    setPlayingIndex(index);
    onPlayChange(false);
  };
  return (
    <div
      onMouseLeave={() => setPlayingIndex(null)}
      className={`ms-4 ${
        item.video_category === "full"
          ? "w-[280px] md:w-[500px]"
          : "md:w-[158px] w-[126px] "
      }  md:h-[281px]  h-[169px] relative `}
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
