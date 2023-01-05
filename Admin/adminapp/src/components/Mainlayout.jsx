import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import {
  AiOutlineDashboard,
  AiOutlineBgColors,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { SiBrandfolder } from "react-icons/si";
import { BiCategoryAlt } from "react-icons/bi";
import { FaClipboardList } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
import {Link} from 'react-router-dom'

const { Header, Sider, Content } = Layout;
const Mainlayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className="text-white fs-5 text-center py-3 mb-0">
            <span className="sm-logo">DC</span>
            <span className="lg-logo">ShopNow</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key === "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <AiOutlineDashboard />,
              label: "Dashboard",
            },
            {
              key: "customers",
              icon: <AiOutlineUser />,
              label: "Customers",
            },
            {
              key: "catalog",
              icon: <AiOutlineShoppingCart />,
              label: "Catalog",
              children: [
                {
                  key: "addproduct",
                  icon: <AiOutlineShoppingCart />,
                  label: "Add Products",
                },
                {
                  key: "productlist",
                  icon: <SiBrandfolder />,
                  label: "Product List",
                },
                {
                  key: "addbrand",
                  icon: <SiBrandfolder />,
                  label: "Brand",
                },
                {
                  key: "brandlist",
                  icon: <SiBrandfolder />,
                  label: "Brand List",
                },
                {
                  key: "addcategory",
                  icon: <BiCategoryAlt />,
                  label: "Category",
                },
                {
                  key: "categorylist",
                  icon: <BiCategoryAlt />,
                  label: "Category List",
                },
                {
                  key: "addcolor",
                  icon: <AiOutlineBgColors />,
                  label: "Add Colors",
                },
                {
                  key: "colorlist",
                  icon: <AiOutlineBgColors />,
                  label: "Color List",
                },
              ],
            },
            {
              key: "orders",
              icon: <FaClipboardList />,
              label: "Orders",
            },
            {
              key: "blogs",
              icon: <FaClipboardList />,
              label: "Blogs",
              children: [
                {
                  key: "addblog",
                  icon: <FaClipboardList />,
                  label: "Add Blog",
                },
                {
                  key: "bloglist",
                  icon: <FaClipboardList />,
                  label: "Blog List",
                },
                {
                  key: "addblogcategory",
                  icon: <FaClipboardList />,
                  label: "Blog category",
                },
                {
                  key: "blogcategorylist",
                  icon: <FaClipboardList />,
                  label: "Blog Category List",
                },
              ],
            },
            {
              key: "enquiries",
              icon: <FaClipboardList />,
              label: "Enquiries",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="d-flex pe-5 justify-content-between px-1"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div className="d-flex gap-3 align-items-center">
            <div className="position-relative mx-2">
              <IoIosNotifications className="fs-5" />
              <span className="badge bg-warning rounded-circle p-1 position-absolute">
                3
              </span>
            </div>
            <div className="d-flex gap-3 align-items-center dropdown">
              <div>
                <img
                  src="https://b.thumbs.redditmedia.com/s4O7OJRmdK41MbxovvGQunqN9oAd9Oak6pzSo3K5vzU.png"
                  alt=""
                  className="userpic"
                />
              </div>
              <div
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                className="mx-1"
              >
                <h5 className="mb-0">Navdeep</h5>
                <p className="mb-0">navdeep@gamil.com</p>
              </div>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li >
                  <Link to="" className="dropdown-item py-2" style={{"height":"auto","lineHeight":"20px"}}>
                    Profile
                  </Link>
                </li>
                <li >
                  <Link to="" className="dropdown-item py-2"style={{"height":"auto","lineHeight":"20px"}} >
                    Signout
                  </Link>
                </li>
               
              </div>
            </div>
          </div>
          {/* <div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown link
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div> */}
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Mainlayout;
