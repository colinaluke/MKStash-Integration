
import dummyData from '../lib/dummy.json'
import Image from 'next/image'
import DL from '../styles/AdminDashboard.module.css'
/*import useSWR from 'swr';*/

export default function product_Table() {

/*    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { tableData, error } = useSWR('/api/tableData', fetcher);*/

    return (

        <div class="p-4 mt-4 border bg-light">
            <nav class="navbar bg-light">
                <div class="container-fluid">
                    <h1 class="navbar-brand" href="#">
                        Table format/user data</h1>

                    {/* Dropdown */}
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Sort by list
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    {/* end of Dropdown */}

                </div>
            </nav>

            {/* Table */}
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col" class="align-middle">Product</th>
                        <th scope="col" class="align-middle">Customer</th>
                        <th scope="col" class="align-middle">Location</th>
                        <th scope="col" class="align-middle">Quantity</th>
                        <th scope="col" class="align-middle">Status</th>
                        <th scope="col" class="align-middle">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Map retrieved data from the db here */}
                    {dummyData.map((order, i) => (
                        <tr class="align-middle" key={i}>
                            <td>
                                <div class="row align-items-center">
                                    <div class="col">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" key={order.id} />
                                        <Image class="p-2" src={order.imgPath}
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                    <div class="col text-align-middle">
                                        <h5> {order.productName}</h5>
                                    </div>
                                </div>

                            </td>
                            <td>{order.customerName}</td>
                            <td>{order.location}</td>
                            <td>{order.quantity}</td>
                            <td> <button className={ `btn btn-primary` } type="button">{order.status}</button></td>
                            <td><button class="btn btn-danger" type="button">Action</button></td>

                        </tr>
                    ))}
                </tbody>
            </table>
            {/* end Table */}
            <div class="bg-primary">
                <button class="btn btn-warning">sample</button>
            </div>
        </div>

       
		
	)


}