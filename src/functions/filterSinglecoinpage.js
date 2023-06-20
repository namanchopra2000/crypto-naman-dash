export default function filterNeededData (singleCoinData) {

    const limitedCoinData = {
    price_change_percentage_24h : singleCoinData.market_data.price_change_percentage_24h ,
    image : singleCoinData.image.large ,
    symbol : singleCoinData.symbol , 
    name :singleCoinData.name ,
    current_price: singleCoinData.market_data.current_price.inr ,
    total_volume : singleCoinData.market_data.total_volume.inr ,
    market_cap : singleCoinData.market_data.market_cap.inr ,
  }
    return limitedCoinData ;

}