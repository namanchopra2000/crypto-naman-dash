import React, { useState } from 'react'
import "./gridstyle.css"
import { motion } from "framer-motion"
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { NavLink } from 'react-router-dom'
import StarBorderIcon from '@mui/icons-material/StarBorder';

// SINLGLE COIN DATA RECIEVE AS A PROP
function Grid({ coin }) {


const [add , setadd] = useState(false);

    var existingArray = JSON.parse(localStorage.getItem('myArray')) || [];
    function handleWatchlist(event){
        event.preventDefault();
        var item = coin.id 
        existingArray.push(item);
        localStorage.setItem('myArray', JSON.stringify(existingArray));
        setadd(true);
    }

    return (
        // routing in coins 
        <NavLink to={`/coin/${coin.id}`} className="grid-link"> 
            {/* // Condition adding classs to the main div of coin */}
            <motion.div
                whileHover={{ scale: 1.04 }}
                className={`single-coin-div ${coin.price_change_percentage_24h > 0 ? "single-coin-div-green" : "single-coin-div-red"}`} >

                <div className='coin-info-div' >
                    <img className='coin-img' src={coin.image}></img>
                    <div className='coin-symbol-name'>
                        <p className='coin-symbol'>{coin.symbol}-INR</p>
                        <p className='coin-name'>{coin.name}</p>
                    </div>
                    <div className='watchlist-button'>
                         { coin.price_change_percentage_24h > 0 ?   <StarBorderIcon className={`chip-up ${add ? "active-green" : "" }`} onClick={(event) => handleWatchlist(event)} /> : <StarBorderIcon onClick={(event) => handleWatchlist(event)} className= {`chip-down ${add ? "active-red" : ""} `} />}
                    </div>
                </div>
                {/* condition rendoring style of coins green and red style theme */}
                {coin.price_change_percentage_24h > 0 ?
                    (
                        <div className='chip-div'>
                            <div className='chip-green'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
                            <TrendingUpIcon className='chip-up' />
                

                        </div>
                    )
                    : (
                        <div className='chip-div'>
                            <div className='chip-red'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
                            <TrendingUpIcon className='chip-down' />
                        </div>
                    )
                }
                
                {/* condition price color  */}
                <div>
                    <h2 className='price'
                        style={coin.price_change_percentage_24h > 0
                            ?
                            { color: "var(--green)" }
                            :
                            { color: "var(--red)" }}>
                        &#8377;{coin.current_price.toLocaleString()}</h2>
                </div>
                <div className='lower-details'>
                    <p>Total Volume : &#8377;{coin.total_volume.toLocaleString()}</p>
                    <p>Market Cap : &#8377;{coin.market_cap.toLocaleString()}</p>
                </div>
            </motion.div >
        </NavLink>
    )
}

export default Grid
