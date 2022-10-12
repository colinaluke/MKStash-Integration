import React from 'react'
import { Line } from '@ant-design/plots'
import data from '../../lib/sales.json'


const DemoLine = () => {
      
    
    const config = {
        data,
        smooth: true,
        padding: 'auto',
        xField: 'Date',
        yField: 'Product_Sold',
        xAxis: {
            tickCount: 12,
            title: {
                text: "Year",
                style: {
                    fontSize: 16,
                }
            }
        },
        yAxis: {
            title: {
                text: "Number of Products",
                style: {
                    fontSize: 16,
                }
            }
        },
        point: {
            size: 4,
            shape: 'diamond',
            color: 'red'
        },
        slider: {
            start: 0.5,
            end: 1,
        },
    }
    return (
        <>
            <div className="card-header"><h5 className='mb-0'>Sales Overview</h5></div>
            <div className="card-body">
                <Line {...config} className="h-100 w-100" />
            </div>
        </>
    )
}

export default DemoLine
