import React from 'react';
import '@google/model-viewer';

//let GLTF = require('./images/GeneratedAssets-0.5.0/Compatibility/Compatibility_02.gltf')
//let GLTF = require('./images/GeneratedAssets-0.5.0/Texture_Sampler/Texture_Sampler_13.gltf')
//let GLTF = require('./images/Corset/glTF/Corset.gltf');
//let GLTF = require('./images/Corset/glTF-Binary/Corset.glb');
//let post = require('./images/Corset/screenshot.jpg');

let GLTF = require('./images/cloth_no_background.glb');
let post = require('./images/place_mat.jpg');

export default function Model() {

    return(
        <div id='model'>
            <model-viewer src={GLTF} alt="sustainable product" auto-rotate rotation-per-second="0.5rad" slot="progress-bar" render-scale camera-controls shadow-intensity="1" poster={post}>
            </model-viewer>
        </div>
    )

}