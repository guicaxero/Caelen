import Header from "../components/Header/HeaderCpnt";
import Home from "../pages/Home"

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Lore from "../pages/Lore";
import WaterdeepMap from "../pages/Map/Map";
import Bonds from "../pages/Bonds";
import Underdark from "../pages/Underdark";
import DefaultPage from "../pages/DefaultPage";


const AppRoutes =  () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<DefaultPage/>} >
                    <Route index element={<Home/>}/>
                    <Route path="historia" element={<Lore/>}/>
                    <Route path="map" element={<WaterdeepMap/>}/>
                    <Route path="bonds" element={<Bonds/>}/>
                    <Route path="underdark" element={<Underdark/>}/>
                </Route>
            </Routes>
        </Router>

    )
}

export default AppRoutes