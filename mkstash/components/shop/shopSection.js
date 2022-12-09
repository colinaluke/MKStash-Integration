import Navbar from '../../components/Navbar'
import SideBar from './SideBar.js'
import Footer from '../Footer.js'

const ShopSection = () => {
   
    return (       
        <div>
            <Navbar/>
            <div className={`container py-4`} style={{ "fontSize": "0.9rem", "marginTop": "40px" }}>
                <SideBar />
            </div>
           <Footer />
        </div>
    );
}
export default ShopSection 