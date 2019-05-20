
import '../sass/InputUser.scss';
import React from 'react';

export const InputForm = ({type,placeholder,onChange,...props }) => {
    return (
       <div className="form-group"> 
                
                <input  type={type} className="form-control form-control-user" onChange={onChange}  placeholder={placeholder} {...props}/>
       </div>
    )
}