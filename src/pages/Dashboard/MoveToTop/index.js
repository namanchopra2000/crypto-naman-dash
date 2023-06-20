import React from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import "./style.css"
import moveToTop from '../../../functions/moveToTop';


function MoveToTop() {
  return (
    <div className='move-to-top-btn' onClick={moveToTop}> 
      <ArrowUpwardIcon size={60}/>
    </div>
  )
}

export default MoveToTop
