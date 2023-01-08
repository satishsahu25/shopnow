import React,{useEffect} from 'react'
import {  Table } from 'antd';
import {BiEdit} from 'react-icons/bi'
import{AiFillDelete} from 'react-icons/ai'
import {useDispatch,useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import { getallcoupons } from '../features/coupon/couponslice';

const columns = [
  {
    title: 'SNo',
    dataIndex: 'key',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    sorter:(a,b)=>a.name.length-b.name.length 
  },
  {
    title: 'Discount',
    dataIndex: 'discount',
    
  },
  {
    title: 'Expiry',
    dataIndex: 'expiry',
  },
  {
    title: 'Action',
    dataIndex: 'action',
  },

];



const Couponlist = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
      dispatch(getallcoupons());
  },[]);
  const couponstate=useSelector((state)=>state.coupon.coupons);
  console.log(couponstate);
  const data1= [];
  for (let i = 0; i < couponstate.length; i++) {
    data1.push({
      key: i+1,
      name:couponstate[i].name,
      expiry:new Date(couponstate[i].expiry).toLocaleString(),
      discount:couponstate[i].discount,
      action: <><Link to={`/admin/coupon/${couponstate[i]._id}`} className="ms-3 fs-3 text-success"><BiEdit/></Link><Link to="/" className="ms-3 fs-3 text-danger"><AiFillDelete/></Link></>,
    });
  }

  return (
    <div>
        <h3 className="mb-4 title">Coupons</h3>
        <div><Table 
         columns={columns} 
         dataSource={data1} /></div>
    </div>
  )
}
export default Couponlist