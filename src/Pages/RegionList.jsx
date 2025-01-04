import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ScoreCard from '../Components/ScoreCard';
import Card from '../Components/Card';
const RegionList = () => {
  const { regionName } = useParams()
  const displayName = regionName.charAt(0).toUpperCase() + regionName.slice(1);
  const navigate = useNavigate();
  return (
    <>
      <header className='font-monserrat w-[100vw] h-[50px]'>
        <button className='flex items-center gap-2 mx-3 my-3 space-x-1 text-blue-900' onClick={() => navigate(-1)} type='button'>
          <i class="fa-solid fa-arrow-right-from-bracket rotate-180"></i>
          <p className='font-semibold'>Back</p>
        </button>
      </header>
      <section className='flex items-center justify-between w-[95%] md:w-[90%] h-auto mx-auto'>
        <h1 className='text-3xl font-semibold text-blue-900'>{displayName} Status</h1>
        <ScoreCard />
      </section>
      <div className='flex items-center justify-center w-full h-auto mt-5'>
        <div className='grid w-auto h-auto grid-cols-1 gap-10 px-auto md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'>
          <Card name={"Name of the institute of technology"} percent={90} trainers={10}/>
          <Card name={"Name of the institute of technology"} percent={90} trainers={10}/>
          <Card name={"Name of the institute of technology"} percent={90} trainers={10}/>
          <Card name={"Name of the institute of technology"} percent={90} trainers={10}/>
        </div>
      </div>

    </>
  )
}

export default RegionList