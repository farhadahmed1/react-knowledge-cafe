import { Outlet } from "react-router-dom";
import Fotter from "../Fotter/Fotter";
import NavBar from "../NavBar/NavBar";


const Home = () => {
    return (
        <div>
            <NavBar/>
            <h3> this is home components</h3>
            <Outlet/>
            <Fotter/>
        </div>
    );
};

export default Home;