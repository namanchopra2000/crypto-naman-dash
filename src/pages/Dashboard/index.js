import React, { useEffect, useState } from 'react'
import TabsComponent from './TabsComponent' 
import axios from 'axios';
import SearchBar from './SearchBar/SearchBar';
import PaginationControlled from './pagina';
import CircularProgress from '@mui/material/CircularProgress';
import "./style.css"
import MoveToTop from './MoveToTop';
import fetchAllCoin from '../../functions/getAllCoins.';


function Dashboard() {




  

// state to handle reponse data from api get request and pass as a prop
  const [coins , setCoin] = useState([]);
   // state to show only 10 coins per page data of 10 coins only
  const [paginationCoin , setpaginationCoin] = useState([]);
  // state  of page in which page user is
  const[page , setpage] = useState(1);
  // serach anything and pass serch as a prrop to serch bar
  const [search ,  setSearch] = useState("");
  // state of loader is data false is not show loader
  const [loader , setloader] = useState(true);
   
  // function to find coins for perticular page and change coins if page changes on pagination component
  const Findpagination = (event , value)=> {
    var start = (value - 1) *10 ;
    var end = start+10; 
    const pagCoin = coins && coins.slice(start, end);
    setpaginationCoin(pagCoin);
    setpage(value);
  }

  // function that make search input global between dashboard and search component
  const coinSearch = (e)=>{
    setSearch(e.target.value);
  }
  
  
  // fetch start using useeffect hook runs once when page loads first time

  useEffect(()=>{
  fetchStart();
  },[]);
// function that which call fetchallcoin function in which api call to coingecko and recieve 100 coins data 
  async function fetchStart (){
    const fetchDone = await fetchAllCoin();
    // set all coins for enable serching
     setCoin(fetchDone);
    //  set 10 coins when first time load screen
     setpaginationCoin( fetchDone && fetchDone.slice(0, 10))
    //  once data is recieved and renders loader is off
     setloader(false)
  }

  return (
    
    <div>{
      loader ? (<div className='loader'>
      <CircularProgress size={100} />
      </div>
      ) : 
      (
        <div>
        {/* pass function to serach component and get search input from search bar */}
        <SearchBar onCoinSearch={coinSearch}/>
        <TabsComponent coin={search ==="" ? paginationCoin : coins} searchedCoin={search} />
        <div className='phone-view-for-move-to-top-button'>
        {
          search ==="" ? 
          <PaginationControlled page={page} handleChange={Findpagination} /> : ""  
        }
        </div>
        <MoveToTop />
        </div>
        )
      }
    </div>
  )
}

export default Dashboard
