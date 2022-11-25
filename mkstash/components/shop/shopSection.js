import styles from '../../styles/shop.module.css';
import Navbar2 from '../../components/shop/NavBar2';
import SideBar from './SideBar.js'
import Banner from './Banner.js'
import Footer from './Footer.js'

const ShopSection = () => {
   
    return (       
        <div>
            <Banner />
            <Navbar2/>
            <div className={`container py-4`} style={{ "fontSize": "0.9rem" }}>
                <SideBar />
            </div>
           <Footer />
        </div>
    );
}
export default ShopSection 