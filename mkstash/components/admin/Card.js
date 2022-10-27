import { useState } from "react";
import TableReusable from "./TableReusable";
import CustomPagination from "./CustomPagination";
import Api from "../../services/api";
import { Empty } from "antd";

const transformData = (data, type) => {

    const functions = {
        "products_sold": () => {
            return data.map(datum => {
                return {
                    key: datum.id,
                    name: datum.name,
                    category: datum.category,
                    sellCount: datum.sellCount
                }
            })
        },
        "orders_received": () => {
            return data.map(datum => {
                return {
                    key: datum.id,
                    orderID: datum.id,
                    productName: datum.productDetails.name,
                    customer: datum.customer,
                    paymentType: datum.paymentType,
                    status: datum.status
                }
            })
        },
        "active_users": () => {
            return data.map((datum, index) => {
                return {
                    key: index,
                    userID: datum.id,
                    name: datum.name,
                    email: datum.email
                }
            })
        },
        "total_sales": () => {
            return data.map((datum, index) => {
                return {
                    key: index,
                    date: datum.date,
                    total_sales: datum.sales
                }
            })
        }

    }

    return functions[type]
}

const Card = ({ data, total, cardParams }) => {

    const getColumnsAndDataSource = (type) => {
        let columns = []
        let source = []
        if (type === 'products_sold') {
            columns = [
                {
                    title: 'Product Name',
                    dataIndex: 'name',
                    key: 'name'
                },
                {
                    title: 'Category',
                    dataIndex: 'category',
                    key: 'category'
                },
                {
                    title: 'Sell Count',
                    dataIndex: 'sellCount',
                    key: 'sellCount',
                    sorter: (a, b) => a.sellCount - b.sellCount,
                }
            ]


        } else if (type === 'orders_received') {
            columns = [
                {
                    title: 'Order ID',
                    dataIndex: 'orderID',
                    key: 'orderID',
                    sorter: (a, b) => a.orderID - b.orderID,
                },
                {
                    title: 'Product Name',
                    dataIndex: 'productName',
                    key: 'productName'
                },
                {
                    title: 'Customer',
                    dataIndex: 'customer',
                    key: 'customer'
                },
                {
                    title: 'Payment Type',
                    dataIndex: 'paymentType',
                    key: 'paymentType'
                },
                {
                    title: 'Status',
                    dataIndex: 'status',
                    key: 'status',
                    onCell: (record) => ({ className: record.status === 'delivered' ? 'text-success' : 'text-danger' })
                }
            ]

        } else if (type === 'total_sales') {
            columns = [
                {
                    title: 'Date',
                    dataIndex: 'date',
                    key: 'date'
                },
                {
                    title: 'Total Sales',
                    dataIndex: 'total_sales',
                    key: 'total_sales',
                    sorter: (a, b) => a.total_sales - b.total_sales
                },
            ]

        } else if (type === 'active_users') {
            columns = [
                {
                    title: 'User ID',
                    dataIndex: 'userID',
                    key: 'userID',
                    sorter: (a, b) => a.userID - b.userID,
                },
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name'
                },
                {
                    title: 'Email',
                    dataIndex: 'email',
                    key: 'email'
                },
            ]

        }

        source = transformData(data.data, type)

        return {
            columns, source
        }
    }

    const { source, columns } = getColumnsAndDataSource(data.id)
    const [dataSource, setDataSource] = useState(source)

    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 2

    const handlePagination = async (current, size) => {
        const res = await Api().get(`/${data.id}`, {
            params: {
                ...cardParams,
                currentPage: current, perPage: size
            }
        })
        setDataSource(transformData(res.data.data, res.data.id))
        setCurrentPage(current)
    }

    return (
        <>
            <div className="col mb-2">
                <div className={`card text-dark mb-0 shadow border border-${data.color}`} role="button" data-bs-toggle="modal" data-bs-target={`#${data.id}`}>
                    <div className="card-body row">
                        <div className="col-9">
                            <p className="card-title mb-0 text-muted">{data.title}</p>
                            <h3 className={`card-text text-${data.color}`}>{data.id === 'total_sales' ? data.currentSales : data.count}</h3>
                        </div>
                        <div className="col-3">
                            <span><i className={`${data.icon} fs-1 text-${data.color}`}></i></span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal: For more details */}
            <div className="modal fade" id={`${data.id}`} tabIndex="-1" aria-labelledby={`for-${data.title}`} aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className={`modal-header bg-${data.color}`}>
                            <h5 className="modal-title text-white" id={`for-${data.title}`}>{data.title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {
                                data.data.length != 0 ?
                                    <><TableReusable dataSource={dataSource} columns={columns}></TableReusable>
                                        <CustomPagination
                                            total={total}
                                            currentPage={currentPage}
                                            pageSize={pageSize}
                                            onChange={handlePagination} /></>
                                    : <Empty></Empty>

                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;