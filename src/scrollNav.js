import React, { useState } from 'react';

const nav = require('./images/ht_nav.png');

export default function ScrollNav() {

    const [bar, setBar] = useState({boxShadow: '1px 1px 1px rgba(104, 104, 104, 0.2)'});
    
    function changeShadow() {
        if(window.scrollY !== 0) {
            setBar({boxShadow: '10px 10px 10px rgba(104, 104, 104, 0.2)'});
        } else {
            setBar({boxShadow: '1px 1px 1px rgba(104, 104, 104, 0.2)'})
        }
    }

    document.addEventListener('scroll', () => {
        changeShadow();
    })

    return(
        <div>
            <img src={nav} width='100%' style={bar} alt='sustainable coaster design'/>
        </div>
    )

}