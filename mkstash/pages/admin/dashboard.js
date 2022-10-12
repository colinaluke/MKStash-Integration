import Layout from "../../components/admin/Layout";

const Dashboard = () => {
    return (
        <Layout>
            <div className="container py-4">
                <div className="row mb-4">
                    <div className="col">
                        <div className="card text-white bg-primary mb-0">
                            <div className="card-header">Header</div>
                            <div className="card-body">
                                <h5 className="card-title">Primary card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-white bg-success mb-0">
                            <div className="card-header">Header</div>
                            <div className="card-body">
                                <h5 className="card-title">Primary card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-white bg-danger mb-0">
                            <div className="card-header">Header</div>
                            <div className="card-body">
                                <h5 className="card-title">Primary card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-8">
                        <div className="d-flex align-items-center justify-content-center bg-secondary text-white" style={{ "height": "350px" }}>
                            Placeholder
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="d-flex align-items-center justify-content-center bg-secondary text-white" style={{ "height": "350px" }}>
                            Placeholder
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="d-flex align-items-center justify-content-center bg-secondary text-white" style={{ "height": "500px" }}>
                            Placeholder
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Dashboard;