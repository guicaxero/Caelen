import Header from "../components/Header/HeaderCpnt";
import Home from "../pages/Home"

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Lore from "../pages/Lore";
import Prision from "../pages/Prision";
import AudioPlayer from "../components/AudioPlayer/AudioPlayer";
import WaterdeepMap from "../pages/Map/Map";
import Bonds from "../pages/Bonds";
import Underdark from "../pages/Underdark";


const AppRoutes =  () => {
    return(
        <Router>
            <Header 
            links={[
                {to: "/", text: "Inicio"},
                {to: "/historia", text: "Historia"},
                {to: "/underdark", text: "Subterrâneo"},
                {to: "/bonds", text: "Ligações"}
            ]}
            />
            <AudioPlayer/>
            <Routes>
                <Route 
                    path="*" element={<Home/>}
                />
                <Route 
                    path="/historia" element={<Lore/>}
                />
                <Route 
                    path="/prisao" element={<Prision/>}
                />
                <Route
                    path="/map" element={<WaterdeepMap/>}
                />
                <Route
                    path="/bonds" element={<Bonds/>}
                />
                <Route
                    path="/underdark" element={<Underdark/>}
                />
            </Routes>
        </Router>

    )
}

export default AppRoutes