import React ,{useState}from 'react'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Custominput from '../components/Custominput'

import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
const { Dragger } = Upload;
const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};


const Addproduct = () => {
    const [desc, setdesc] = useState();
    const handledesc = (e) => {
      setdesc(e);
    };
  return (
    <div>
        <h3 className="mb-4 title">Add Product</h3>
        <div>
            <form action="">
                <Custominput type="text" placeholder="Title"/>
               <div className="mb-3">
               <ReactQuill
            theme="snow"
            value={desc}
            onChange={(evt) => {
              handledesc(evt.target.value);
            }}
          />
               </div>
    
          <select name="" id="" className="form-control py-3 mb-3">
            <option value="">Select Category</option>
          </select>
          <select name="" id="" className="form-control py-3 mb-3">
            <option value="">Select Color</option>
          </select>
          <select name="" id="" className="form-control py-3 mb-3">
            <option value="">Select Brand</option>
          </select>
          <Custominput type="number" placeholder="Price"/>
          <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibit from uploading company data or other
      band files
    </p>
  </Dragger>
            <button
             type="submit"
              className="my-5 border-0 rounded-3 btn btn-success">Add Product</button>
            </form>
        </div>
    </div>
  )
}

export default Addproduct