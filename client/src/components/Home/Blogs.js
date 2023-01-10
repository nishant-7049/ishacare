import React from "react";
import styled from "styled-components";
import SliderBlogs from "./Slider-blogs";

const Blogs = () => {
  return (
    <Container>
        <h2 className="blog-h">
          Blogs
        </h2>
        <p className="blog-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nesciunt nobis, laboriosam vitae iure laborum!
        </p>
        <div className="slides">
          <SliderBlogs />
        </div>
    </Container>
  );
};

export default Blogs;

const Container = styled.div`
  height: 90vh;
  margin: 2rem auto;
  padding: 2rem 0;

  .blog-h {
    color: #f4b9d2;
    text-align: center;
    margin: 1rem;

  }

  .blog-text {
    text-align: center;
    margin: 1rem;
  }

  .slides {
    margin: 12vh auto;
  }
    
`