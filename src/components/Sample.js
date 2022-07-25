import React from 'react';
import Fetchapi from './Fetchapi';


function Myimg () {

    return (
        <img src={Fetchapi().ad.source}/>
        )
}

export default Myimg;