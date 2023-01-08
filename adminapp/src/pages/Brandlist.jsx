import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBrand,
  getBrands,
  resetState,
} from "../features/brand/brandslice";
import { Link } from "react-router-dom";
import Custommodal from "../components/Custommodal";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "title",
    sorter: (a, b) => a.title.length - b.title.length,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Brandlist = () => {
  const [open, setOpen] = useState(false);
  const [brandid, setbrandid] = useState("");
  const showModal = (e) => {
    setOpen(true);
    setbrandid(e);
  };
  const hideModal = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState());
    dispatch(getBrands());
  }, []);
  const brandstate = useSelector((state) => state.brand.brands);
  console.log(brandstate);
  const data1 = [];
  for (let i = 0; i < brandstate.length; i++) {
    data1.push({
      key: i + 1,
      title: brandstate[i].title,
      action: (
        <>
          <Link
            to={`/admin/brand/${brandstate[i]._id}`}
            className="ms-3 fs-3 text-success"
          >
            <BiEdit />
          </Link>
          <button
            onClick={() => showModal(brandstate[i]._id)}
            className="ms-3 fs-3 text-danger"
          >
            <AiFillDelete />
          </button>
        </>
      ),
    });
  }


  const deletebrand = (id) => {
     dispatch(deleteBrand(id));
    setOpen(false);
   setTimeout(()=>{
    dispatch(getBrands());
   },100)
  };
  return (
    <div>
      <h3 className="mb-4 title">Brands</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <Custommodal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deletebrand(brandid);
        }}
        title={"Are you sure you want to delete this brand?"}
      />
    </div>
  );
};

export default Brandlist;
