import React from 'react'

const Card = ({ name,percent,trainers}) => {

    const firstLetter = name.charAt(0).toUpperCase();
    return (
        <div className='w-[400px] h-[200px] rounded-md font-montserrat bg-gradient-header flex'>
            <div className='flex items-center justify-center w-[40%] h-full'>
                <div className='w-[100px] h-[100px] border-2 border-blue-900 rounded-full flex items-center justify-center text-3xl font-bold text-blue-900'>{firstLetter}</div>
            </div>
            <div className='flex items-start justify-center flex-col w-[60%] h-full'>
                <p className='font-semibold text-blue-900'>Institute :
                    <span className='font-semibold text-white'> {name}</span>
                </p>
                <p className='font-semibold text-blue-900'>Enagaged Percentage :
                <span className='font-semibold text-white'> {percent}%</span>
                </p>

                <p className='font-semibold text-blue-900'>No of Trainers :
                <span className='font-semibold text-white'> {trainers}</span>
                </p>
            </div>
        </div>
    )
}

export default Card