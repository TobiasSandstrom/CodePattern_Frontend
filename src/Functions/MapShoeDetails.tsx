import { IShoeProduct } from '../Models/IShoeProduct'


//Single responsibility helt enkelt
// Mappar ut en skoprodukts specifika egenskaper på detaljsidan


const MapShoeDetails = (product:IShoeProduct) => {

  return (
    <>
        <h2>Details:</h2>
        <p>Size: {product.size}</p>
        <p>Color: {product.color}</p>
        <p>Type: {product.shoeCategory}</p>
    </>
  )
}

export default MapShoeDetails