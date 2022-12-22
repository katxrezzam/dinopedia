import './Concept.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBone, faCaretDown, faCaretUp} from "@fortawesome/free-solid-svg-icons";
import imageConcept from '../../assets/img/dino-ico.png'
import Modal from "../Modal/Modal";
import {useState} from "react";
import Dialog from "../Modal/Dialog/Dialog";
const Concept = () => {

    const [isOpen, setIsOpen] = useState(false)

    return(
        <>
            <div className='concept'>
                <div className="title-concept">
                    <h1>Concept</h1>
                </div>
                <div className="content-concept">
                <span>
                    <img src={imageConcept} alt="concept"/>
                </span>
                </div>
                <div className={isOpen ? 'icon-concept open' : 'icon-concept'} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen
                        ? <FontAwesomeIcon icon={faCaretUp}/>
                        : <FontAwesomeIcon icon={faCaretDown}/>
                    }
                </div>
            </div>
            <Modal isOpen={isOpen}>
                <Dialog setIsOpen={setIsOpen}/>
            </Modal>
        </>
    )
}

export default Concept