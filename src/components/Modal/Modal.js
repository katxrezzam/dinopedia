import './Modal.scss'
const Modal = ({ children, isOpen, setIsOpen }) => {

    return(
        isOpen &&
        <div className={'overlay'} onClick={() => setIsOpen(false)}>
            <div className="width-wrapper">
                {children}
            </div>
        </div>
    )
}
export default Modal