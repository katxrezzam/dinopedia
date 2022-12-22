import './Modal.scss'
const Modal = ({ children, isOpen }) => {
    return(
        isOpen &&
        <div className={'overlay'}>
            {children}
        </div>
    )
}
export default Modal