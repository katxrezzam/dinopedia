import './Card.scss'
import {bones} from '../../constans/icons'

const Card = () => {
    return(
        <div className="card">
            <span className='icon'>
                {bones}
            </span>
        </div>
    )
}

export default Card