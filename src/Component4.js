import React from 'react';
import ColorContext from "./ColorContext";
const Component4 = () => (
    <div>
        <ColorContext.Consumer>
            {value => <h3>I am using a {value} theme</h3>}
        </ColorContext.Consumer> 
    </div>
);

export default Component4;
