import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import { Column } from '@ant-design/plots';
import {  Table } from 'antd';
const columns = [
  {
    title: 'SNo',
    dataIndex: 'key',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Product',
    dataIndex: 'product',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
];

const data1= [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `Edward King ${i}`,
    product: `London, Park Lane no. ${i}`,
    status:'fsdf'
  });
}


const Dashboard = () => {
  const data = [
    {
      type: 'Jan',
      sales: 38,
    },
    {
      type: 'Feb',
      sales: 52,
    },
    {
      type: 'Mar',
      sales: 61,
    },
    {
      type: 'Apr',
      sales: 145,
    },
    {
      type: 'May',
      sales: 48,
    },
    {
      type: 'June',
      sales: 38,
    },
    {
      type: 'July',
      sales: 38,
    },
    {
      type: 'Aug',
      sales: 38,
    },
    {
      type: 'Sept',
      sales: 38,
    },
    {
      type: 'Oct',
      sales: 38,
    },
    {
      type: 'Nov',
      sales: 38,
    },
    {
      type: 'Dec',
      sales: 38,
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    color:({type})=>{
      return "#ffd333"
    },
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'Month',
      },
      sales: {
        alias: 'Income',
      },
    },
  };
  return (
    <div>
      <h3 className="mb-4 title">Dashboard</h3>
      <div className="d-flex justify-content-between align-items-center gap-3">
        <div className="d-flex justify-content-between bg-white p-3 rounded-3 align-items-end flex-grow-1">
          <div>
            <p className="mb-0 desc">Total</p>
            <h4 className="mb-0 sub-title">$100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="green">
              <BsArrowDownRight />
              25%
            </h6>
            <p classsName="desc">Compared to April 2001</p>
          </div>
        </div>
        <div className="d-flex bg-white p-3 rounded-3 align-items-end justify-content-between flex-grow-1">
          <div>
            <p className="mb-0 desc">Total</p>
            <h4 className="mb-0 sub-title">$100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="red">
              <BsArrowDownRight />
              25%
            </h6>
            <p classsName="desc">Compared to April 2001</p>
          </div>
        </div>
        <div className="d-flex bg-white p-3 rounded-3 align-items-end justify-content-between flex-grow-1">
          <div>
            <p className="mb-0 desc">Total</p>
            <h4 className="mb-0 sub-title">$100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6>
              <BsArrowDownRight />
              25%
            </h6>
            <p classsName="desc">Compared to April 2001</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h4 className="mb-4 title">Income Statistics</h4>
        <div>
        <Column {...config} />
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-4">Recent Orders</h3>
        <div><Table 
         columns={columns} 
         dataSource={data1} /></div>
      </div>
      <div className="my-4">
        <h3 className="mb-4 title">Recent Reviews</h3>
        <div className="d-flex">
          <div></div>
          <div></div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
