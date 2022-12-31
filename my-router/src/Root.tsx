import React from "react";
import { Outlet, useParams } from "react-router-dom";
import Header from "./components/Header";

export default function Root() {
  const { userId } = useParams();
  console.log(userId);
  return (
    <div>
      {/* <Router /> */}
      <Header />
      {/* Outlet 을 사용해서 자식 페이지를 랜더링하게 도와준다.*/}
      <Outlet context={{ darkMode: true }} />
    </div>
  );
}
