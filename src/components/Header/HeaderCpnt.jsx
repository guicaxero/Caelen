import { NavLink } from 'react-router-dom'
import '../Header/HeaderCpnt.css'


const Header = ({links}) => {
    return(
        <header>
            <nav>
               { links.map((link, index) => (
                    <NavLink 
                        key={index}
                        to={link.to}
                        className={({ isActive }) => 
                            isActive ? "active-link" : "default-link"
                        }
                    >
                        {link.text}
                    </NavLink>
               ))}
            </nav>
        </header>
    )
}



export default Header