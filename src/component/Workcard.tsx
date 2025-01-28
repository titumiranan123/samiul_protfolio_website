import React, { useState } from "react";
import ReactPlayer from "react-player";
interface cardProp {
  item: {
    video: string;
    img: string;
  };
  index: number;
}
const Workcard: React.FC<cardProp> = ({ item, index }) => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  return (
    <div className="ms-4 w-[500px] h-[281px] relative">
      <ReactPlayer
        url={item.video}
        controls
        width="100%"
        height="100%"
        playing={playingIndex === index}
        light={playingIndex !== index ? item.img : undefined}
        onClickPreview={() => setPlayingIndex(index)}
        onPlay={() => setPlayingIndex(index)}
        onPause={() => setPlayingIndex(null)}
      />
    </div>
  );
};

export default Workcard;
