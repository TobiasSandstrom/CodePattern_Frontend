import MapProductSpecified from '../../Functions/MapProductSpecified'
import { SetRating } from '../../Functions/SetRating'


const ShoppingDetailsCard = (data: any) => {
    const product = data.data


    return (
        <>


            <div className="product-detail-container">

                <div className="product-img-container">
                    <img src={product.imgUrl} alt="" />
                </div>

                <div className="product-content-container">

                    <h2 className='product-detail-header'>{product.name}</h2>

                    <div className="product-art-brand">
                        <small className='product-detail-artnumber'><small className="product-small-bold">Article Number: </small> {product.artNumber}</small>
                        <small className='product-detail-brand'><small className="product-small-bold">Brand:</small> {product.brand}</small>
                    </div>

                    <p className='product-detail-rating'>Rating: {SetRating(product.rating)} </p>

                    <p className='product-detail-price'>Price:  ${product.price}</p>

                    <p className='product-short-description'>{product.shortDescription}</p>

                    <div className='product-specified-info'>

                        {MapProductSpecified(product)}


                        <div className="product-btn-container">
                            <button className='product-btn'>Add To Cart</button>
                        </div>

                    </div>


                </div>

            </div>

            <div className="product-long-description-container">
                <p>Description:</p>
                <p className='product-long-description'>{product.longDescription}</p>

            </div>

        </>
    )
}

export default ShoppingDetailsCard