import TableReusable from "./TableReusable";

const Card = ({ data }) => {

    const myFunction = (type) => {
        let columns = []
        let dataSource = []
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

            dataSource = data.products.map(datum => {
                return {
                    key: datum.id,
                    name: datum.name,
                    category: datum.category,
                    sellCount: datum.sellCount
                }
            })

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

            dataSource = data.orders.map(datum => {
                return {
                    key: datum.id,
                    orderID: datum.id,
                    productName: datum.productDetails.name,
                    customer: datum.customer,
                    paymentType: datum.paymentType,
                    status: datum.status
                }
            })

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

            dataSource = data.data.map((datum, index) => {
                return {
                    key: index,
                    date: datum.date,
                    total_sales: datum.sales
                }
            })
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

            dataSource = data.activeUsers.map((datum, index) => {
                return {
                    key: index,
                    userID: datum.id,
                    name: datum.name,
                    email: datum.email
                }
            })
        }


        return {
            columns, dataSource
        }
    }

    const { dataSource, columns } = myFunction(data.id)



    return (
        <>
            <div className="col">
                <div className={`card text-dark mb-0 shadow border border-${data.color} hover-${data.color}`} role="button" data-bs-toggle="modal" data-bs-target={`#${data.id}`}>
                    <div className="card-body row">
                        <div className="col-9">
                            <p className="card-title mb-0 text-secondary">{data.title}</p>
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
                            <TableReusable dataSource={dataSource} columns={columns}></TableReusable>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;