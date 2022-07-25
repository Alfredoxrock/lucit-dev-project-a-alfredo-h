import React, {useState, useEffect} from 'react'

//export { mongol };

export function Fetchapi () {

    const [imgSrc, setSource] = useState([]);
    const [billaddr, setBillboardAddress] = useState([]);
    const [billagency, setAgency] = useState([]);
    const [billidentifier, setIdentifier] = useState([]);
    const [timme, setTime] = useState([]);

    const apiGet = () =>{
        const url = "http://layout.lucit.cc/api/v1/analytics/pingbacks/get-last?api_token=2bPwMrJkNB26KkL4Jbz4en67r50kjV3HeLUPHSwNWqqSN9eBhEa1NITIO3yX";
        fetch(url)
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            setSource(json["pingbacks"]["0"]["inventory_photo"]["options"]["composition"]["0"]["data"]["src"]);
            setBillboardAddress(json["pingbacks"]["0"]["ip_address"]);
            setAgency(json["pingbacks"]["0"]["digital_board"]["agency"]["name"]);
            setIdentifier(json["pingbacks"]["0"]["digital_board"]["board_identifier"]);
            setTime(json["pingbacks"]["0"]["play_datetime_original"]);
        })
    };

    useEffect(() => {
        const intervalCall = setInterval(() => {
          apiGet();
        }, 15000);
        return () => {
          // clean up
          apiGet();
          clearInterval(intervalCall);
        };
      }, []);

    const ad = {
      source: imgSrc,
      billboardaddress: billaddr,
      agency: billagency,
      billboard_identifier: billidentifier,
      OriginalTime: timme
    }

    return (
            {ad}
        )

     
};


export default Fetchapi;