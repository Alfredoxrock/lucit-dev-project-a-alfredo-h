import React from 'react';
import Fetchapi from './Fetchapi';
import './Cardinfo.css';

function Card () {

    const Cards = [];

    const myCard = {
      myImgSource: Fetchapi().ad.source,
      ttime: Fetchapi().ad.OriginalTime,
      ttitle: Fetchapi().ad.agency,
      address: Fetchapi().ad.billboard_identifier
    }
    
    Cards.push(myCard);

    const renderCard = (cardd,index) => {
        return (
                     <div key={index}> 
                           <div>
                            <h3>{cardd.ttitle}</h3>
                            <h4 className="mytext">Date: {cardd.ttime}</h4>
                            <h5 className="mytext2">{cardd.address}</h5>
                           </div>
                           <div >
                                <img src={cardd.myImgSource}/>
                           </div>
                     </div>
                    
               )
    }

    return (
        <div>{Cards.map(renderCard)}</div>
    )
}

export default Card;