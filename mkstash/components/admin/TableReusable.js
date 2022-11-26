import { Table } from 'antd';

const TableReusable = ({dataSource, columns}) => {

    return (
        <Table dataSource={dataSource} columns={columns} pagination={false}/>
     )
}

export default TableReusable;