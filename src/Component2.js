import React from "react";
import Component3 from "./Component3";
import Component4 from "./Component4";
import ColorContext from "./ColorContext";

const Component2 = () => {
    return (
        <div>
        <ColorContext.Provider value="dark">
            <Component3 />
            <Component4 />
        </ColorContext.Provider>
        </div>
    );

}
export default Component2;
