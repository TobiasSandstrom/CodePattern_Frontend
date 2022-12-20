import axios from 'axios'

// Hämtar alla produkter i databasen
// Single responsibility samt DRY


export const FetchProducts = async () => {
    return axios.get("https://localhost:7101/api/products")
}
