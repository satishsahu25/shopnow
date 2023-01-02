import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";

const Refundpolicy = () => {
  return (
    <>
      <Meta title={"Refund policy"} />
      <BreadCrumb title="Refund policy" />
      <Container class1="policywrapper home-wrapper-2 py-4">
        <div className="row">
          <div className="col-12">
            <div className="policy"></div>
          </div>
        </div>
      </Container>
     
    </>
  );
};

export default Refundpolicy;
