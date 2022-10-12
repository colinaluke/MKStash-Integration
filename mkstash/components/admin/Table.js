import { Table, Input, Space, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import products from '../../lib/products.json';

const data = [];
products.forEach((product) => {
    data.push({
        key: product.id,
        imgSrc: (

                <Image src={product.imgSrc} width={64} height={64} className='text-center mx-auto'></Image>
            // <div className="d-flex justify-content-center">
            // </div>

        ),
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


const DataTable = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex) => {
        console.log(dataIndex)
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
            filters: [
                {
                    text: 'Edward King 0',
                    value: 'Edward King 0',
                },
                {
                    text: 'Jim',
                    value: 'Jim',
                },
            ],
            // specify the condition of filtering result
            // here is that finding the name started with `value`
            onFilter: (value, record) => record.name.indexOf(value) === 0,
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
            render(text, record) {
                return {
                    props: {
                        style: { color: text === 'Available' ? "green" : "red" }
                    },
                    children: text
                }
            }
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
    ];


    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

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
    };
    return (
        <>
            <div className="card-header"><h5 className='mb-0 p-2'>Product Overview</h5></div>
            <div className="card-body p-0">
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} style={{ "width": "100%" }} pagination={{ className: "pagination px-4", defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['10', '25', '100'] }} />
            </div>
        </>
    )
};

export default DataTable;