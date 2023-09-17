import React from "react";
import Banner from "./Banner";
import ServiceSegment from "./ServiceSegment";
import ApplianceRepairHomeSegment from "./ApplianceRepairHomeSegment";
import Form from "./Form";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ServiceSegment></ServiceSegment>
      <ApplianceRepairHomeSegment></ApplianceRepairHomeSegment>
      <Form></Form>
    </div>
  );
};

export default Home;
