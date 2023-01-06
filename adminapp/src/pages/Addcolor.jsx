import React from 'react';
import Custominput from '../components/Custominput';

const Addcolor=()=>{
 return <div>
    <h3 className="mb-4 title">Add colors</h3>
    <div>
        <form action="">
            <Custominput type="color" placeholder="Color"/>
            <button
             type="submit"
              className="my-5 border-0 rounded-3 btn btn-success">Add color</button>
        </form>
    </div>
    </div>
}

export default Addcolor;