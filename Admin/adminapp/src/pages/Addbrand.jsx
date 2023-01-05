import React from 'react';
import Custominput from '../components/Custominput';

const Addbrand=()=>{
 return <div>
    <h3 className="mb-4 title">Add Brands</h3>
    <div>
        <form action="">
            <Custominput type="text" placeholder="Brand"/>
            <button
             type="submit"
              className="my-5 border-0 rounded-3 btn btn-success">Add Brands</button>
        </form>
    </div>
    </div>
}

export default Addbrand;