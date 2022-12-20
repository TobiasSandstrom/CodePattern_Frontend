import MapProducts from '../../Functions/MapProducts'


const FlashSale49 = () => {

    return (
        <div>

            <div className='flashSale49'>
                <div className="flashSale49-container">

                    <div className="flashSale49-card-container">
                        {MapProducts(4)}
                    </div>

                    <div className="flashSale49-img-container">
                        <h2>2 FOR USD $49</h2>
                        <div className="flashSale49-btn">
                            <div className="flashSale49-btn-inner">
                                FLASH SALE
                            </div>
                        </div>
                    </div>

                </div>
            </div>



        </div>
    )
}

export default FlashSale49