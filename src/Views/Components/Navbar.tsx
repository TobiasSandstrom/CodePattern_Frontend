import {NavLink} from 'react-router-dom'
import logo from '../Images/fixxo-logo.svg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCodeCompare, faMagnifyingGlass, faHeart, faBagShopping } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-container">
        
        <div className="navbar-logo">
          <img src={logo} alt="navbar-logo" />
        </div>        
        
        <div className="navbar-site-links">
          <ul>
            <li><NavLink className="navbar-link" to="/">Home</NavLink></li>
            <li><NavLink className="navbar-link" to="/categories">Categories</NavLink></li>
            <li><NavLink className="navbar-link" to="/products">Products</NavLink></li>
            <li><NavLink className="navbar-link" to="/contacts">Contacts</NavLink></li>
          </ul>
        
        </div>
      
        <div className="navbar-icons">
          <ul>
            <li><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
            <li><FontAwesomeIcon icon={faCodeCompare} /></li>
            <li><FontAwesomeIcon icon={faHeart} /></li>
            <li><FontAwesomeIcon icon={faBagShopping} /></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar