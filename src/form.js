import React, {forwardRef, useEffect, useState} from "react";
import { Select } from 'antd';
import 'antd/dist/antd.css';
import {towns} from "./towns";
import Ocean from "./video/Ocean.mp4"
const { Option } = Select;

 const Choice=({city, handleChange})=>{

     function handleАuxiliary(value) {
         console.log(value)
         handleChange(value.label);
     }
     return (
         <div className='player'>
             <video autoPlay loop muted playsInline
                    style={{position:"absolute",
                        top:'0',
                        left:'0',
                        width:'100%',

                        // height:'100%'
                    }}
             >
                 <source src={Ocean} type="video/mp4"/>
             </video>

         <Select
             labelInValue
             defaultValue={city}
             style={{ width: 120,zIndex:"1000",
             position:"relative"
             }}
             onChange={handleАuxiliary}
             >
             {towns.map(town=>
                 <Option value={town}  key={town} >{town}</Option>
             )}

         </Select>

         </div>
 )
}
export default Choice;
