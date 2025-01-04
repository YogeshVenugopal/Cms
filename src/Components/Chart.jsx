import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';


ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ size, data: chartData, text }) => {

  const navigate = useNavigate();
  const handleClick = () => {

    const regionName = text.trim().toLowerCase();
    console.log(regionName, 'Chart clicked');
    if (regionName.length < 9) {
      navigate(`/region/${regionName}`);
    }
  }

  const data = {
    labels: ['Engaged', 'Not Engaged'],
    datasets: [
      {
        data: chartData,
        backgroundColor: [
          'rgba(22,163,74,1)',
          'rgba(220,38,38,1)'
        ],
        borderColor: [
          'rgba(22,163,74,1)',
          'rgba(220,38,38,1)'
        ],
        borderWidth: 1,

      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: 'white',
          font: {
            size: 14,
            family: 'Montserrat,sans-serif',
          }
        }
      },
      title: {
        display: true,
        text: 'Engagement Score',
      },
    },
  };

  const containerStyle = {
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: '0.375rem',
  };

  return (
    <div style={containerStyle} onClick={handleClick} className='bg-gradient-header px-[20px] py-[30px] relative'>
      <Doughnut data={data} options={options} />
      <h1 className={size == '400' ? `absolute w-[30px] flex font-bold text-white text-center top-[38%] left-[36%]` : `absolute flex font-bold text-white text-center transform top-[37%] left-[40%]`}>{text}</h1>
    </div>
  );
};

export default Chart;
