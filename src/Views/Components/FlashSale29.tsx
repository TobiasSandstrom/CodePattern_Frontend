import MapProducts from '../../Functions/MapProducts'


const FlashSale49 = () => {

  return (
    <div className='flashSale29'>
        <div className="flashSale29-container">
            <div className="flashSale29-img-container">
                <h2>2 FOR USD $29</h2>
                <div className="flashSale29-btn">
                  <div className="flashSale29-btn-inner">
                    FLASH SALE
                  </div>
                </div>
            </div>

            <div className="flashSale29-card-container">
              {MapProducts(4)}
            </div>

        </div>
    </div>
  )
}

export default FlashSale49