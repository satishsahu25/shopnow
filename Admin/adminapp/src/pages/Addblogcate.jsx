import React from 'react';
import Custominput from '../components/Custominput';

const Addblogcate=()=>{
 return <div>
    <h3 className="mb-4 title">Add blog category</h3>
    <div>
        <form action="">
            <Custominput type="text" placeholder="Category"/>
            <button
             type="submit"
              className="my-5 border-0 rounded-3 btn btn-success">Add blog category</button>
        </form>
    </div>
    </div>
}

export default Addblogcate;