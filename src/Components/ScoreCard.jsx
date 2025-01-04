import React from 'react'

const ScoreCard = () => {
  return (
    <div className='flex justify-between px-5 py-6 space-x-5 rounded-md bg-gradient-header font-montserrat'>
        <div className='flex gap-5'>
            <h1 className='font-semibold text-white'>Pandas :</h1>
            <h1 className='font-semibold text-white'>1823</h1>
        </div>
        <div className='flex gap-5'>
            <h1 className='font-semibold text-white'>Fireducks :</h1>
            <h1 className='font-semibold text-white'>1823</h1>
        </div>
    </div>
  )
}

export default ScoreCard