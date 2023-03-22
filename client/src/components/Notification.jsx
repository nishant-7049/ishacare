import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const notifications = [
  {
    id: 1,
    name: 'Request An Appointment',
    redirect: '/booknow',
    bottom: '2rem',
  },
  {
    id: 0,
    name: 'Have Some Questions',
    redirect: '/forem',
    bottom: '6rem',
  },
]

const Notification = () => {
  return (
    <div>
      {notifications.map((data) => {
        return (
          <motion.div
            key={data.id}
            initial={{ opacity: 0, x: -200 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { type: 'spring', duration: 1, bounce: 0.5 },
            }}
            exit={{
              opacity: 0,
              x: -200,
            }}
            className={`fixed text-white bg-[#4e77bd] py-2 px-4 rounded-full tracking-wide z-10 bottom-[${data.bottom}] left-10`}
          >
            <span className='animate-ping absolute w-4 h-4 rounded-full bg-red-600 top-0 right-0'></span>
            <Link to={data.redirect}>{data.name}</Link>
          </motion.div>
        )
      })}
    </div>
  )
}

export default Notification
