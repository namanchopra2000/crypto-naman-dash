import Button from '../common/Button'
import React from 'react'
import "./style.css"
import { motion} from "framer-motion" 
import iphoneBack from "../.././assests/gradient.png" ; //phone image
import iphone from "../.././assests/iphone.png";  // gradient image
import { Link } from 'react-router-dom';

function MainComponent() {
  return (
    <div className="flex-info">

      {/* left side of landing page */}
        <div className="leftside">

          {/* heading 1 */}
            <motion.h1 
            initial={{opacity:0 ,y:50}}
            animate={{opacity:1 , y:0 } }
            transition={{duration: 1}}
            className='track-heading'>Track Crypto</motion.h1>

            {/* heading 2 */}
            <motion.h1 
            initial={{opacity:0 ,y:50}}
            animate={{opacity:1 , y:0 } }
            transition={{duration: 1 , delay:0.2}} 
            className='real-heading'>Real Time.</motion.h1>

            {/* para 1 */}
            <p className='track-text'>Track crypto through a public api in real time. Visit the dashboard to do so!</p>

            {/* landing pages buttons */}
            <motion.div 
            initial={{opacity:0 ,x:50}}
            animate={{opacity:1 , x:0 } }
            transition={{duration: 1 }} 
            className='landing-page-buttons'>
                <Link to="/dashboard"> <Button text="Dashboard" onClick={()=> console.log("hey")}/> </Link>
                <Button outlined={true} text="Share"/>
            </motion.div>

        </div>

        {/* right side of landing page */}

        <div className="phone">
          {/* animated image */}
            <motion.img className="iphone-img" 
            initial={{y:-10}}
            animate={{y:10 } }
            transition={{
            type:"smooth" ,
            repeat:Infinity ,
            repeatType:"mirror" ,
            duration: 2 }} 
            src={iphone}>
            </motion.img>

            {/* background -image */}
            <img className="gradient-img" src={iphoneBack}></img>
        </div>
      
    </div>
  )
}

export default MainComponent
