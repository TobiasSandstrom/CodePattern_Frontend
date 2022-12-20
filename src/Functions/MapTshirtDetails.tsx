import { ITshirtProduct } from "../Models/ITshirtProduct"


//Single responsibility helt enkelt
// Mappar ut en tshirtprodukts specifika egenskaper på detaljsidan



const MapTshirtDetails = (product: ITshirtProduct) => {

  return (
    <>
      <h2>Details:</h2>
      <p>Size: {product.size}</p>
      <p>Color: {product.color}</p>
      <p>Type: {product.shirtType}</p>
      <p>Neck: {product.neckType}</p>
      <p>Arms: {product.armLenght}</p>
    </>
  )
}

export default MapTshirtDetails