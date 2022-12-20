import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeCompare, faHeart, faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { SetRating } from '../../Functions/SetRating'


const ShoppingCard = (data:any) => {
    let product = data.product
    console.log(product)
    return (
        <NavLink className="item-card-navlink" key={product.ArtNumber} to={`/product/${product.Category}/${product.ArtNumber}`}>
            <div className="item-card">
                <div className="item-img-container">
                    <img src={product.ImgUrl} alt="" />
                    <div className="quick-view-hover-content">

                        <div className="quick-view-hover-icons">
                            <ul>
                                <li><FontAwesomeIcon icon={faHeart} /></li>
                                <li><FontAwesomeIcon icon={faCodeCompare} /></li>
                                <li><FontAwesomeIcon icon={faBagShopping} /></li>
                            </ul>

                        </div>

                        <div className="quick-view-btn">
                            <div className="quick-view-inner-btn">
                                <p>QUICK VIEW</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item-text-container">
                    <small className='item-category'>{product.Category}</small>
                    <p className='item-name'>{product.Name}</p>
                    <p className='item-rating'>{SetRating(product.Rating)}</p>
                    <p className='item-price'>$ {product.Price}</p>
                </div>
            </div>
        </NavLink>
    )
}

export default ShoppingCard