"use client";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import Modal from "./Modal"; // Adjust path as needed

interface CardProp {
  item: {
    video_link: string;
    thumbnail: string;
    video_category: string;
  };
}

const NewworkCard: React.FC<CardProp> = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div
      className={` overflow-hidden w-[280px] md:w-[588px] md:h-[331px] h-[169px] relative rounded-[12px] mx-auto`}
    >
      <ReactPlayer
        url={item.video_link}
        controls
        width="100%"
        height="100%"
        light={item.thumbnail}
        onClickPreview={handleOpenModal}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        contentLabel="Video Player"
      >
        <ReactPlayer
          url={item.video_link}
          controls
          width="800px"
          height="450px"
          playing={isModalOpen}
        />
      </Modal>
    </div>
  );
};

export default NewworkCard;
