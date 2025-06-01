'use client'
import React, { useState } from "react";
import ReactPlayer from "react-player";
import Modal from "react-modal";

// Set the app element for accessibility
Modal.setAppElement("#root");

interface CardProp {
  item: {
    video_link: string;
    thumbnail: string;
    video_category: string;
  };
}

const NewworkCard: React.FC<CardProp> = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className={`ms-4 ${
        item.video_category === "full"
          ? "w-[280px] md:w-[500px]"
          : "md:w-[158px] w-[96px]"
      }  md:h-[281px]  h-[169px] relative`}
    >
      <ReactPlayer
        url={item.video_link}
        controls
        width="100%"
        height="100%"
        light={item.thumbnail}
        onClickPreview={handleOpenModal}
      />

      {/* Modal for playing the video */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Video Player"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            padding: "0",
            border: "none",
            background: "none",
          },
        }}
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
