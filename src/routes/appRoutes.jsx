import Header from "../components/Header/HeaderCpnt";
import Home from "../pages/Home"

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Lore from "../pages/Lore";
import Prision from "../pages/Prision";
import AudioPlayer from "../components/AudioPlayer/AudioPlayer";


const AppRoutes =  () => {
    return(
        <Router>
            <Header 
            links={[
                {to: "/", text: "Inicio"},
                {to: "/historia", text: "Historia"},
                {to: "/prisao", text: "Prisão"}
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
            </Routes>
        </Router>

    )
}

export default AppRoutes