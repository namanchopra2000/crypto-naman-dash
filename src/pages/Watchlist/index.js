import React, { useEffect, useState } from 'react'
import TabsComponent from '../Dashboard/TabsComponent'
import fetchAllCoin from '../../functions/getAllCoins.';
import "./style.css"


function Watchlist() {


  const [coins, setCoins] = useState("");


  useEffect(() => {
    fetchStart();
  }, []);

  // function that which call fetchallcoin function in which api call to coingecko and recieve 100 coins data 
  async function fetchStart() {
    const fetchDone = await fetchAllCoin();
    const savedcoins = JSON.parse(localStorage.getItem("myArray"));
    console.log(savedcoins);
    const A = fetchDone.filter((item) => savedcoins.some((value) => value === item.name.toLowerCase()));
    setCoins(A);
    console.log(A);
  }

  return (
    <div style={{ color: "var(--white)", fontSize: "3rem", textAlign: "center", marginTop: "3rem" }}>
      {coins == "" ? "There Is No Coin In WishList!" : <TabsComponent coin={coins} searchedCoin={""} />}
    </div>
  )
}

export default Watchlist
