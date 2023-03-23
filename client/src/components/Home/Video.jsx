import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const video = [
  {
    id: 0,
    title: "IWC 15 Aug",
    emb: (
      <iframe
        width="400"
        height="250"
        src="https://www.youtube.com/embed/DWIghVp17so"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    id: 1,
    title: "Isha Wellness Centre",
    emb: (
      <iframe
        width="400"
        height="250"
        src="https://www.youtube.com/embed/S3VAcGIiMNw"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    id: 2,
    title: "Mujhko thik karega kon",
    emb: (
      <iframe
        width="400"
        height="250"
        src="https://www.youtube.com/embed/m2uxzxlKm5Q"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    id: 3,
    title: "Me Gym jau ya na jau",
    emb: (
      <iframe
        width="400"
        height="250"
        src="https://www.youtube.com/embed/jSgg3CvlX5c"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    id: 4,
    title: "Isha Wellness Centre Cartoon- Ra2",
    emb: (
      <iframe
        width="400"
        height="250"
        src="https://www.youtube.com/embed/yZuMWNouA2A"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    ),
  },
];
const Video = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          dots: false,
          arrows: false,
          pauseOnHover: false,
        },
      },
    ],
  };
  return (
    <div className="mx-auto px-20 py-12 mt-8 mb-16 bg-gray-200">
      <h2 className=" text-3xl mb-8 mx-auto capitalize text-[#50acfb] text-center">
        Youtube Content
      </h2>
      <Slider {...settings}>
        {video.map((video) => (
          <div className="">{video.emb}</div>
        ))}
      </Slider>
    </div>
  );
};

export default Video;
