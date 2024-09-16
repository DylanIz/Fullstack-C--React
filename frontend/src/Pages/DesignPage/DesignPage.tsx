import React from "react";
import Table from "../../Components/Table/Table";
import RatioList from "../../Components/RatioList/RatioList";

interface Props {}

const DesignPage = (props: Props) => {
  return (
    <>
      <h1>Finance Design Page</h1>
      <h2>
        This is the design page. This is where we will house design aspects
      </h2>
      <RatioList />
      <Table />
    </>
  );
};

export default DesignPage;
