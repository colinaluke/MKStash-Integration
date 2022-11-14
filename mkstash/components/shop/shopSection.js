import styles from '../../styles/shop.module.css';
import NavBar from '../../components/shop/NavBar';
import SideBar from './SideBar.js'
import Banner from './Banner.js'

const ShopSection = () => {
   
    return (       
        <div>
            <Banner />
            <NavBar />
            <div className={`container py-4`} style={{ "fontSize": "14px" }}>
                <SideBar />
            </div>
           
        </div>
    );
}
export default ShopSection 