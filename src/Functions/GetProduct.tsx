import axios from 'axios'
import { ProductDetailsRequest } from '../Models/ProductDetailsRequest'


// Hämtar en produkt från databasen
// Single responsibility samt DRY
// Använder ett interface för requesten

export const GetProduct = (request:ProductDetailsRequest) => {
    return axios.get(`https://localhost:7101/api/product/${request.category}?id=${request.id}`)
}