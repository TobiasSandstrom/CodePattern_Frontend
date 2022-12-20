import MapTshirtDetails from './MapTshirtDetails';
import MapWatchDetails from './MapWatchDetails';
import MapShoeDetails from './MapShoeDetails';
import { IShoeProduct } from '../Models/IShoeProduct';
import { IWatchProduct } from '../Models/IWatchProduct';
import { ITshirtProduct } from '../Models/ITshirtProduct';



// Single responibility, Dry vet jag ej om detta räknas som. 

// Detta bryter tyvärr mot Open closed principen då ifall jag vill lägga till produkter måste jag gå in och lägga till
// både nytt case och göra en ny funktion som mappar ut just den produktens detaljerad information.

// Ansåg docl att detta funkar i detta lilla projekt men som sagt om man skulle ha massa fler kategorier
// skulle det bli lika många cases. Går garanterat att göra det på ett bättre sätt men tyckte det gick bra
// för detta projektet

// Använder även interfaces här som ärver av ett basinterface


const MapProductSpecified = (product:IShoeProduct | IWatchProduct | ITshirtProduct) => {

  switch(product.category){
    case "Shoes":
    return MapShoeDetails(product as IShoeProduct);

    case "Tshirts":
    return MapTshirtDetails(product as ITshirtProduct)

    case "Watches":
    return MapWatchDetails(product as IWatchProduct)

    default:
    return <></>
  }
  
}

export default MapProductSpecified