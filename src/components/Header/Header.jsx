import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

import './Header.scss'
import InputHeader from './InputHeader/InputHeader'
import SearchContainer from './SearchContainer/SearchContainer'

const Header = () => {

    const [query, setQuery] = useState('')

    return(
        <header className="header">
            <div className='search-box'>
                <span className="icon">
                    <FontAwesomeIcon icon={faSearch}/>
                </span>
                <InputHeader 
                    query={query}
                    setQuery={setQuery}
                />
            </div>
            {
                query &&
                 
                (
                    <SearchContainer result={query}/>
                )
            }
        </header>
    )
}

export default Header