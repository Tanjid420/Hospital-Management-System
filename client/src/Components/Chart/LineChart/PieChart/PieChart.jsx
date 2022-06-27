import React from "react";
import styles from "./PieChart.module.css"
import {Pie} from "react-chartjs-2"
import {Chart as ChartJS} from "chart.js/auto"
const PieChart=(props)=>{
    return(
    
        <div className={styles.PieChartContainer}>
            <Pie
            data={{
                labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [20,45,5,65,7],
      backgroundColor: ["yellow","green","red","blue","orange"]
    }
  ]
            }}
             height={props.height}
        width={props.width}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 35,
            },
          },
        }}
            />
        </div>
    )
}
export default PieChart;