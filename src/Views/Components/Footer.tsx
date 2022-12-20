import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons"



const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-social">
            <ul>
                <li><FontAwesomeIcon icon={faFacebook} /></li>
                <li><FontAwesomeIcon icon={faInstagram} /></li>
                <li><FontAwesomeIcon icon={faTwitter} /></li>
                <li><FontAwesomeIcon icon={faGoogle} /></li>
                <li><FontAwesomeIcon icon={faLinkedin} /></li>
            </ul>
        </div>
        <div className="footer-small-container">
            <small>	&#169; 2022 Fixxo. All Rights Reserved</small>
        </div>

    </div>
  )
}

export default Footer