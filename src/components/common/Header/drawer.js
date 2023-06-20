import  {React , useState} from 'react';
import Drawer from '@mui/material/Drawer'; //import right hand side drawer from material ui
import Button from '@mui/material/Button'; 
import MenuIcon from '@mui/icons-material/Menu';//import menu icon from material ui
import Switch from '@mui/material/Switch'; // dark mode switch icon import from material ui
import "./style.css" //css file of drawer component
import { Link } from 'react-router-dom';



export default function MobileDrawer() {
  const [open, setOpen] = useState(false); //check state of drawer is opened or not 
  const label = { inputProps: { 'aria-label': 'Switch demo' } }; //lable of switch
   
  return (
    <div>

          {/* This is the button of drawer when click drawer open frpm right hand side and change the sate of drawer to true */}
          <Button  onClick={()=>{setOpen(true)}}><MenuIcon className="drawer-button" /></Button>

{/* Here is drawer when we close chage  state to false  */}
          <Drawer
            anchor={'right'}
            open={open}
            onClose={()=>{setOpen(false)}}
          >
            {/* data of drawer */}
            <div className='nav-links-drawer'>
                <Link to="/" className="nav-link">Home</Link><br />
                <Link to="/compare" className="nav-link">Compare</Link><br/>
                <Link to="/watchlist" className="nav-link">Watchlist</Link><br/>
                <Link to="/dashboard" className="nav-link"> Dashboard</Link><br />
                <Switch {...label} defaultChecked />
          </div>
            </Drawer>
          
    </div>
  
)
  }