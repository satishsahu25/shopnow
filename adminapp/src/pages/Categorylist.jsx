import React,{useEffect} from 'react'
import {  Table } from 'antd';
import {BiEdit} from 'react-icons/bi'
import{AiFillDelete} from 'react-icons/ai'
import {useDispatch,useSelector} from 'react-redux'
import {getproductCategories} from "../features/pcategory/pcategoryslice"
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


const Categorylist= () => {
  const dispatch=useDispatch();
  useEffect(()=>{
      dispatch(getproductCategories());
  },[]);
  const pcategorystate=useSelector((state)=>state.pcategories.productcategories);
  console.log(pcategorystate);
  const data1= [];
  for (let i = 0; i < pcategorystate.length; i++) {
    data1.push({
      key: i+1,
      title:pcategorystate[i].title,
      action: <><Link to="/" className="ms-3 fs-3 text-success"><BiEdit/></Link><Link to="/" className="ms-3 fs-3 text-danger"><AiFillDelete/></Link></>,
    });
  }
  return (
    <div>
        <h3 className="mb-4 title">Categories</h3>
        <div><Table 
         columns={columns} 
         dataSource={data1} /></div>
    </div>
  )
}

export default Categorylist