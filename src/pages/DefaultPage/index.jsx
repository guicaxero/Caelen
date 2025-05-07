import { Outlet } from "react-router-dom"
import HowlPlayer from "../../components/AudioPlayer/AudioPlayer"
import Header from "../../components/Header/HeaderCpnt"



const DefaultPage = () => {
    return (
        <main>
            <Header 
            links={[
                {to: "/", text: "Inicio"},
                {to: "/historia", text: "Historia"},
                {to: "/underdark", text: "Subterrâneo"},
                {to: "/bonds", text: "Ligações"}
            ]}
            />
            <HowlPlayer/>
            <Outlet/>
        </main>
    )
}


export default DefaultPage