import React,{useEffect} from 'react'
import {  Table } from 'antd';
import {BiEdit} from 'react-icons/bi'
import{AiFillDelete} from 'react-icons/ai'
import {useDispatch,useSelector} from 'react-redux'
import {getBlogs} from "../features/blogs/blogslice"
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
    title:'Category',
    dataIndex:'category'
  }
  ,
  {
    title: 'Action',
    dataIndex: 'action',
  },
 
  

];


const Bloglist = () => {

    const dispatch=useDispatch();
  useEffect(()=>{
      dispatch(getBlogs());
  },[]);
  const blogstate=useSelector((state)=>state.blog.blogs);
  console.log(blogstate);
  const data1= [];
  for (let i = 0; i < blogstate.length; i++) {
    data1.push({
      key: i+1,
      title:blogstate[i].title,
      category:blogstate[i].category,
      action: <><Link to="/" className="ms-3 fs-3 text-success"><BiEdit/></Link><Link to="/" className="ms-3 fs-3 text-danger"><AiFillDelete/></Link></>,
    });
  }
  return (
    <div>
        <h3 className="mb-4 title">Blogs</h3>
        <div><Table 
         columns={columns} 
         dataSource={data1} /></div>
    </div>
  )
}

export default Bloglist