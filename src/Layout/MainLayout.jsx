import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import Header from "../Pages/Header/Header";


const MainLayout = () => {
    return (
        <div>
            <Header></Header>
             <div className="mt-10">
             <Outlet></Outlet>
             </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;