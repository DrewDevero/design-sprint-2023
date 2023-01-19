import React from 'react';
const imageOne = require('./images/coster_design.jpg');
const imageTwo = require('./images/place_mat.jpg');
const imageThree = require('./images/table_runner.jpg');

const images = [imageOne, imageTwo, imageThree];

export default function Images() {

    return(
        <div className='images'>
            <div>
                <img id='img-one' src={images[0]} alt='Coaster'/>
                <h2>Coaster</h2>
                <p>10cm diameter blanket stitched.</p>
                <p>Harris Tweed is naturally water resistant however the material can also be washed in warm water using wool detergent, dried flat. Easy clean-up for homes</p>
            </div>
            <div>
                <img id='img-two' src={images[1]} alt='Place Mat'/>
                <h2>Place Mat</h2>
                <p>35 X 28cm with backing.</p>
                <p>Since each weaver only produces about 50 meters of material at a time unique patterns are created every time. This means each collection will be unique and personal.</p>
            </div>
            <div>
                <img id='img-three' src={images[2]} alt='Table Runner'/>
                <h2>Table Runner</h2>
                <p>27.94 X 114.3cm varying.</p>
                <p>customers who purchase Harris Tweed products for our values and sustainability can now enjoy these elements in their homeware.</p>
            </div>
        </div>
    )
}
        