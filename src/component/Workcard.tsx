import React, { useState } from "react";
import ReactPlayer from "react-player";
interface cardProp {
  item: {
    video: string;
    img: string;
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
        url={item.video}
        controls
        width="100%"
        height="100%"
        playing={playingIndex === index}
        light={playingIndex !== index ? item.img : undefined}
        onClickPreview={handlePlay}
        onPlay={handlePlay}
        onPause={handlePause}
      />
    </div>
  );
};

export default Workcard;
