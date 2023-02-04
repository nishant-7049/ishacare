import React from "react";
import styled from "styled-components";

const data = [
  {
    id: 0,
    blogImg: "/images/process.jpg",
    senderName: "Sender1",
    sentDate: "15 jan 2020",
    blogText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus alias necessitatibus consequatur iure illum cum eos molestiae est consequuntur nisi!",
  },
  {
    id: 1,
    blogImg: "/images/process1.jpg",
    senderName: "Sender2",
    sentDate: "15 jan 2020",
    blogText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus alias necessitatibus consequatur iure illum cum eos molestiae est consequuntur nisi!",
  },
  {
    id: 2,
    blogImg: "/images/process2.jpg",
    senderName: "Sender3",
    sentDate: "15 jan 2020",
    blogText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus alias necessitatibus consequatur iure illum cum eos molestiae est consequuntur nisi!",
  },
  {
    id: 3,
    blogImg: "/images/process3.jpg",
    senderName: "Sender4",
    sentDate: "15 jan 2020",
    blogText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus alias necessitatibus consequatur iure illum cum eos molestiae est consequuntur nisi!",
  },
  {
    id: 4,
    blogImg: "/images/process4.jpg",
    senderName: "Sender5",
    sentDate: "15 jan 2020",
    blogText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus alias necessitatibus consequatur iure illum cum eos molestiae est consequuntur nisi!",
  },
  {
    id: 5,
    blogImg: "/images/process2.jpg",
    senderName: "Sender6",
    sentDate: "15 jan 2020",
    blogText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus alias necessitatibus consequatur iure illum cum eos molestiae est consequuntur nisi!",
  },
  {
    id: 6,
    blogImg: "/images/process1.jpg",
    senderName: "Sender7",
    sentDate: "15 jan 2020",
    blogText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus alias necessitatibus consequatur iure illum cum eos molestiae est consequuntur nisi!",
  },
];
const BlogPage = () => {
  return (
    <Container>
      <h1 className="main-head">Blogs</h1>
      <div className="card-con">
      {data.map((data) => {
        return (
            <div className="card" key={data.id}>
              <img src={data.blogImg} alt="" />
              <div className="blog-info">
                <h3 className="blog-head">{data.senderName}</h3>
                <p className="blog-date">{data.sentDate}</p>
              </div>
              <p className="blog-text">{data.blogText}</p>
              <a href="">
                <button>Read more.</button>
              </a>
            </div>
        );
    })}
    </div>
    </Container>
  );
};

export default BlogPage;

const Container = styled.div`
  .main-head {
    text-align: center;
  }
  .card-con{
    margin: 6rem auto;
    display: grid;
    width: 90%;
    grid-gap: 3rem;
    grid-template-columns: repeat(auto-fit, minmax(33%, 1fr));
    align-items: center; 
  }
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-top-width: 4px;
    border-bottom-width: 5px;
    border-left-width: 1px;
    border-right-width: 1px;
    border-top-color: #f480b1;
    border-bottom-color: #f480b1;
    border-left-color: black;
    border-right-color: black;
    border-style: solid;
    > img {
      width: 200px;
      height: 150px;
      object-fit: cover;
    }
    }
  }
  .blog-head {
    color: #f480b1;
    font-size: 2rem;
  }
  .blog-date {
    font-size: 10px;
    align-text: right:
  }
`;
