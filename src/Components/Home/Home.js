import React from "react";
import Banner from "./Banner";
import ServiceSegment from "./ServiceSegment";
import ApplianceRepairHomeSegment from "./ApplianceRepairHomeSegment";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ServiceSegment></ServiceSegment>
      <ApplianceRepairHomeSegment></ApplianceRepairHomeSegment>
    </div>
  );
};

export default Home;
