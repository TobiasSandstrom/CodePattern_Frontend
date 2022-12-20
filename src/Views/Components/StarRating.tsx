import { faStar } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


// En component som används primärt av funktionen SetRating(number)

const StarRating = () => {
  return (
    <>
        <FontAwesomeIcon className='item-font-icon' icon={faStar} /> 
    </>
  )
}

export default StarRating