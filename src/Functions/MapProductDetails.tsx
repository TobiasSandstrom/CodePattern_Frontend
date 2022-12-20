import { useEffect, useState } from 'react'
import ShoppingDetailsCard from '../Views/Components/ShoppingDetailsCard'
import { ProductDetailsRequest } from '../Models/ProductDetailsRequest'
import { GetProduct } from './GetProduct'


// Single responibility samt DRY
// Mappar ut en produkts detaljer

const MapProductDetails = (req: ProductDetailsRequest) => {

    const [product, setProduct]: any = useState([])

    useEffect(() => {
        async function Map() {
            await GetProduct(req).then((res) => {
                setProduct(res.data)
            })
        }
        Map();
    }, []);


    return (
        <>
            <ShoppingDetailsCard key={product.artNumber} data={product} />
        </>
    )
}

export default MapProductDetails