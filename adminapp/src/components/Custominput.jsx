import React from 'react'


const Custominput = (props) => {
    const {type,placeholder,i_id, i_class,name,val,onCh,onBl}=props;
  return (
    <div className="form-floating mb-3">
        <label htmlFor="">{placeholder}</label>
        
        <input type={type}
        className={`form-control`}
        id={i_id}
        placeholder={placeholder}
        name={name}
        value={val}
        onChange={onCh}
        onBlur={onCh} />
        
    </div>
  )
}

export default Custominput