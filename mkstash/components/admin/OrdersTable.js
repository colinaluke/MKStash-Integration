import { Table, Input, Space, Modal, Button, Popconfirm, message, DatePicker } from 'antd';
import { SearchOutlined, FieldTimeOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import React, { useState, useRef, createContext } from 'react';
import Image from 'next/image';
import 'antd/dist/antd.css';
import moment from "moment";

const OrdersTable = ({ items }) => {

    // delete pop up
    const confirm = (e) => {
        console.log(e);
        message.success('Click on Yes');
    };
    const cancel = (e) => {
        console.log(e);
        message.error('Click on No');
    };

    // modal notif on viewing details
    const [modal, contextHolder] = Modal.useModal();
    const ReachableContext = createContext(null);
    const UnreachableContext = createContext(null);

    const config = {
        title: 'Details on the order',
        content: (
            <>
                <ReachableContext.Consumer>{(name) => `Reachable: ${name}!`}</ReachableContext.Consumer>
                <br />
                <UnreachableContext.Consumer>{(name) => `Unreachable: ${name}!`}</UnreachableContext.Consumer>
            </>
        ),
    };

   

    const data = [];
        items.forEach((item) => {
            data.push({
                key: item.id,
                imgPath: <Image src={item.imgPath} width={100} height={100} ></Image>,
                product_name: item.productName,
                customer_name: item.customerName,
                location: item.location,
                quantity: item.quantity,
                date: item.date,
                total_price: "$" + (item.quantity * item.productPrice),
                status: item.status,
                actions: (
                    <div className="btn-group d-flex justify-content-center">
                        <div className="card-body">
                            <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Action
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <ReachableContext.Provider value="Light">
                                        <Space>
                                            <a className="dropdown-item" href="#">
                                                <Button
                                                    onClick={() => {
                                                        modal.confirm(config);
                                                    }}>
                                                    View Details
                                                </Button>
                                            </a>

                                        </Space>
                                        {contextHolder}
                                    </ReachableContext.Provider>
                                </li>
                                <li>
                                    <a className="dropdown-item">

                                    </a>

                                </li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                            <Popconfirm
                                title="Are you sure to delete this order?"
                                onConfirm={confirm}
                                onCancel={cancel}
                                okText="Yes"
                                cancelText="No"
                               >
                                <button className="btn btn-danger" href="#" style={{fontSize: '10px', width: '6 rem' } }>Delete Order</button>
                            </Popconfirm>
                        </div>
                   </div>
                       
                )
            })
    })


    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    const [searchTimeText, setSearchTimeText] = useState(null);
    const [searchedTimeColumn, setSearchedTimeColumn] = useState('');


    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };

    //date picker

    const  handleTimeRangeSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchTimeText(selectedKeys[0]);
        setSearchedTimeColumn(dataIndex);
    };

    const handleTimeRangeReset = (clearFilters) => {
        clearFilters();
        setSearchTimeText('');
    };

    const getColumnTimeProps = (dataIndex) => {
        return ({

            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
                <div style={{ padding: 8 }}>
                    <DatePicker.RangePicker
                        onChange={e => {
                            setSelectedKeys(e.length ? [e] : [])
                        }}
                        placeholder={["Start", "End"]}
                        value={selectedKeys[0]}
                        format="YYYY-MM-DD"
                    />
                    <Button
                        type="primary"
                        role="search"
                        onClick={() => {
                           handleTimeRangeSearch(selectedKeys, confirm, dataIndex)
                        }}
                        style={{ width: 90, marginRight: 8 }}
                        icon={<SearchOutlined />}
                        size="small"
                    >
                        Search
                    </Button>
                    <Button
                        role="reset"
                        style={{ width: 90 }}
                        onClick={() => {
                            clearFilters && handleTimeRangeReset(clearFilters),
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                        className="rounded-pill"
                        size="small"
                    >
                        Reset
                    </Button>
                </div>
            ),
            filterIcon: (filtered) => (
                <FieldTimeOutlined type="search" style={{ color: filtered ? "#1890ff" : undefined }} />
            ),
            onFilter: (value, record) => record[dataIndex] ? moment(record[dataIndex]).isBetween(moment(value[0]), moment(value[1])) : "",
            render: (text) =>
              ( text ),
        });
    }

    const getColumnSearchProps = (dataIndex) => {
        return ({

            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (

                <div className="card border border-3 mb-4 p-2">

                    <Input
                        ref={searchInput}
                        placeholder={`Search ${dataIndex}`}
                        value={selectedKeys[0]}
                        onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                        onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        className ="input-control mb-1"
                    
                    />

                    <Space>

                        <Button
                            type="primary"
                            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                            icon={<SearchOutlined className="align-middle"/>}
                            size="small"
                            style={{
                                margin: '0.5rem',
                                width: '7rem'
                            }}
                            className="rounded-pill"
                            >
                            Search
                        </Button>
                        <Button
                            size="small"
                            style={{
                                margin: '0.5rem',
                                width: '7rem'
                            }}
                            onClick={() => {
                                clearFilters && handleReset(clearFilters),
                                    confirm({
                                        closeDropdown: false,
                                    });
                                setSearchTimeText(selectedKeys[0]);
                                setSearchedTimeColumn(dataIndex);
                            }}
                            className="rounded-pill"
                            >
                            Reset
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
            dataIndex: 'imgPath',
            className: 'p-4 text-center',
            responsive: ['lg'],
        },
        {
            title: 'Product Name',
            dataIndex: 'product_name',
            className: 'p-4 text-center',
            responsive: ['md'],
            ellipsis: true,
            onFilter: (value, record) => record.product_name.indexOf(value) === 0,
            sorter: (a, b) => a.product_name.localeCompare(b.product_name),
            ...getColumnSearchProps('product_name'),
        },
        {
            title: 'Customer Name',
            dataIndex: 'customer_name',
            className: 'p-4 text-center',
            responsive: ['md'],
            ellipsis: true,
            onFilter: (value, record) => record.customer_name.indexOf(value) === 0,
            sorter: (a, b) => a.customer_name.localeCompare(b.customer_name),
            ...getColumnSearchProps('customer_name'),
        },
        {
            title: 'Location',
            dataIndex: 'location',
            className: 'p-4 text-center',
            responsive: ['md'],
            responsive: ['md'],
            ellipsis: true,
            sorter: (a, b) => a.location.localeCompare(b.location),

        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            className: 'p-4 text-center',
            responsive: ['md'],
            ellipsis: true,
            sorter: (a, b) => a.quantity- b.quantity,

        },
        {
            title: 'Date',
            dataIndex: 'date',
            responsive: ['md'],
            ellipsis: true,
            className: 'p-4 text-center',
            sorter: (a, b) => a.date > b.date,
            ...getColumnTimeProps('date'),
        },
        {
            title: 'Total Price',
            dataIndex: 'total_price',
            className: 'p-4 text-center',
            responsive: ['md'],
            ellipsis: true,
            sorter: (a, b) => a.total_price.localeCompare(b.total_price),

        },
        {
            title: 'Status',
            dataIndex: 'status',
            className: 'p-4 text-center',
            responsive: ['md'],
            ellipsis: true,
            sorter: (a, b) => a.status.localeCompare(b.status),
            onCell: (record) => ({ className: record.status === 'Paid' ? 'text-success' : record.status === 'In Progress' ? 'text-warning ' : 'text-danger' })

        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            className: 'p-4 text-center',
        },
    ];


    const onSelectChange = (newSelectedRowKeys) => {
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
                <div className="card-header border justify-content-between align-items-center mt-2 m-0 p-3" id="changeTheme">
                    <h5 className='mb-0 p-2'>Orders Overview</h5>
                </div>

                <div class="p-4 mt-2 border bg-light " id="changeTheme">
                    <Table className=" p-0 m-0 d-flex justify-content-center w-100 " id="ordersTable" rowSelection={rowSelection} columns={columns} dataSource={data} style={{ "width": "100%" }} pagination={{ className: "pagination px-4", defaultPageSize: 5, position: ['bottomRight']}} />
                </div>
        </>
    )
};

export default OrdersTable;