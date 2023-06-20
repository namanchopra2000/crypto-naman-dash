import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
import fetchAllCoin from '../../../functions/getAllCoins.';
import "./style.css";


const SelectCrypto = ({crypto1 , crypto2 , setcrypto1 ,  setcrypto2}) => {
   const [Allcoins , setAllcoins] = useState("");
    // state of loader
  const [loader, setloader] = useState(true);

    const handleChange = (event) => {
        setcrypto1(event.target.value)
    };
    const handleChange2 = (event) => {
        setcrypto2(event.target.value)
    };


    React.useEffect(()=>{
        fetchdata()
    } , [])

 async function fetchdata(){
const fetchDone = await fetchAllCoin();
setAllcoins(fetchDone);
setloader(false);
console.log(fetchDone)
 }
    const style = {
        textTransform:"capitalize",
        height: "2.5rem",
        color: "var(--white)",
        "& .MuiOutlinedInput-notchedOutline": { borderColor: "#3a80e9" },
        "& .MuiSvgIcon-root":{
            color:"var(--white)",
        },
        "&:hover": {
            "&& fieldset": {
                borderColor: "#3a80e9",
            },
        },
    };

    return  <div className='compare-coins'>
      {
        loader ? <div className='loader'>
          <CircularProgress size={100} />
        </div>
          :
          (<>
            <span>Crypto 1</span>
            <Select
                sx={style}
                value={crypto1}
                onChange={handleChange} >
                    {
                        Allcoins.filter((item)=> item.id != crypto2).map((value) =>{return  <MenuItem sx={{textTransform:"capitalize"}} value={value.id}>{value.id}</MenuItem>} )
}               
            </Select>
            <span>Crypto 2</span>
            <Select
                sx={style}
                value={crypto2}
                onChange={handleChange2} >
                    {
                        Allcoins.filter((item)=> item.id != crypto1).map((value) =>{return  <MenuItem sx={{textTransform:"capitalize"}} value={value.id}>{value.id}</MenuItem>} )
}               
            </Select>
           </>

)}
</div>
}

export default SelectCrypto ;

