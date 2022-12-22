import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Link } from "react-router-dom"
import './SidebarLink.scss'


const SidebarLink = ({path, icon, text, isClosed}) => {

    const [hovered, setHovered] = useState(false)

    return(
        <li className="sidebar-link" 
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        >
            <Link to={path}>
                <span className="icon">
                    <FontAwesomeIcon icon={icon}/>
                </span>
                <span className='link-text'>
                    {text}
                </span>
            </Link>
            {
                isClosed && hovered && (<span className="link-text-closed">{text}</span>)
            }
        </li>
    )
}

export default SidebarLink