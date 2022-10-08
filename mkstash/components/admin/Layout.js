// To add header
// To add side navigation menu

import Header from "./header";
import LeftNavigationMenu from "./leftNavigationMenu";

const Layout = ({ children }) => {
    return ( 
        <div>
            <Header></Header>
            <LeftNavigationMenu></LeftNavigationMenu>
           { children }
        </div>
     );
}
 
export default Layout;