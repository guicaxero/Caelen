import 'leaflet/dist/leaflet.css';
import '../PagesStyles.css'
import './Map.css'
import { useEffect } from 'react';
import L from 'leaflet';


const WaterdeepMap = () => {

    useEffect(() => {
        const map = L.map('waterdeep-map', {
            crs: L.CRS.Simple,
            minZoom: -1,
        })

        const bounds = [[0,0], [1000,1000]];
        const image = L.imageOverlay('/assets/waterdeep.jpg', bounds).addTo(map);
        map.fitBounds(bounds);

        L.marker([200, 500])
            .addTo(map)
            .bindPopup("Baixa Waterdeep");

        return () => {
            map.remove();
        };

    },[]);

    return (
        <div className='container'>
            <div id="waterdeep-map" />
        </div>
    )
}


export default WaterdeepMap