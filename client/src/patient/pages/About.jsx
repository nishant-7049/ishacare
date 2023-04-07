import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TechTeam from "../components/About/TechTeam";
import TherTeam from "../components/About/TherTeam";
import Achievement from "../components/About/Achievement";

const vision = `Our vision is a world where everyone has access to evidence based Integrative therapy and support, leading to a fulfilling pain-free life, with empowered patients taking control of their health and well-being.`;

const mission = `Our mission is to provide evidence-based, patient-centered therapy services that address the root cause of MsNDs and lifestyle-related NCDs. Through our holistic wellness model, we aim to empower patients with the tools and resources they need to achieve long-term health and wellness, regardless of their age, occupation, or economic status. We are committed to increasing awareness about the impact of musculoskeletal pain on other health conditions and providing accessible, sustainable, and cost-effective therapy solutions that promote patient empowerment and support patients in achieving their health goals.`;

const data = [
  {
    id: 1,
    img: "/images/1.png",
    desc: ` Healing hands, compassionate hearts - Join us on a journey towards wellness and a better life.`,
  },
  {
    id: 2,
    img: "/images/2.png",
    desc: ` The pursuit of wellness is not a means to an end, but a lifelong endeavor `,
  },
  {
    id: 3,
    img: "/images/3.png",
    desc: `Join us on our journey to empower communities and transform lives, one step at a time`,
  },
];

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { type: "spring", duration: 0.5, bounce: 0.5 },
      }}
    >
      <Container className="sm:my-20  ">
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showArrows={true}
          showIndicators={false}
          showThumbs={false}
          interval={3000}
        >
          {data.map((item) => {
            return (
              <div key={item.id} className={`hero container hero${item.id}`}>
                <div className="hero-con">
                  <h1 className="hero-head text-3xl font-extrabold">
                    ISHA Wellness Centre
                  </h1>
                  <p className="hero-para">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </Carousel>
        <section className="about mx-20 sm:mx-4">
          <div className="main md:flex-col sm:flex-col sm:h-fit">
            <img
              src="https://images.pexels.com/photos/5867730/pexels-photo-5867730.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <div className="about-text flex flex-col justify-between  gap-6 items-center   sm:text-center sm:mx-auto sm:h-fit sm:py-8 md:h-fit ">
              <div>
                <h5 className="text-3xl font-bold sm:flex sm:gap-1 w-fit">
                  Our Vision{" "}
                </h5>
                <p className="tracking-wide leading-relaxed text-justify text-md">
                  {vision}
                </p>
              </div>
              <div>
                <h5 className="text-3xl font-bold  sm:flex sm:gap-1 w-fit ">
                  Our Mission{" "}
                </h5>
                <p className="tracking-wide leading-relaxed text-justify text-md">
                  {mission}
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="mx-20 sm:mx-4">
          <Achievement />
        </div>
        <div className="founder">About Ishawellness Center</div>
        <div className="flex mx-20 sm:mx-4 bg-[#00286b] items-center gap-4 rounded-lg pr-12 sm:flex-col-reverse md:flex-col-reverse md:p-4 sm:p-4">
          <div className="papa text-md w-[70%] px-12 py-8 md:px-0  md:w-full">
            <p className="my-3 tracking-wide leading-relaxed text-justify">
              <span>Welcome to Isha Wellness Centre,</span> a place where we are
              committed to providing{" "}
              <span>evidence-based, patient-centered therapy services </span>{" "}
              that address the root cause of musculoskeletal and
              lifestyle-related disorders. Our goal is{" "}
              <span>to empower patients</span> with the knowledge, resources,
              and support they need to achieve long-term health and wellness,
              regardless of their age, occupation, or economic status. At Isha
              Wellness Centre, we believe in the power of{" "}
              <span>holistic wellness</span> and offer a range of services that
              address physical, emotional, and spiritual well-being. Our team of
              expert therapists is dedicated{" "}
              <span>to providing personalized care</span> to each patient,
              ensuring that they receive the best possible treatment for their
              unique needs.
            </p>
            <p className="my-3 tracking-wide leading-relaxed text-justify">
              We are proud to offer a wide range of services, including
              musculoskeletal{" "}
              <span>
                pain management, paralysis care, child therapy, pregnancy care,
                lifestyle management, balanced digestion, healthy aging,
                technology detoxification, employee wellness, relational
                well-being, depression and anxiety relief, financial well-being,
                and hormone balance therapy.
              </span>{" "}
              We also understand the importance of
              <span>community wellness</span> and have developed a program to
              make our therapy services accessible to as much of the population
              as possible. We believe that everyone should have access to
              high-quality healthcare and are committed to doing our part to
              improve the health and well-being of our community.{" "}
            </p>
            <p className="my-3 tracking-wide leading-relaxed text-justify">
              Thank you for choosing Isha Wellness Centre as your partner in
              health and wellness. We look forward{" "}
              <span>
                to helping you achieve your health goals and living your best
                life.
              </span>{" "}
            </p>
          </div>
          <div className="w-[30%] border-r-8 border-b-8 p-8 md:w-[90%]">
            <img
              className=""
              src="https://images.pexels.com/photos/5867730/pexels-photo-5867730.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="/"
            />
          </div>
        </div>

        <div className="founder ">Founder of Ishawellness Center</div>
        <p className="bade w-[80%] mx-auto text-center">
          Meet the{" "}
          <span>
            {" "}
            dynamic duo behind ISHA Wellness Centre, Dr. Minjan Patel and Dr.
            Hitesh Purohit.
          </span>{" "}
          As co-founders of Aarogyam Knowledge to Action Society (AKAS) and
          Healthprizm Pvt. Ltd. (HPL), they bring a wealth of knowledge and
          expertise to the table.
        </p>
        <p className="bade w-[80%] mx-auto text-center">
          Together, these two visionaries have a shared{" "}
          <span>
            goal of bringing evidence-based, patient-centered therapy services
            to everyone.
          </span>{" "}
          With their combined knowledge, experience, and commitment to community
          health, they are{" "}
          <span>
            leading the way in making holistic wellness accessible and
            achievable for all.
          </span>
        </p>
        <section className="hum mx-20 sm:mx-4 sm:py-4 sm:px-2">
          <div className="tum">
            <div className="job bg-[url(/images/bg/geometricBG.jpg)] bg-cover bg-center bg-fixed ">
              <img
                className="object-cover"
                src="https://images.pexels.com/photos/5867730/pexels-photo-5867730.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </div>
            <div className="kon tracking-wide leading-relaxed text-justify">
              <h5>Dr. Hitesh Purohit</h5>
              <div className="h-[10rem] pr-2 overflow-y-auto ">
                <p className="bade">
                  Meet <span>Dr. Hitesh Purohit,</span> our Founder Director and
                  President -
                  <span>
                    a visionary leader and passionate healthcare entrepreneur
                  </span>
                  dedicated to improving community health through technology-led
                  innovations. With a Bachelor's degree in Physical Therapy and
                  a Post-Graduation in Public Health, Dr. Purohit brings a
                  wealth of experience and expertise to his work at ISHA
                  Wellness Centre. He is a Founder Director of Healthprizm
                  Private Limited and Aarogyam Knowledge to Action Society. His
                  deep commitment{" "}
                  <span>
                    to creating need-based systems for community health has
                    driven him to develop effective, sustainable models that
                    make a real difference in people's lives.
                  </span>{" "}
                  Dr. Purohit's exceptional skills and unwavering dedication to
                  his work inspire us every day to continue striving for
                  excellence in the field of wellness.
                </p>
                <p className="bade">
                  Dr. Purohit's contributions to the development of various
                  innovative community models have been recognized and awarded
                  by many conferences. His work has been covered in various
                  regional and national newspapers and blogs, and he has
                  research publications to his credit. He has also worked on
                  various <span>technology-based health solutions</span> and
                  provides consultation to organizations such as{" "}
                  <span>
                    WHO, UNICEF, IIPHG, PHFI, local governments, and various
                    national and international NGOs.
                  </span>
                </p>
                <p className="bade">
                  As a trainer and mentor, Dr. Purohit has trained around{" "}
                  <span></span>1000 health workers and provided wellness and
                  therapy consultations to <span>20000</span> individuals. He
                  firmly believes in{" "}
                  <span>
                    effective solutions and systems, innovative tech-based
                    solutions, and self-sustainable systems.
                  </span>{" "}
                  Dr. Purohit's passion for improving community health through
                  technology-led innovations has made him a{" "}
                  <span>
                    true healthcare pioneer, and we are honored to have him as
                    the driving force behind our mission at ISHA Wellness Centre
                    and HPL.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="hum mx-20 sm:mx-4 sm:py-4 sm:px-2">
          <div className="tum">
            <div className="job bg-[url(/images/bg/geometricBG.jpg)] bg-cover bg-center bg-fixed ">
              <img
                className="object-cover"
                src="https://images.pexels.com/photos/5867730/pexels-photo-5867730.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </div>
            <div className="kon tracking-wide leading-relaxed text-justify">
              <h5>Dr. Minjan Patel</h5>
              <div className="h-[10rem] pr-2 overflow-y-auto ">
                <p className="bade">
                  <span>Dr. Minjan Patel,</span> our Founder Director and CEO,{" "}
                  <span>
                    is a true visiona dedicated to improving community
                  </span>{" "}
                  health through her research-based solutions and passion for
                  Healthy Community. With a Bachelor's degree in Occupational
                  Therapy, a post-graduation in Public Health, and a Master's in
                  Rural Development, Dr. Patel has honed her skills and
                  expertise to make a real difference in the health and
                  well-being of communities. She is the Founder Director of
                  Healthprizm Private limited and Aarogyam Knowledge to Action
                  Society - a non-profit platform.
                </p>
                <p className="bade">
                  Dr. Patel's passion for finding{" "}
                  <span>
                    research-based solutions to empower and uplift communities
                    and individuals is remarkable!
                  </span>
                  With her <span>inspiring vision</span> and{" "}
                  <span>tireless</span> dedication to improving community
                  health, Dr. Patel is a true champion of wellness and a source
                  of inspiration for all who work with her." She has contributed
                  to primary health care, women and adolescent health, and
                  midwifery practices with the{" "}
                  <span>
                    World Bank, WHO, and IIPHG at state, national, and
                    international levels.
                  </span>{" "}
                  She has provided consultation to remarkable public health
                  interventions and research with organizations like{" "}
                  <span>
                    UNICEF, IIPHG, PHFI, and various international and national
                    NGOs.
                  </span>
                </p>
                <p className="bade">
                  `Dr. Patel's experience in lifestyle management and wellness
                  industry is crucial to complete the wellness services. She has
                  trained over 1800 health workers and provided health education
                  to over <span>13000 women</span> and{" "}
                  <span>8000 non-school/school children and adolescents.</span>{" "}
                  Additionally, she has contributed to wellness services for{" "}
                  <span>8000+ community members</span> in urban and rural areas
                  of Gujarat and Madhya Pradesh.
                </p>
                <p className="bade">
                  <span>
                    With 15+ years of experience as a public health manager,
                    trainer, researcher, and health & wellness coach,
                  </span>{" "}
                  Dr. Patel has developed health modules for the Government of
                  India, Government of Gujarat, and various NGOs. Her
                  outstanding research contributions have led to better health
                  services, programs, and policies. She has been covered in
                  various international and national media channels, newspapers,
                  magazines, and blogs, and has published numerous research
                  papers. Dr. Patel has been awarded and appreciated in many
                  conferences for her work presentations, highlighting her
                  commitment to making a positive impact on the health and
                  well-being of communities.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-20 sm:mx-4">
          <h5 className="founder">Our Story</h5>
          <div className="tapa text-white rounded-lg p-8 bg-[#00286b] tracking-wide leading-relaxed text-justify sm:px-3">
            <p>
              <span>
                Our story began with a simple yet profound dream: to make
                therapy services accessible to all!
              </span>{" "}
              We have seen the struggles and challenges people face in accessing
              therapy care, particularly in rural and tribal areas of Gujarat
              and Madhya Pradesh. We knew we had to do something about it, and
              that's how ISHA Wellness Centre was born.
            </p>
            <p>
              We started by working{" "}
              <span>
                closely with the community, listening to their needs and
                concerns, and understanding the root cause of the problems
              </span>{" "}
              that require therapy care. We soon realized that the current
              treatment guidelines were outdated and needed to be revised. With
              our experience and expertise, we developed new treatment protocols
              that delivered extraordinary, sustainable results.
            </p>
            <p>
              As we <span>trained a few wellness workers</span> to execute our
              suggested treatment, we realized that there was still a high
              margin of error. So, we developed a basic training material and
              transformed it into a highly effective, scalable, and
              self-sustainable system with the help of{" "}
              <span>a mobile application.</span> We now have over{" "}
              <span>20 wellness workers taking care of patients</span> at four
              different locations, all thanks to this system.
            </p>
            <p>
              Through our work, we have conducted over{" "}
              <span>15,000 consultations and 60,000 therapy sessions,</span>,
              making a real difference in the lives of the people we serve. Our
              vision doesn't stop here - we're now working on a skill
              development model to create self-employed wellness workers across
              the globe.
            </p>
            <p>
              With a constant focus on using the latest technology and our{" "}
              <span>unwavering passion for helping others,</span> we
              persistently strive to improve our mobile application to provide
              even more effective supportive supervision and monitoring.{" "}
              <span>
                Our journey has been challenging, but also incredibly rewarding!
              </span>{" "}
              As we move forward, we're excited to{" "}
              <span>
                continue making a positive impact on the health and well-being
                of communities worldwide.
              </span>{" "}
              With the integration of cutting-edge AI and Machine Learning
              technologies, we are committed to revolutionizing therapy care and
              ensuring it's accessible to all.
            </p>
          </div>
        </section>
        <section className="mx-20 sm:mx-4">
          <h5 className="founder">
            Message from <span>founders</span>
          </h5>
          <div className="tapa text-white rounded-lg p-8 bg-[#00286b] tracking-wide leading-relaxed text-justify sm:px-3">
            <p>
              <span>
                Are you tired of feeling like you're at the mercy of your health
                issues?
              </span>{" "}
              Do you feel like you've tried everything to get relief from your
              symptoms, but nothing seems to work? It's understandable to feel
              frustrated and discouraged, but the truth is that the solution to
              your health problems may be closer than you think.
            </p>
            <p>
              At its core,{" "}
              <span>
                achieving optimal health is a journey that you must take charge
                of yourself!
              </span>{" "}
              While healthcare professionals can certainly provide guidance,
              treatment, and support, they can't do it all for you. True healing
              and wellness come from within, and it's up to you to take
              responsibility for your own health and wellbeing.
            </p>
            <p>
              This means taking <span>an active role in your health,</span> and
              seeking out the knowledge, tools, and support you need to achieve
              your wellness goals. It means understanding that treating symptoms
              is only a temporary fix, and that identifying and addressing the
              root causes of your health issues is{" "}
              <span>the key to long-term healing.</span>
            </p>
            <p>
              At times, this journey may feel overwhelming or challenging. There
              may be obstacles to overcome, and setbacks along the way. But it's
              important to remember that your health is worth the effort. By{" "}
              <span>
                making positive changes to your lifestyle, and seeking out
                support
              </span>{" "}
              from healthcare professionals, loved ones, and other resources,
              you can take control of your health and achieve the vibrant,
              healthy life you deserve.
            </p>
            <p>
              So if you're ready to take charge of your health and embark on the
              journey towards optimal wellness,{" "}
              <span>we encourage you to start today!</span>
              Remember,{" "}
              <span>
                it's not a quick fix or a one-time solution - it's an ongoing
                process that requires your active participation and commitment.
              </span>{" "}
              But with the right mindset, support, and resources, you can
              achieve your health goals and <span>live your best Life!</span>
            </p>
          </div>
        </section>
        <div className="mx-20 sm:mx-4">
          <TechTeam />
        </div>
        <div className="mx-20 sm:mx-4">
          <TherTeam />
        </div>
      </Container>
    </motion.div>
  );
};

export default About;

const Container = styled.div`
  .hero {
    height: 100vh;
    min-width: 100vw;
    margin-bottom: 30px;
    background-size: cover;
    background-position: top center;
    position: relative;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .hero1 {
    background-image: url(/images/1.png);
  }
  .hero2 {
    background-image: url(/images/2.png);
  }
  .hero3 {
    background-image: url(/images/3.png);
  }
  .hero-con {
    color: inherit;
    font-weight: 400;
    margin-left: 20px;
    z-index: 2;
    color: white;
    width: 42%;
    text-align: center;
  }
  .hero-con:hover {
    display: block;
  }
  .hero::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100vw;
    background-color: black;
    opacity: 0.5;
    z-index: -1;
  }
  .hero img {
    width: 100vw;
    position: absolute;
    top: 5px;
    left: 4px;
  }

  .hero-head {
    margin-bottom: 10px;
    color: #fff;
  }
  .hero-para {
    font-size: 15px;
    letter-spacing: 1px;
    word-spacing: 2px;
  }
  .carousel > .control-dots .dot {
    background: #00286b;
  }

  @media (max-width: 820px) {
    .container {
      max-height: 50vh;
    }

    .hero-con {
      font-weight: 400;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
      font-size: x-large;
      margin: auto;
      width: 95%;
      top: 25%;
      right: 0;
      left: 0;
    }

    .hero-para {
      font-size: large;
    }
  }

  @media (max-width: 480px) {
    .container {
      max-height: 50vh;
    }

    .hero-con {
      font-weight: 400;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
      font-size: 0.8rem;
      margin: auto;
      width: 95%;
      top: 25%;
      right: 0;
      left: 0;
    }

    .hero-para {
      font-size: 0.7rem;
    }
  }
  h1 {
    text-align: center;
    width: 100%;
    color: black;
    border-radius: 2px;
    margin-bottom: 2rem;
  }
  .about {
    margin-top: 4rem;
    padding: 2rem;
    background-color: #00286b;
    border-radius: 1rem;
  }
  .about img {
    width: 350px;
    box-shadow: 10px 13px white;
    padding:1rem;
  }

  .main {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 4rem;
  }

  
  .about-text h5 {
    color: white;
    border-bottom: 3px solid white;
    margin-bottom: 1rem;
  }
  .about-text p {
    color: white;
    font-weight: 500;
  }
  .founder {
    text-align: center;
    border-bottom: 3px solid black;
    font-size: 2rem;
    color: #00286b;
    width: 80%;
    font-weight: 800;
    margin-top: 5rem;
    margin-bottom: 2rem;
    margin-left: auto;
    margin-right: auto;
  }
  .hum {
    background-color:white;
    margin-top: 3rem;
    border-radius: .5rem;
    border: 1px solid #00286b;
    
  }
  .job {
    // width: fit-content;
    margin: 0 auto;
    // border-radius: 50%;
  }
  .tum img {
    margin: 0 auto;
    border-radius: 80%;
    height: 250px;
    width: 250px;
    box-shadow: 5px 10px 15px 8px rgba(0, 0, 0, 0.5);
    position: relative;
    top: 5rem;
  }
  .kon {
    padding: 5rem 2rem 2rem;
  }
  .kon h5 {
    font-weight: 800;
    margin: 1rem auto;
    width: fit-content;
    text-align: center;

    font-size: x-large;
    border-bottom: 3px solid #00286b;
  }

  
  .daada {
    text-align: center;
    font-size: 2rem;
    color: black;
    margin-top: 4rem;
    margin-bottom: 2rem;
  }
  .papa {
    width:80%;
    border-radius: 1rem;
  }

  .papa p {  
    color: white;
    font-weight; 2  00;
    }
  }
  .papa p span{
      font-weight: 800;
      color: white; 
  }
  .tapa p {
    padding: 0.7rem 2rem;
  }
  .tapa span {
    font-weight: 800;
  }
  .bade {
    color: gray;
  }
  .bade span  {
    color: black;
  }
  .ayush {
    margin-top: 3rem;
    width: 100%;
    background-color: rgb(172, 210, 245);
    border-radius: 1rem;
  }
  .ayush-papa {
    display: flex;
  }
  .ayush .baap p {
    font-size: medium;
    color: black;
    margin-left: 2rem;
    font-weight: 550;
  }
  .baap h5 {
    margin: 2rem;
    font-size: x-large;
    border-bottom: 3px solid black;
    width: 30%;
    border-color: green;
  }
  @media screen and (max-width: 480px){
    margin:4.6rem 0;
    .hum {
      padding: 1rem 0;
    }
    .main{
      gap: 0.8rem;
    }
    .about {
      padding: 0 0.5rem;
    }
    .about-text > h5 {
      margin: 0 auto 1rem;
    }
    .kon p {
      padding: 0 0.5rem;
      width: 100%;
    }
    .papa {
      width: 100%;
    }
    .papa h3 {
      padding: 1rem 0.5rem;
    }
    .tapa p {
      padding: 2rem 0;
    }
  }
`;
