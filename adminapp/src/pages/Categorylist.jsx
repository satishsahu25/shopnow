import React,{useEffect,useState} from 'react'
import {  Table } from 'antd';
import {BiEdit} from 'react-icons/bi'
import{AiFillDelete} from 'react-icons/ai'
import {useDispatch,useSelector} from 'react-redux'
import {getproductCategories,deleteProductcate,resetState} from "../features/pcategory/pcategoryslice"
import {Link} from 'react-router-dom'
import Custommodal from "../components/Custommodal";

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
  const [open, setOpen] = useState(false);
  const [productcateid, setproductcateid] = useState("");
  const showModal = (e) => {
    setOpen(true);
    setproductcateid(e);
  };
  const hideModal = () => {
    setOpen(false);
  };
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(resetState());
      dispatch(getproductCategories());
  },[]);
  const pcategorystate=useSelector((state)=>state.pcategories.productcategories);
  console.log(pcategorystate);
  const data1= [];
  for (let i = 0; i < pcategorystate.length; i++) {
    data1.push({
      key: i+1,
      title:pcategorystate[i].title,
      action: <><Link to={`/admin/productcategory/${pcategorystate[i]._id}`} className="ms-3 fs-3 text-success"><BiEdit/></Link>
      <button onClick={() => showModal(pcategorystate[i]._id)} 
      className="ms-3 fs-3 text-danger"><AiFillDelete/>
      </button></>,
    });
  }
  const deleteproductcate = (id) => {
    dispatch(deleteProductcate(id));
   setOpen(false);
  setTimeout(()=>{
    dispatch(getproductCategories());
  },100)
 };
  return (
    <div>
        <h3 className="mb-4 title">Categories</h3>
        <div><Table 
         columns={columns} 
         dataSource={data1} /></div>
         <Custommodal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteproductcate(productcateid);
        }}
        title={"Are you sure you want to delete this category?"}
      />
    </div>
  )
}

export default Categorylist