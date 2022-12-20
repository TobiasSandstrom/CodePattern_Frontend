import creditCard from '../Images/credit-card.svg'
import customerService from '../Images/customer-service.svg'
import truck from '../Images/delivery-truck.svg'

// SRP - Varje component i Components har ett syfte, 
// denna att visa CustomerWaranty delen



const Customerwaranty = () => {
  return (
    <div className='customer-waranty'>

      <div className="customer-waranty-border-container"></div>
      
      <div className="customer-waranty-container">

        <div className="customer-waranty-content-container">
          <div className="customer-waranty-img-container">
            <img src={customerService} alt="" />
          </div>
          <p>Customer Support</p>
          <small>Village did removed enjoyed<br /> explain talking.</small>

        </div>

        <div className="customer-waranty-content-container">
          <div className="customer-waranty-img-container">
            
            <img src={creditCard} alt="" />
          </div>
          <p>Secured Payments</p>
          <small>Village did removed enjoyed<br /> explain talking.</small>
        </div>

        <div className="customer-waranty-content-container">
          <div className="customer-waranty-img-container"> 
            <img src={truck} alt="" />
          </div>
          <p>Free Home Delivery</p>
          <small>Village did removed enjoyed<br /> explain talking.</small>

        </div>

        <div className="customer-waranty-content-container">
          <div className="customer-waranty-img-container"> 
            <img src={truck} alt="" />
          </div>
          <p>30 Days Returns</p>
          <small>Village did removed enjoyed<br /> explain talking.</small>

        </div>


      </div>

    </div>
  )
}

export default Customerwaranty