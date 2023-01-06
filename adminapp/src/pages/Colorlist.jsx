import React,{useEffect} from 'react'
import {  Table } from 'antd';
import {BiEdit} from 'react-icons/bi'
import{AiFillDelete} from 'react-icons/ai'
import {useDispatch,useSelector} from 'react-redux'
import {getColors} from "../features/colors/colorslice"
import {Link} from 'react-router-dom'
const columns = [
  {
    title: 'SNo',
    dataIndex: 'key',
  },
  {
    title: 'Title',
    dataIndex: 'title',
  },
  {
    title: 'Action',
    dataIndex: 'action',
  },
];


const Colorlist= () => {

  const dispatch=useDispatch();
  useEffect(()=>{
      dispatch(getColors());
  },[]);
  const colorstate=useSelector((state)=>state.color);
  console.log(colorstate);
  const data1= [];
  for (let i = 0; i < colorstate.length; i++) {
    data1.push({
      key: i+1,
      title:colorstate[i].title,
      action: <><Link to="/" className="ms-3 fs-3 text-success"><BiEdit/></Link><Link to="/" className="ms-3 fs-3 text-danger"><AiFillDelete/></Link></>,
    });
  }

  return (
    <div>
        <h3 className="mb-4 title">Colors</h3>
        <div><Table 
         columns={columns} 
         dataSource={data1} /></div>
    </div>
  )
}

export default Colorlist