import { useState } from 'react'
import { DatePicker, Space, Select } from 'antd'
import styles from '../../styles/admin.utils.module.css'
const { RangePicker } = DatePicker

const { Option } = Select

const STRING_MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

const PickerWithType = ({ type, onChange }) => {
    if (type === 'date') return <RangePicker onChange={onChange} popupClassName={styles['test']} />
    return <RangePicker picker={type} onChange={onChange} popupClassName={styles['test']}/>
}

const CalendarPicker = ({handleDateChange}) => {

    const [type, setType] = useState('date')

    const parseDate = (values) => {
        if (values === null) return handleDateChange(null)

        const dates = [values[0]._d.getDate(), values[1]._d.getDate()]
        const months = [STRING_MONTHS[values[0]._d.getMonth()], STRING_MONTHS[values[1]._d.getMonth()]]
        const years = [values[0]._d.getFullYear(), values[1]._d.getFullYear()]
        
        return handleDateChange({dates, months, years})
    }

    return (
        <Space size={12}>
            <Select value={type} onChange={setType}>
                <Option value="date">Date</Option>
                <Option value="month">Month</Option>
                <Option value="year">Year</Option>
            </Select>
            <PickerWithType type={type} onChange={parseDate}/>
        </Space>
    )
}

export default CalendarPicker