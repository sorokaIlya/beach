import React from "react";
import {relevant} from './towns';
import Component from "./component";
const Gallery = ({city})=>{
    const collection =relevant[city];
    const styleConfig={
        1:{
            gridArea:'1/2/3/3'
        }
    }
    const mergeStyle=(compilation,config)=>{
        compilation.forEach((item,ind)=>
        item.style=config[ind]
        )
    }
    mergeStyle(collection,styleConfig)

    return(
        <div className="galellery">
            {
                relevant[city].map( (item,i)=>

                    <Component comp={item} key={i}/>
                )
            }
        </div>
    )
}
export default Gallery;
