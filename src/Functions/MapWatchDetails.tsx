import { IWatchProduct } from '../Models/IWatchProduct'


//Single responsibility helt enkelt
// Mappar ut en klockprodukts specifika egenskaper på detaljsidan


const MapWatchDetails = (product:IWatchProduct) => {

  return (
    <>
        <h2>Details:</h2>
        <p>Dial Color: {product.dialColor}</p>
        <p>Band Color: {product.bandColor}</p>
        <p>Water Resistant: {!product.waterResistant ? "False" : "True" }</p>
        <p>Analogue: {!product.analogue ? "False" : "True"}</p>

    </>
  )
}

export default MapWatchDetails