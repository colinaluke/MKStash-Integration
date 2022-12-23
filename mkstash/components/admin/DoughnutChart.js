import React, { useContext } from 'react'
import { Pie, measureTextWidth } from '@ant-design/plots'
import CalendarPicker from './CalendarPicker'
import Api from '../../services/api'
import { DOUGHNUT_COLORS } from '../../utils/colors'
import ThemeContext from '../../utils/ThemeContext'
import styles from '../../styles/admin.utils.module.css'

const DemoPie = ({ orders, setOrdersStats }) => {

    const {theme} = useContext(ThemeContext)
    const colors = DOUGHNUT_COLORS[theme]()

    const renderStatistic = (containerWidth, text, style) => {
        const { width: textWidth, height: textHeight } = measureTextWidth(text, style)
        const R = containerWidth / 2 // r^2 = (w / 2)^2 + (h - offsetY)^2

        let scale = 1

        if (containerWidth < textWidth) {
            scale = Math.min(Math.sqrt(Math.abs(Math.pow(R, 2) / (Math.pow(textWidth / 2, 2) + Math.pow(textHeight, 2)))), 1)
        }

        const textStyleStr = `width:${containerWidth}px`
        return `<div style="${textStyleStr}font-size:${scale}emline-height:${scale < 1 ? 1 : 'inherit'}">${text}</div>`
    }

    const handleDateChange = async (values) => {

        // default
        if (values === null) {
            const res = await Api().get('/orders_stats', {
                params: {
                    startingDate: 1,
                    endingDate: 31,
                    startingMonth: "October",
                    endingMonth: "November",
                    startingYear: 2017,
                    endingYear: 2017
                }
            })
            setOrdersStats(res.data)
            return
        }

        const { dates, months, years } = values
        const res = await Api().get('/orders_stats', {
            params: {
                startingDate: dates[0],
                endingDate: dates[1],
                startingMonth: months[0],
                endingMonth: months[1],
                startingYear: years[0],
                endingYear: years[1]
            }
        })
        setOrdersStats(res.data)
    }


    const data = orders.data
    const config = {
        appendPadding: 10,
        data: data !== undefined ? data : [],
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.64,
        meta: {
            value: {
                formatter: (v) => `${v} ¥`,
            },
        },
        label: {
            type: 'inner',
            offset: '-50%',
            style: {
                textAlign: 'center',
            },
            autoRotate: false,
            content: '{value}',
        },
        legend: {
            layout: 'horizontal',
            position: 'top'
        },
        theme: {
            colors10: colors
        },
        statistic: {
            title: {
                offsetY: -4,
                customHtml: (container, view, datum) => {
                    const { width, height } = container.getBoundingClientRect()
                    const d = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2))
                    const text = datum ? datum.type : 'Total Orders'
                    return renderStatistic(d, text, {
                        fontSize: 28,
                    })
                },
            },
            content: {
                offsetY: 4,
                style: {
                    fontSize: '32px',
                },
                customHtml: (container, view, datum, data) => {
                    const { width } = container.getBoundingClientRect()
                    const text = datum ? `${datum.value}` : `${data.reduce((r, d) => r + d.value, 0)}`
                    return renderStatistic(width, text, {
                        fontSize: 32,
                    })
                },
            },
        },
        interactions: [
            {
                type: 'element-selected',
            },
            {
                type: 'element-active',
            },
            {
                type: 'pie-statistic-active',
            },
        ],
    }
    return (
        <>
            <div className="card-header d-flex justify-content-between align-items-center bg-primary">
                <h5 className='mb-0 p-1 text-white'>Order Status</h5>
                <div className="dropdown dropstart">
                    <span role="button" id="order_status" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi bi-three-dots-vertical align-center text-white"></i>
                    </span>
                    <ul className={`dropdown-menu ${styles['custom-triple-button-direction']}`} aria-labelledby="order_status">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>
            <div className="card-body">
                <div className='pb-2 border-bottom'>
                    <CalendarPicker handleDateChange={handleDateChange}></CalendarPicker>
                </div>
                <div className='pt-2'>
                    <Pie {...config} className="h-100 w-100" />
                </div>
            </div>
        </>
    )
}

export default DemoPie