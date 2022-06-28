import React from 'react'
import { Line } from 'react-chartjs-2'
import {Chart as ChartJS} from "chart.js/auto"
import styles from "./LineChart.module.css"
const LineChart = (props) => {
  return (

      <div className={props.id?styles.innerChartContainer:styles.innerChartContainer1}>
      {/* <div className={styles.text} >Hospital Survey</div> */}
      <Line
        data={{
          //all these data will come from props
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            {
              label: props.label,
              data: [120, 190, 100, 500, 200,50],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
              fill: {
                target: 'origin',
                above: 'rgb(155, 120,120)',   // Area will be red above the origin
                below: 'rgb(115, 17, 222)'    // And blue below the origin
              }

            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={400}
        width={400}
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

export default LineChart