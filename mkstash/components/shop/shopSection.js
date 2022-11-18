import styles from '../../styles/shop.module.css';
import NavBar2 from '../../components/shop/NavBar2';
import SideBar from './SideBar.js'
import Banner from './Banner.js'
import Footer from './Footer.js'

const ShopSection = () => {
   
    return (       
        <div>
            <Banner />
            <NavBar2 />
            <div className={`container py-4`} style={{ "fontSize": "14px" }}>
                <SideBar />
            </div>
           <Footer />
        </div>
    );
}
export default ShopSection 