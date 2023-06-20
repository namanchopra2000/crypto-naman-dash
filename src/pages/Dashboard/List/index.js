import React from 'react'
import "./Liststyle.css"
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Tooltip } from '@mui/material';
import covertNumber from '../../../functions/convertNumber';
import { NavLink } from 'react-router-dom';
import StarBorderIcon from '@mui/icons-material/StarBorder';
function List({ coin, coinlist }) {



  var existingArray = JSON.parse(localStorage.getItem('myArray')) || [];
  function handleWatchlist(event){
      event.stopPropagation();
      var item = {} ;
      item.push(coin.id);
      existingArray.push(item);
      localStorage.setItem('myArray', JSON.stringify(existingArray));
  }

  // MAKE NEW TABLE ROW EACH TIME MAPPING CALL THIS PAGE
  // ALSO ADD TOOLTIP FOR EVERY TABLE DATA
  return (
    <tbody>
      {/* Navlink that help to route for every coins */}
      <NavLink to={`/coin/${coin.id}`} className="list-link">
        <tr className={`  ${coinlist ? "coin-page-list" : coin.price_change_percentage_24h > 0 ? "tr-green" : "tr-red"}`}>
          <td className='coin-info-div coin-info-div-list' >
            {/* logo */}
            <Tooltip title="Logo" >
              <img className='coin-img coin-img-list' src={coin.image}></img>
            </Tooltip>
            {/* symbol and name */}
            <div className=' coin-symbol-name  coin-symbol-name-list'>
              <Tooltip title="Coin Symbol" placement="top-end">
                <p className='coin-symbol coin-symbol-list'>{coin.symbol}-INR</p>
              </Tooltip>
              <Tooltip title="Name" >
                <p className='coin-name coin-name-list'>{coin.name}</p>
              </Tooltip>
            </div>
          </td>

          {/* condition rediriing of chips if + show grren id - show red */}
          {coin.price_change_percentage_24h > 0 ?
            (
              <>
                <Tooltip title="Price Change In Last 24h" placement="top" >
                  <td className='symbol-price symbol-price-list'>
                    <p className='chip-green chip-green-list'>+{coin.price_change_percentage_24h.toFixed(2)}%</p>
                    <TrendingUpIcon className='chip-up chip-up-list' />
                  </td>
                </Tooltip>
              </>
            )
            : (
              <>
                <Tooltip title="Price Change In Last 24h" placement="top">
                  <td className='symbol-price symbol-price-list'>
                    <p className='chip-red chip-red-list '>{coin.price_change_percentage_24h.toFixed(2)}%</p>
                    <TrendingUpIcon className='chip-down chip-down-list ' />
                  </td>
                </Tooltip>
              </>
            )
          }
          <Tooltip title="Current Price" placement="top" >
            <td>
              {/* green or red price */}
              <h2 className='price price-list'
                style={coin.price_change_percentage_24h > 0
                  ?
                  { color: "var(--green)" }
                  :
                  { color: "var(--red)" }}>
                &#8377;{coin.current_price.toLocaleString()}</h2>
            </td>
          </Tooltip>
          {/* shown on desktop not in mobile */}
          <Tooltip title="Total Volume" placement="top" >
            <td className='lower-detail-list total-volume'>
              <p>&#8377;{coin.total_volume.toLocaleString()}</p>
            </td>
          </Tooltip>
          <Tooltip title="Market Cap " placement="top" >
            <td className='lower-detail-list destop-view'>
              <p>&#8377;{coin.market_cap.toLocaleString()}</p>
            </td>
          </Tooltip>
          <Tooltip title="Market Cap " placement="top" >
            <td className='lower-detail-list mobile-view'>
              {/* Function To Conver Number From Big No. To add PostFix */}
              <p>&#8377;{covertNumber(coin.total_volume)}</p>
            </td>
          </Tooltip>
          <div className='wacthlis-list'>
          { coin.price_change_percentage_24h > 0 ?   <StarBorderIcon className='chip-up' onClick={(event) => handleWatchlist(event)} /> : <StarBorderIcon onClick={(event) => handleWatchlist(event)} className='chip-down' />}
            
          </div>
        </tr>
      </NavLink>
    </tbody>
  )
}

export default List
