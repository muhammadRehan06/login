import React, { Component } from 'react';
import "./Input.css";

const Input = (props) =>{
    const {type, value, id, name,label, placeholder, errors, onChange } = props;
    return(
         <div className="InputContainer">
             <label htmlFor={id}>
                 <span className="label">{label}</span>
             <div className="InputWrapper">
                 <input 
                 type={type}
                 value={value}
                 id={id}
                 name={name}
                 placeholder={placeholder}
                 onChange={(ev) => onChange && onChange(ev)}
                 errors={errors}
                 />
             </div>  
             </label>  
                 {errors && errors.errorObj[name] && <div className="error-wrapper">
                     <p className="error">(errors.errorObj[name].message)</p>
                 </div>}
             
         </div>

    )
}
export {Input};