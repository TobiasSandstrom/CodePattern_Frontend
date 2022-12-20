import {useEffect, useState} from 'react'
import ShoppingCard from '../Views/Components/ShoppingCard'
import { FetchProducts } from './FetchProducts'


// Single responibility samt DRY
// Funktion som mappar ut så många produkter du vill ha ifrån databasen.

const MapProducts = (amount:number) => {
    
    const [products, setProducts]:any = useState([])

    useEffect(() => {

            FetchProducts().then((response) => {
                if (response.data.length > amount) {
                    setProducts(response.data.splice(0, amount));
                    return;
                }
                setProducts(response.data)
            })
           
        }, []);

    return (
    <>{products.map((data:any) => (
        <ShoppingCard key={data.ArtNumber} product={data} />
    ))}</>
  )
}

export default MapProducts