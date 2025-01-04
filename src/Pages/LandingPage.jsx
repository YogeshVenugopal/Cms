import React from 'react';
import Header from '../Components/Header';
import Chart from '../Components/Chart';
import ScoreCard from '../Components/ScoreCard';


const LandingPage = () => {
  return (
    <>
      <Header />
      <div className="w-full h-auto min-h-[calc(100vh-100px)] flex flex-col lg:flex-row">

        <div className="flex flex-col items-center justify-around w-full h-auto gap-12 p-4 lg:w-1/2">
          <Chart size={400} data={[90, 10]} text="Overall Engagement Score" />
          <ScoreCard />
        </div>

        <div className='flex items-center justify-center w-full h-auto lg:w-1/2'>
          <div className="grid w-auto h-auto grid-cols-1 gap-20 p-20 md:grid-cols-2">  
            <Chart size={300} data={[90, 10]} text="North" />
            <Chart size={300} data={[90, 10]} text="East" />
            <Chart size={300} data={[90, 10]} text="West" />
            <Chart size={300} data={[90, 10]} text="South" />
          </div>
        </div>

      </div>
    </>
  );
};

export default LandingPage;
