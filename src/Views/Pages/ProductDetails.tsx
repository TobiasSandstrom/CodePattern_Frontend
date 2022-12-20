import { useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import MapProductDetails from '../../Functions/MapProductDetails'
import { ProductDetailsRequest } from '../../Models/ProductDetailsRequest';

const ProductDetails = () => {

  const {category, id} = useParams();
  const req:ProductDetailsRequest = {
    category: String(category),
    id: String(id)
  }

  return (
    <div>
        <Navbar/>
    
        <div className="product-detail">
            {MapProductDetails(req)}
        </div>
    </div>
  )
}

export default ProductDetails