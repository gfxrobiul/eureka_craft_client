import { Outlet } from "react-router-dom";
import Navbar2 from "../Components/Navber/Navbar2";
import Footer from "../Components/Footer/Footer";


const Root = () => {
    return (
        <div>
        <Navbar2></Navbar2>
        <Outlet></Outlet>
        <Footer></Footer>

            
        </div>
    );
};

export default Root;