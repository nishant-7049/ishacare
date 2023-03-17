import React, { useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const QuestionButton = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const close = <AiFillCloseSquare className="text-2xl text-[#f480b1]" />;
  return (
    <div className="p-8  bg-white h-[10rem] flex flex-col justify-between items-center shadow-xl sticky top-[8rem]   sm:relative sm:top-0 ">
      <p>Click to ask Question</p>
      <button
        className="bg-[#f480b1] p-3 rounded-3xl text-white"
        onClick={() => setIsModelOpen(true)}
      >
        Add Question
      </button>
      <Modal
        open={isModelOpen}
        closeIcon={close}
        onClose={() => setIsModelOpen(false)}
        closeOnEsccenter
        closeOnOverlayClick={false}
        styles={{
          overlay: {
            height: "auto",
          },
        }}
      >
        <div className="h-[500px] w-[700px] flex flex-col justify-around sm:h-[250px] sm:w-[280px]">
          <h5  className="text-2xl border-b border-1 border-[#6d6d6d]">
            Add Question
          </h5>
          <div className="flex flex-col">
            <RxAvatar className="text-3xl text-[#f480b1]" />
            <input
              className="bg-white mt-2 p-2"
              type="text"
              placeholder="Start your question with 'What', 'How', 'Why' etc"
            />
          </div>
          <div className="flex flex-col gap-5 items-center">
            <button
              className="w-[50%] bg-[#f480b1] rounded-xl  py-2 text-white"
              onClick={() => {
                setIsModelOpen(false);
              }}
            >
              Add Question
            </button>
            <button
              className="w-[50%] bg-[#f480b1] rounded-xl py-2 text-white"
              onClick={() => {
                setIsModelOpen(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default QuestionButton;
