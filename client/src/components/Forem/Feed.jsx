import React from "react";
import forumBox from "./forumBox";
import forumPost from "./forumPost";

const Feed = ({ data }) => {
  return (
    <div className=" bg-gray-200 flex flex-col gap-2 flex-auto ">
      <forumBox />
      {data
        .slice(0)
        .reverse()
        .map((item) => {
          return <forumPost key={item._id} item={item} />;
        })}
    </div>
  );
};

export default Feed;
