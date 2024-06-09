import { useState } from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart, CategoryScale, LineController, LineElement, PointElement, RadarController, RadialLinearScale, Title, Tooltip } from 'chart.js';

const RadarChart = () => {
  Chart.register(
    CategoryScale,
    LineController,
    LineElement,
    PointElement,
    RadarController,
    RadialLinearScale,
    Title,
    Tooltip
  );

  const chartData = {
    labels: [
      'Candidate data of birth',
      'Candidate first Name',
      'Candidate last name',
      'Candidate email address',
      'Candidate phone number',
      'Work job title',
      'Work organisation',
      'Work start date',
      'Work end date',
      'Education accreditation',
      'Education organisation',
      'Education End Date',
    ],
    datasets: [
      {
        label: 'Asva Al',
        data: [10, 10, 10, 10, 10, 9, 9, 9, 9, 9, 9, 9],
        backgroundColor: 'rgba(148, 0, 211, 0.2)',
        borderColor: 'rgba(99, 34, 216, 1)', /* blue*/
        borderWidth: 0.89,
      },
      {
        label: 'Competitor 1',
        data: [9.5, 8.58, 8.2, 9.7, 8, 7.5, 8.27 , 8.27, 8.27, 8.27, 8.27, 8.27],
        backgroundColor: 'rgba(0, 128, 0, 0.2)',
        borderColor: 'rgba(0, 125, 0, 1)', /* green*/
        borderWidth: 0.89,
      },
      {
        label: 'Competitor 2',
        data: [9.5, 9, 9, 9.7, 8, 5.74, 7.87, 8, 8, 8, 8, 8],
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        borderColor: 'rgba(251, 86, 140, 1)', /* pink*/
        borderWidth: 0.89,
      },
      {
        label: 'Competitor 3',
        data: [9.5, 8.7, 8.6, 9.7, 9.48, 5.46, 4.25, 4.25, 3.5, 3.79, 5.7,3.79],
        backgroundColor: 'rgba(165, 42, 42, 0.2)',
        borderColor: 'rgba(197, 70, 0, 1)',/* brown*/
        borderWidth: 0.89,
      },
    ],
  };

  return (
    <div className='flex justify-center items-center w-full h-full'>
      <Radar data={chartData} />
    </div>
  );
};

export default RadarChart;