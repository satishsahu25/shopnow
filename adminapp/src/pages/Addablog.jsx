import React, { useState } from "react";
import Custominput from "../components/Custominput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import { Stepper } from 'react-form-stepper';
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




const Addablog = () => {
  const [desc, setdesc] = useState();
  const handledesc = (e) => {
    setdesc(e);
  };
  return (
    <div>
      <h3 className="mb-4 title">Add Blog</h3>
      {/* <Stepper
  steps={[{ label: 'Add Blog' }, { label: 'Upload Images' }, { label: 'Finish' }]}
  activeStep={1}
/> */}
      <div className="">
        <form action="">
          <Custominput type="text" placeholder="Title" />
          <select name="" id="" className="form-control py-3 mb-3">
            <option value="">Select Blog Category</option>
          </select>
          <ReactQuill
            theme="snow"
            value={desc}
            onChange={(evt) => {
              handledesc(evt.target.value);
            }}
          />
          <div className="mt-3 mb-3">
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
          </div>
          <button type="submit" className="my-5 border-0 rounded-3 btn btn-success">Add Blog</button>
        </form>
        
      </div>
    </div>
  );
};

export default Addablog;
