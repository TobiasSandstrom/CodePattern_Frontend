import rightBanner from '../Images/sale-banner-right.svg'
import leftBanner from '../Images/sale-banner-left.svg'

const SaleBanners = () => {
  return (
    <div className='sale-banners'>

      <div className="banners-container">

        <div className="left-container">
          <img src={leftBanner} alt="" />
          
          <div className="left-text-container">
            
            <h2>Pamela Reif's<br></br> Top Picks</h2>
            <div className="left-btn-container">
              <div className="left-btn">
                <div className="left-btn-inner">
                  SHOP NOW
                </div>
              </div>
            </div>
          
          </div>      

        </div>
        
        <div className="right-container">
          <img src={rightBanner} alt="" />
          
          <div className="right-text-container">
            
            <h2>Let's Be<br></br> Consious</h2>
              <div className="right-btn-container">
                
                <div className="right-btn">
                  <div className="right-btn-inner">
                   Flash Sale
                  </div>
                  
                </div>
              </div>
          </div>
        </div>




      </div>





    </div>
  )
}

export default SaleBanners