import React from 'react'
import { DualAxes } from '@ant-design/plots'


const DemoLine = ({ sales }) => {

    const config = {
        data: [sales, sales],
        smooth: true,
        padding: 'auto',
        xField: 'Date',
        yField: ['Product_Sold', 'Total_Sales'],
        geometryOptions: [
            {
                geometry: 'line',
                color: '#5B8FF9',
                point: {
                    size: 4,
                    shape: 'diamond',
                    color: '#38cbe1'
                },
            },
            {
                point: {
                    size: 4,
                    shape: 'circle',
                    color: '#6a8f97'
                },
                geometry: 'line',
                color: '#5AD8A6',
            },
        ],
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
        slider: {
            start: 0,
            end: 1,
        },
    }
    return (
        <>
            <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className='mb-0 p-1'>Sales Overview</h5>
                <div className="dropdown">
                    <span role="button" id="sales_overview" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi bi-three-dots-vertical align-center"></i>
                    </span>
                    <ul className="dropdown-menu" aria-labelledby="sales_overview">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>
            <div className="card-body">
                <DualAxes {...config} className="h-100 w-100" />
            </div>
        </>
    )
}

export default DemoLine
