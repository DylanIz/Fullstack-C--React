import React from "react";
import Table from "../../Components/Table/Table";

interface Props {}

const DesignPage = (props: Props) => {
  return (
    <>
      <h1>Finance Design Page</h1>
      <h2>
        This is the design page. This is where we will house design aspects
      </h2>
      <Table />
    </>
  );
};

export default DesignPage;