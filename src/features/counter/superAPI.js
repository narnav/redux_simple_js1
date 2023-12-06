import axios from 'axios'

export function fetchProducts() {
    const MY_SERVR = 'http://localhost:3005/products'
    return axios.get(MY_SERVR)
}
