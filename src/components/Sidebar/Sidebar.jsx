import "./Sidebar.scss";
import dinoIco from "../../assets/img/dino-ico.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAtlas,
    faBook,
    faCaretDown,
    faCaretRight,
    faHome,
    faImages
} from "@fortawesome/free-solid-svg-icons";
import SidebarLink from "./SidebarLink/SidebarLink";
import { useState } from "react";

const Sidebar = () => {

    const [toggle, setToggle] = useState(false)

    return (
        <div className={toggle ? 'sidebar' : 'sidebar close'}>
            <header>
                <div className="logo-container">
                    <span className="image">
                        <img src={dinoIco} alt="dino-ico" />
                    </span>
                    <span className="sidebar-title">Dinopedia</span>
                </div>
                <span className="toggle" onClick={() => setToggle(!toggle)}>
                    {
                        toggle 
                           ? <FontAwesomeIcon icon={faCaretRight} />
                           : <FontAwesomeIcon icon={faCaretDown} />
                    }
                </span>
            </header>
            <div className="menu-container">
                <div className="menu">
                    <ul className="menu-links">
                        <SidebarLink path={"/"} icon={faHome} text={"Home"} />
                        <SidebarLink path={"/"} icon={faBook} text={"Wiki"} />
                        <SidebarLink path={"/"} icon={faImages} text={"Galery"} />
                        <SidebarLink path={"/"} icon={faAtlas} text={"References"} />
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default Sidebar;
