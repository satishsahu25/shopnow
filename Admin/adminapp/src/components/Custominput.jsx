import React from 'react'


const Custominput = (props) => {
    const {type,placeholder,i_id, i_class}=props;
  return (
    <div className="form-floating mb-3">
        <label htmlFor={placeholder}>{placeholder}</label>
        <input type={type}
        className={`form-control ${i_class}`}
        id={i_id}
        placeholder={placeholder} />
        
    </div>
  )
}

export default Custominput