import React from 'react'

const QuestionButton = () => {
  return (
    <div className='p-8  bg-white h-[10rem] flex flex-col justify-between items-center shadow-xl sticky top-[8rem] bottom-0 md:hidden'>
        <p>Click to ask Question</p>
        <button className='bg-[#f480b1] p-3 rounded-3xl text-white'>Add Question</button>
    </div>
  )
}

export default QuestionButton