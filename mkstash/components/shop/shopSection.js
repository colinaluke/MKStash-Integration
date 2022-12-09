import Navbar from '../../components/NavBar'
import SideBar from './SideBar.js'
import Banner from './Banner.js'
import Footer from '../Footer.js'

const ShopSection = () => {
   
    return (       
        <div>
            <Banner />
            <Navbar/>
            <div className={`container py-4`} style={{ "fontSize": "0.9rem" }}>
                <SideBar />
            </div>
           <Footer />
        </div>
    );
}
export default ShopSection 