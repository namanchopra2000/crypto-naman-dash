import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart, ChartJS } from 'chart.js/auto'
import covertNumber from "../../../functions/convertNumber"



function LineChart({ chartData, multiAxis }) {
    const options = {
        plugins: {
            legend: {
                display: multiAxis  ? true : false,
            },
        },
        responsive: true,
        interaction: {
            mode: "index",
            intersect: false,
        },
        scales: multiAxis == true ? ({crypto1 : {
            type: "linear",
            display: "true",
            position: "left",
            ticks: {
                // Include a dollar sign in the ticks
                callback: function (value, index, ticks) {
                    return 'Rs ' + covertNumber(value);
                }
            }
        },  crypto2: {
            type: "linear",
            display: "true",
            position: "right",
            ticks: {
                // Include a dollar sign in the ticks
                callback: function (value, index, ticks) {
                    return 'Rs ' + covertNumber(value);
                }
            }
        }
    }) : ({crypto1: {
             
                    ticks: {
            // Include a dollar sign in the ticks
            callback: function(value, index, ticks) {
                return 'Rs ' + covertNumber(value);
            }
        }
    }
})
 }
return <div>
    <Line data={chartData} options={options} />
</div>
}

export default LineChart
