import React, { useEffect, useState } from 'react'
import TabsComponent from '../Dashboard/TabsComponent'
import fetchAllCoin from '../../functions/getAllCoins.';
import "./style.css";


function Watchlist() {


  const [coins, setCoins] = useState("");
  const [refresh , torefresh] = useState(false);

  useEffect(() => {
    fetchStart();
  }, []);
function handelrefresh(){
  torefresh(true);
}
  // function that which call fetchallcoin function in which api call to coingecko and recieve 100 coins data 
  async function fetchStart() {
    const fetchDone = await fetchAllCoin();
    const savedcoins = JSON.parse(localStorage.getItem("myArray"));
    console.log('fetchDone',fetchDone)
    const A = fetchDone.filter((item) => savedcoins.some((value) => value === item.id.toLowerCase()));
    setCoins(A);
    if(refresh == true){
      const savedcoins = JSON.parse(localStorage.getItem("myArray"));
      const A = fetchDone.filter((item) => savedcoins.some((value) => value === item.id.toLowerCase()));
      setCoins(A);
      torefresh(false);
    }
  }

  

  return (
    <div style={{ color: "var(--white)", fontSize: "3rem", textAlign: "center", marginTop: "3rem" }}>
      {coins == "" ? "There Is No Coin In WishList!" : <TabsComponent coin={coins} searchedCoin={""} refresh={handelrefresh} />}
    </div>
  )
}

export default Watchlist

