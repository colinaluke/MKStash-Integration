import { Table, Input, Space, Modal, Button, Popconfirm, message, DatePicker } from 'antd';
import { SearchOutlined, FieldTimeOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import React, { useState, useRef, createContext } from 'react';
import Image from 'next/image';
import 'antd/dist/antd.css';
import moment from "moment";

const EarningsTable = ({ orders, products }) => {

    const product = []
    const findProduct = (prodId) => {
        const prod = products.find(element => element.id === prodId)
        product.push({
            imgPath: prod.imgPath,
            productName: prod.productName,
            productPrice: prod.productPrice,
            retailPrice: prod.retailPrice, 
        })
    }

    const profitCalc = (quantity,productPrice, retailPrice) => {
        const res = 0;

        res = ((quantity * productPrice) - (quantity * retailPrice))
        return res;

    }
    const earningsTableView = (orders) => {

        const data = []
        orders.forEach((item) => {
            findProduct(item.prodId)
            data.push({
                key: item.id,
                product_name: product[0].productName,
                quantity: item.quantity,
                total_price: "$" + (item.quantity * product[0].productPrice),
                profit: "$" + profitCalc(item.quantity, product[0].productPrice, product[0].retailPrice),
                actions: (
                    <>
                        <div className="btn-group d-flex justify-content-center">
                            <div className="card-body">
                                <button type="button" className="btn btn-primary" data-status="active" data-bs-toggle="modal" data-bs-target={`#product-details-${item.id}`} style={{ "position": "sticky" }}  >
                                    View Details
                                </button>
                            </div>
                        </div>

                        <div className="modal fade" id={`product-details-${item.id}`} tabIndex="-1" aria-labelledby="Order Overview" aria-hidden="true" style={{ 'zIndex': '1110' }}>
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header bg-secondary">
                                        <h5 className="modal-title text-white" id="exampleModalLabel">Order Details</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-4">
                                                <Image src={product[0].imgPath} width={256} height={256} className='text-center mx-auto'></Image>
                                            </div>
                                            <div className="col-8">
                                                <table className="table">
                                                    <tbody>
                                                        <tr>
                                                            <th className='border-end h6' style={{ 'width': '40%' }}>Product ID</th>
                                                            <td>{item.prodId}</td>
                                                        </tr>
                                                        <tr>
                                                            <th className='border-end h6'>Product Name</th>
                                                            <td>{product[0].productName}</td>
                                                        </tr>
                                                        <tr>
                                                            <th className='border-end h6'>Customer Name</th>
                                                            <td>{item.customerName}</td>
                                                        </tr>
                                                        <tr>
                                                            <th className='border-end h6'>Product Price</th>
                                                            <td>{product[0].productPrice}</td>
                                                        </tr>
                                                        <tr>
                                                            <th className='border-end h6'>Location</th>
                                                            <td>{item.location}</td>
                                                        </tr>
                                                        <tr>
                                                            <th className='border-end h6'>Quantity</th>
                                                            <td>{item.quantity}</td>
                                                        </tr>
                                                        <tr>
                                                            <th className='border-end h6'>Total Price</th>
                                                            <td> {"$" + (item.quantity * product[0].productPrice)} </td>
                                                        </tr>
                                                        <tr>
                                                            <th className='border-end h6'>Date</th>
                                                            <td>{item.date}</td>
                                                        </tr>
                                                        <tr>
                                                            <th className='border-end h6'>Status</th>
                                                            <td>{item.status}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>


                )

            })
            product.pop();
        })
        return data
    }


    const [data, setData] = useState(earningsTableView(orders))
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

    const handleDelete = (orders, id) => {
        const filteredOrders = orders.filter(order => order.id !== id)
        setData(ordersTableView(filteredOrders))
    }

    //date picker

    const handleTimeRangeSearch = (selectedKeys, confirm, dataIndex) => {
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
                (text),
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
                        className="input-control mb-1"

                    />

                    <Space>

                        <Button
                            type="primary"
                            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                            icon={<SearchOutlined className="align-middle" />}
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
            title: 'Quantity',
            dataIndex: 'quantity',
            className: 'p-4 text-center',
            responsive: ['sm'],
            ellipsis: true,
            sorter: (a, b) => a.quantity - b.quantity,

        },
        {
            title: 'Total Price',
            dataIndex: 'total_price',
            className: 'p-4 text-center',
            responsive: ['sm'],
            ellipsis: true,
            sorter: (a, b) => a.total_price.localeCompare(b.total_price),

        },
        {
            title: 'Profit',
            dataIndex: 'profit',
            className: 'p-4 text-center',
            responsive: ['sm'],
            ellipsis: true,
            sorter: (a, b) => a.profit.localeCompare(b.profit),
/*            onCell: (record) => ({ className: record.status === 'Paid' ? 'text-success' : record.status === 'In Progress' ? 'text-warning ' : 'text-danger' })*/

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
                <h5 className='mb-0 p-2'>Earnings Overview</h5>
            </div>

            <div className="p-4 mt-2 border bg-light " id="changeTheme">
                <Table className=" p-0 m-0 d-flex justify-content-center w-100 " id="ordersTable" rowSelection={rowSelection} columns={columns} dataSource={data} style={{ "width": "100%" }} pagination={{ className: "pagination px-4", defaultPageSize: 5, position: ['bottomRight'] }} />
            </div>
        </>
    )
};

export default EarningsTable;