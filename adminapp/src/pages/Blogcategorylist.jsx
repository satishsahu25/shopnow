import React,{useEffect} from 'react'
import {  Table } from 'antd';
import {BiEdit} from 'react-icons/bi'
import{AiFillDelete} from 'react-icons/ai'
import {useDispatch,useSelector} from 'react-redux'
import {getblogCategories} from "../features/bcategory/bcateslice"
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


const Blogcategorylist = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
      dispatch(getblogCategories());
  },[]);
  const blogcatestate=useSelector((state)=>state.blogcategories.blogcategories);
  console.log(blogcatestate);
  const data1= [];
  for (let i = 0; i < blogcatestate.length; i++) {
    data1.push({
      key: i+1,
      title:blogcatestate[i].title,
      action: <><Link to="/" className="ms-3 fs-3 text-success"><BiEdit/></Link><Link to="/" className="ms-3 fs-3 text-danger"><AiFillDelete/></Link></>,
    });
  }
  return (
    <div>
        <h3 className="mb-4 title">Blogs catgeories</h3>
        <div><Table 
         columns={columns} 
         dataSource={data1} /></div>
    </div>
  )
}

export default Blogcategorylist