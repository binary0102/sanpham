import React from 'react';

export const InputForm = ({type,placeholder,onChange }) => {
    return (
       <div className="form-group"> 
                
                <input type={type} class="form-control form-control-user" onChange={onChange}  placeholder={placeholder} />
       </div>
    )
}