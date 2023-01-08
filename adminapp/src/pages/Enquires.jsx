import React, { useEffect } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getEnquiry } from "../features/enquiry/enquiryslice";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
   {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
 
  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Enquires = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEnquiry());
  }, []);
  const enquirystate = useSelector((state) => state.enquiries);
  console.log(enquirystate);
  const data1 = [];
  for (let i = 0; i < enquirystate.length; i++) {
    data1.push({
      key: i + 1,
      name: enquirystate[i].name,
      status: (
        <>
        <select name="" id="" className="form-control form-select">
        <option value="">Set Status</option></select>
        </>
      ),
      email: enquirystate[i].email,
      mobile:enquirystate[i].mobile,
      date: enquirystate[i].createdAt,
      action: (
        <>
          <Link to="/" className="ms-3 fs-3 text-danger">
            <AiFillDelete />
          </Link>
        </>
      ),
    });
  }
  return (
    <div>
      <h3 className="mb-4 title">Enquiries</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Enquires;
