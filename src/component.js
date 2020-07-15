import React from "react";

const Component=({comp})=>{

    const immBackground = {backgroundImage:`url("${require(`./images/${comp.image}`)}")`} ;
    //const style ={...comp.style,...immBackground}
    return(
        <div className='galellery-component' style={comp.style}>
            <div className="galellery-img-holder" style={immBackground}>
            </div>
        </div>
    )
}
export default Component;
