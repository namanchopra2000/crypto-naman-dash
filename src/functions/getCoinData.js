import axios from "axios";


export default function FetchSinglecoin (id) {

const d = axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((res)=> {
      return res.data ;
     }).catch((error) =>{console.log(error)})
      return d ;
}