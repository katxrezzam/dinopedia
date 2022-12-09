import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import './SidebarLink.scss'


const SidebarLink = ({path, icon, text}) => {
    return(
        <li className="sidebar-link">
            <Link to={path}>
                <span className="icon">
                    <FontAwesomeIcon icon={icon}/>
                </span>
                <span className='link-text'>
                    {text}
                </span>
            </Link>
        </li>
    )
}

export default SidebarLink