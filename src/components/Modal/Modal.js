const Overlay = ({ children, isOpen }) => {
    return(
        isOpen &&
        <div className={'overlay'}>
            {children}
        </div>
    )
}
export default Overlay