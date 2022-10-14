import { useState } from 'react'
import { DatePicker, Space, Select } from 'antd'
const { RangePicker } = DatePicker

const { Option } = Select

const PickerWithType = ({ type, onChange }) => {
    if (type === 'date') return <RangePicker onChange={onChange} />
    return <RangePicker picker={type} onChange={onChange} />
}



const CalendarPicker = () => {

    const [type, setType] = useState('date')

    return (
        <Space size={12}>
            <Select value={type} onChange={setType}>
                <Option value="date">Date</Option>
                <Option value="week">Week</Option>
                <Option value="month">Month</Option>
                <Option value="quarter">Quarter</Option>
                <Option value="year">Year</Option>
            </Select>
            <PickerWithType type={type} onChange={(value) => console.log(`Hi. ${value}`)}/>
        </Space>
    )
}

export default CalendarPicker