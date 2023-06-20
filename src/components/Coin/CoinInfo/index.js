import React, { useState } from 'react'
import "./coinInfo.css"

function CoinInfo({ name, description }) {


    const fullText = description.en + "<br><h3 style='color: var(--grey)'>ReadLess....</h3>";
    const smallText = description.en.slice(0, 300) + "<br><h3 style='color: var(--grey)'>ReadMore....</h3>";

    const [reading, setreading] = useState(true);

    return (
        <div className='coin-info'>
            <h2 className='coin-heading'>{name}</h2>
            {
                description.en.length > 300 ?
                    <p
                        className='coin-desription'
                        onClick={() => setreading(!reading)}
                        dangerouslySetInnerHTML={{ __html: reading ? smallText : fullText }}
                    ></p>
                    : <p
                        className='coin-desription'
                        dangerouslySetInnerHTML={{ __html: fullText }}
                    ></p>
            }
        </div>
    )
}

export default CoinInfo
