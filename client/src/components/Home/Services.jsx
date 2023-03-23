import React, { useEffect } from "react";
import styled from "styled-components";
import ServicesCards from "./ServicesCards";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Process = () => {
<<<<<<< HEAD
  const { ref, inView } = useInView({ threshold: 0.3 });
  const animation = useAnimation();
=======
  const { ref, inView } = useInView({ threshold: 0.3 })
  const animation = useAnimation()
>>>>>>> 43dc05d3a423a1c9113adf70e2c14e4597398ede

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
    }
  }, [inView]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 100 }} animate={animation}>
      <Container className="process">
        <h2 className="text-3xl text-white">Our Services</h2>
        <ServicesCards />
      </Container>
    </motion.div>
  );
};

export default Process;

const Container = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 3rem 0;
  padding-bottom: 0;

  h2 {
    text-align: center;
    margin-bottom: 1rem;
    // color: #50acfb;
    text-transform: capitalize;
  }

  .con-para {
    max-width: 70%;
    margin: 0 20%;
    text-align: center;
    margin-bottom: 2rem;
  }
`;
