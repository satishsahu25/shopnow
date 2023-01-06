import React from 'react';
import Custominput from '../components/Custominput';

const Addcate=()=>{
 return <div>
    <h3 className="mb-4 title">Add category</h3>
    <div>
        <form action="">
            <Custominput type="text" placeholder="Category"/>
            <button
             type="submit"
              className="my-5 border-0 rounded-3 btn btn-success">Add product category</button>
        </form>
    </div>
    </div>
}

export default Addcate;