import { Outlet } from "react-router-dom";
import Navbar from "../share/Navbar";


const MainLayout = () => {
    return (
        <div className="font-myfont  ">
            {/* navbar  */}
            <Navbar/>
            {/* outlate  */}
            <Outlet/>
            {/* footer  */}
        </div>
    );
};

export default MainLayout;