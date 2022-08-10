import React from "react";
import Layout from "./Layout";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Layout>
        <div style={{ flex: 1 }}>
          <Outlet />
        </div>
      </Layout>
    </div>
  );
};

export default Main;
