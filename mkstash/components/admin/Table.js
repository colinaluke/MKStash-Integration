import { Table, Input, Space, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import CustomPagination from './CustomPagination';
import Api from '../../services/api';

const transformData = (products) => {
    const data = []
    products.forEach((product) => {
        data.push({
            key: product.id,
            imgSrc: <Image src={product.imgSrc} width={64} height={64} className='text-center mx-auto'></Image>,
            name: product.name,
            price: product.price,
            status: product.stock > 0 ? 'Available' : 'Out of Stock',
            category: product.category,
            totalSales: product.totalSales,
            actions: (
                <div className="btn-group">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Action
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">View Details</a></li>
                        <li><a className="dropdown-item" href="#">Delete Product</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            )
        })
    })
    return data
}

const DataTable = ({ products, total }) => {
    
    const [data, setData] = useState(transformData(products))
    const [selectedRowKeys, setSelectedRowKeys] = useState([])
    const [searchText, setSearchText] = useState('')
    const [searchedColumn, setSearchedColumn] = useState('')
    const searchInput = useRef(null)

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    }

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    }

    const getColumnSearchProps = (dataIndex) => {
        return ({

            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
                <div
                    style={{
                        padding: 8,
                    }}
                >
                    <Input
                        ref={searchInput}
                        placeholder={`Search ${dataIndex}`}
                        value={selectedKeys[0]}
                        onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                        onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        style={{
                            marginBottom: 8,
                            display: 'block',
                        }}
                    />
                    <Space>
                        <Button
                            type="primary"
                            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                            icon={<SearchOutlined />}
                            size="small"
                            style={{
                                width: 90,
                            }}
                        >
                            Search
                        </Button>
                        <Button
                            onClick={() => clearFilters && handleReset(clearFilters)}
                            size="small"
                            style={{
                                width: 90,
                            }}
                        >
                            Reset
                        </Button>
                        <Button
                            type="link"
                            size="small"
                            onClick={() => {
                                confirm({
                                    closeDropdown: false,
                                });
                                setSearchText(selectedKeys[0]);
                                setSearchedColumn(dataIndex);
                            }}
                        >
                            Filter
                        </Button>
                    </Space>
                </div>
            ),
            filterIcon: (filtered) => (
                <SearchOutlined
                    style={{
                        color: filtered ? '#1890ff' : undefined,
                    }}
                />
            ),
            onFilter: (value, record) =>
                record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
            onFilterDropdownOpenChange: (visible) => {
                if (visible) {
                    setTimeout(() => searchInput.current?.select(), 100);
                }
            },
            render: (text) =>
                searchedColumn === dataIndex ? (
                    <Highlighter
                        highlightStyle={{
                            backgroundColor: '#ffc069',
                            padding: 0,
                        }}
                        searchWords={[searchText]}
                        autoEscape
                        textToHighlight={text ? text.toString() : ''}
                    />
                ) : (
                    text
                ),
        })
    }

    const columns = [
        {
            title: 'Product',
            dataIndex: 'imgSrc',
            className: 'text-center',
            responsive: ['lg'],
        },
        {
            title: 'Name',
            dataIndex: 'name',
            ellipsis: true,
            sorter: (a, b) => a.name.localeCompare(b.name),
            ...getColumnSearchProps('name'),
        },
        {
            title: 'Price',
            dataIndex: 'price',
            sorter: (a, b) => a.price - b.price,
            responsive: ['md'],
        },
        {
            title: 'Status',
            dataIndex: 'status',
            responsive: ['md'],
            ellipsis: true,
            sorter: (a, b) => a.status.localeCompare(b.status),
            onCell: (record) => ({ className: record.status === 'Available' ? 'text-success' : 'text-danger' })


        },
        {
            title: 'Category',
            dataIndex: 'category',
            sorter: (a, b) => a.category.localeCompare(b.category),
            responsive: ['md'],
            ellipsis: true
        },
        {
            title: 'Total Sales',
            dataIndex: 'totalSales',
            responsive: ['sm'],
            ellipsis: true,
            sorter: (a, b) => a.totalSales - b.totalSales,
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
        },
    ]

    const onSelectChange = (newSelectedRowKeys) => {
        setSelectedRowKeys(newSelectedRowKeys);
    }

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
        selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            Table.SELECTION_NONE,
            {
                key: 'odd',
                text: 'Select Odd Row',
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((_, index) => {
                        if (index % 2 !== 0) {
                            return false;
                        }

                        return true;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
            {
                key: 'even',
                text: 'Select Even Row',
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((_, index) => {
                        if (index % 2 !== 0) {
                            return true;
                        }

                        return false;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
        ],
    }


    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 10

    const handlePagination = async (current, size) => {
        const res = await Api().get(`/products`, { params: { currentPage: current, perPage: size } })
        setData(transformData(res.data.data))
        setCurrentPage(current)
    }

    return (
        <>
            <div className="card-header d-flex justify-content-between align-items-center bg-primary">
                <h5 className='mb-0 p-2 text-white'>Product Overview</h5>
                <div className="dropdown">
                    <span role="button" id="sales_overview" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi bi-three-dots-vertical align-center text-white"></i>
                    </span>
                    <ul className="dropdown-menu" aria-labelledby="sales_overview">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>
            <div className="card-body p-0">
                <div>
                    <Table rowSelection={rowSelection} columns={columns} dataSource={data} style={{ "width": "100%" }} pagination={false} />
                    <CustomPagination
                        total={total}
                        currentPage={currentPage}
                        pageSize={pageSize}
                        onChange={handlePagination}
                    />
                </div>
                <div>
                </div>
            </div>
        </>
    )
};

export default DataTable;