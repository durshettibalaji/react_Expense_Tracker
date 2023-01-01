
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

ChartJS.register(ArcElement, Tooltip, Legend);



export default function PieChart() {
const state=useSelector(state=>state);
console.log(state.obj.total);
     const data = {
        labels: ['Basic_needs', 'luxury',"self_development","un defined"],
        datasets: [
          {
            label: 'amount',
            data: [state.obj.Basic_needs,state.obj.luxury,state.obj.self_development,state.obj.undef],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              
            ],
            borderWidth: 1,
          },
        ],
      };
      
    return( 
    <div className="style">
    <Pie data={data} />;
    </div>
    )
}
