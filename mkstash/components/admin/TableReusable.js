import { Table } from 'antd';

const TableReusable = ({dataSource, columns}) => {

    return (
        <Table dataSource={dataSource} columns={columns} pagination={{ className: "pagination px-4", defaultPageSize: 5 }}/>
     )
}

export default TableReusable;