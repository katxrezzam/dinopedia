import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './InputHeader.scss'
const InputHeader = ({query, setQuery}) => {
    
    return(
        <>
            <input 
            type="text" 
            className="search-input" 
            placeholder='Buscar...'
            value={query}
            onChange={e => setQuery(e.target.value)}
            />
            {   
                query && (
                    <span className='xmark' onClick={() => setQuery('')}>
                        <FontAwesomeIcon icon={faXmark}/>
                    </span>
                )
            }
        </>
    )
}

export default InputHeader