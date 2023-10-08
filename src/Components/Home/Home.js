import React from "react";
import Banner from "./Banner";
import ServiceSegment from "./ServiceSegment";
import Form from "./Form";
import Footer from "../Shared/Footer";
import banner4 from "../../images/background.gif";

const Home = () => {
  return (
    <div
      style={{
        background: `url(${banner4})`,
        backgroundSize: "cover",
      }}
    >
      <Banner></Banner>
      <ServiceSegment></ServiceSegment>
      <Form></Form>
      <Footer></Footer>
    </div>
  );
};

export default Home;
