import React,{useEffect} from 'react'
import {  Table } from 'antd';
import {BiEdit} from 'react-icons/bi'
import{AiFillDelete} from 'react-icons/ai'
import {useDispatch,useSelector} from 'react-redux'
import {getBrands} from "../features/brand/brandslice"
import {Link} from 'react-router-dom'

const columns = [
  {
    title: 'SNo',
    dataIndex: 'key',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    sorter:(a,b)=>a.title.length-b.title.length 
  },
  {
    title: 'Action',
    dataIndex: 'action',
  },

];



const Brandlist= () => {

  const dispatch=useDispatch();
  useEffect(()=>{
      dispatch(getBrands());
  },[]);
  const brandstate=useSelector((state)=>state.brand.brands);
  console.log(brandstate);
  const data1= [];
  for (let i = 0; i < brandstate.length; i++) {
    data1.push({
      key: i+1,
      title:brandstate[i].title,
      action: <><Link to="/" className="ms-3 fs-3 text-success"><BiEdit/></Link><Link to="/" className="ms-3 fs-3 text-danger"><AiFillDelete/></Link></>,
    });
  }

  return (
    <div>
        <h3 className="mb-4 title">Brands</h3>
        <div><Table 
         columns={columns} 
         dataSource={data1} /></div>
    </div>
  )
}

export default Brandlist