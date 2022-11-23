import styles from '../../styles/shop.module.css';
import NavBar from '../../components/shop/NavBar';
import SideBar from './SideBar.js'
import Banner from './Banner.js'
import Footer from './Footer.js'

const ShopSection = () => {
   
    return (       
        <div>
            <Banner />
            <NavBar />
            <div className={`container py-4`} style={{ "fontSize": "14px" }}>
                <SideBar />
            </div>
           <Footer />
        </div>
    );
}
export default ShopSection 