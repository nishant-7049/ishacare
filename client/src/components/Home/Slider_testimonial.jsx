import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const data = [
  {
    id: 0,
    image: `/images/img (1).png`,
    name: `NEEL TC`,
    time: '3 months ago',
    review: `"Would definitely recommend if you are facing any musculoskeletal imbalance , pain related issue. Sir,Mam and whole staff here is HIGHLY skilled and you will get well customized treatment which is mix of modern physiotherapy exercises , yoga ,aerobics etc etc based one your issue. Special mention to ora around here which is highly unmatchable and can't be described but it will take no time for you to feel you came to right place. PS: Isha wellness center is truly a gift to the people of Ratlam by the vision seen by sir Nd mam."`,
  },
  {
    id: 1,
    image: `/images/img (2).png`,
    name: `KAVITA CHAWLA`,
    time: '2 years ago',
    review: `"I am KAVITA CHAWLA I lived in Ahmedabad I have back pain & foot pain for that I visited many doctors in Ratlam as well as in Ahmedabad but I don't get... read more"`,
  },
  {
    id: 2,
    image: `/images/img (3).png`,
    name: `SANJAY SONI`,
    time: '1 months ago',
    review: `"Best therapy centre with very nice atmosphere and careable staff.They cure my back pain in very less time."`,
  },
]

const Slider_testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    arrows: false,
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
  }
  return (
    <Slider className='slider' {...settings}>
      {data.map((item) => {
        return (
          <div key={item.id} className='text-white'>
            {item.name}
          </div>
        )
      })}
    </Slider>
  )
}

export default Slider_testimonial
