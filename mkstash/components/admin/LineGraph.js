import React, { useContext } from 'react'
import { DualAxes } from '@ant-design/plots'
import CalendarPicker from './CalendarPicker'
import { Empty } from 'antd'
import Api from '../../services/api'
import { LINE_COLORS } from '../../utils/colors'
import ThemeContext from '../../utils/ThemeContext'
import styles from '../../styles/admin.utils.module.css'


const DemoLine = ({ sales, setSalesStats }) => {

    const {theme} = useContext(ThemeContext)
    const {color1, color2, color3, color4} = LINE_COLORS[theme]()


    const handleDateChange = async (values) => {

        // default
        if (values === null) {
            const res = await Api().get('/sales_stats', {
                params: {
                    startingDate: 1,
                    endingDate: 31,
                    startingMonth: "January",
                    endingMonth: "December",
                    startingYear: 2010,
                    endingYear: 2017
                }
            })
            setSalesStats(res.data)
            return
        }

        const { dates, months, years } = values
        const res = await Api().get('/sales_stats', {
            params: {
                startingDate: dates[0],
                endingDate: dates[1],
                startingMonth: months[0],
                endingMonth: months[1],
                startingYear: years[0],
                endingYear: years[1]
            }
        })
        setSalesStats(res.data)
    }

    const config = {
        data: [sales.data, sales.data],
        smooth: true,
        padding: 'auto',
        xField: 'Date',
        yField: ['Product_Sold', 'Total_Sales'],
        geometryOptions: [
            {
                geometry: 'line',
                color: color1,
                point: {
                    size: 4,
                    shape: 'diamond',
                    color: color2
                },
            },
            {
                point: {
                    size: 4,
                    shape: 'circle',
                    color: color3
                },
                geometry: 'line',
                color: color4,
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
            <div id="sales-overview" className="card-header d-flex justify-content-between align-items-center bg-primary">
                <h5 className='mb-0 p-1 text-white'>Sales Overview</h5>
                <div className='d-flex align-items-center justify-content-between'>
                    <CalendarPicker handleDateChange={handleDateChange}></CalendarPicker>
                    <div className="dropdown dropstart ms-4">
                        <span role="button" id="sales_overview" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-three-dots-vertical align-center text-white"></i>
                        </span>
                        <ul className={`dropdown-menu ${styles['custom-triple-button-direction']}`} aria-labelledby="sales_overview">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="card-body">
                { 
                    sales.data.length != 0 ? <DualAxes {...config} className="h-100 w-100" /> : 
                    <div className='d-flex align-items-center justify-content-center h-100'>
                        <Empty></Empty>
                    </div>
                }
            </div>
        </>
    )
}

export default DemoLine
