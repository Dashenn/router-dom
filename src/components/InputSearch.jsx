import React from "react";
const InputSearch = ({onChange, value, className}) => {
    return  (
        <input className={className} value={value} onChange={onChange}></input>
    )
        
    
}
export default InputSearch