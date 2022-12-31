import './Dialog.scss'
import image from '../../../assets/img/dino-ico.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
const Dialog = ({ setIsOpen }) => {
    return(
        <section className={'dialog'}>
            <div className={'dialog-title'}>
                <h1>Concept</h1>
            </div>
            <div className="dialog-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequatur ipsum magni obcaecati
                    quis unde voluptate. Commodi consectetur corporis debitis, esse, impedit itaque iure, nostrum
                    quaerat qui quo reprehenderit ut?
                </p>
                <div className="dialog-img">
                    <img src={image} alt=""/>
                </div>
            </div>
            <span className={'close'} onClick={() => setIsOpen(false)}>
                <FontAwesomeIcon icon={faXmark}/>
            </span>
        </section>
    )
}

export default  Dialog