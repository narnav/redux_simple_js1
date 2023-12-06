import axios from 'axios'

export function checkout(myCart) {
    const MY_SERVR = 'http://localhost:3005/cart'
    return axios.post(MY_SERVR,myCart)
}
