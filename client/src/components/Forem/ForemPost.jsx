import React, {useState} from "react";
import { RxAvatar } from "react-icons/rx";
import {AiOutlineArrowUp , AiOutlineArrowDown, AiFillCloseSquare} from "react-icons/ai"
import {BiCommentDetail} from "react-icons/bi"
import Modal from 'react-responsive-modal'

const ForemPost = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const close = <AiFillCloseSquare className="text-2xl text-[#f480b1]" />;
  return (
    <div className=" py-3 px-5 mb-[2rem]  bg-white shadow-lg flex flex-col gap-4">
      <div className="flex gap-4 items-center ">
        <RxAvatar className="text-3xl text-[#f480b1]" />
        <p className="text-xs text-[#f480b1]">UserName1</p>
        <small className="text-xs text-[#f480b1]">Timestamp</small>
      </div>
      <div className="flex justify-between">
        <p>This is your question?</p>
        <button className="bg-[#f480b1] px-3 py-2 text-white font-extrabold rounded-3xl">Answer</button>
        <Modal
          classNames=" h-[80vh] w-[80vw]"
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

        </Modal>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex gap-4 bg-gray-300 p-2 rounded-3xl">
            <AiOutlineArrowUp className="text-xl mr-8"/>
            <AiOutlineArrowDown className="text-xl mr-8"/>
        </div>
            <BiCommentDetail className="text-xl " />
      </div>
      <p className="text-xs text-gray-500">Answer 1</p>
      <hr/>
      <hr/>
      <div className=" answer px-10 flex flex-col gap-4">
      <div className="flex gap-4 items-center ">
        <RxAvatar className="text-3xl text-[#f480b1]" />
        <p className="text-xs text-[#f480b1]">UserName1</p>
        <small className="text-xs text-[#f480b1]">Timestamp</small>
      </div>
      <p >This is my Answer.</p>
      </div>
    </div>
  );
};

export default ForemPost;
