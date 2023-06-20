import axios from "axios"

export default function fetchChartData(id , days) {
  const fetching = axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=inr&days=${days}&interval=daily`)
  .then((res)=>{
        return res.data ;
  }).catch((err)=>{
    console.log(err);
  })


    return fetching ;
}