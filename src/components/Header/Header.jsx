import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Header.scss'

const Header = () => {
    return(
        <header className="header">
            <div className='search-box'>
                <span className="icon">
                    <FontAwesomeIcon icon={faSearch}/>
                </span>
                <input type="search" placeholder='Buscar...'/>
            </div>
        </header>
    )
}

export default Header