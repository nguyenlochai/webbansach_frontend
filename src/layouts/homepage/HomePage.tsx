import React from "react";
import Banner from "./components/Banner";
import Carousel from "./components/Carousel";
import DanhSachSanPham from "../product/DanhSachSanPham";

function HomePage() {
  return (
        <div>
            <Banner></Banner>
            <Carousel></Carousel>
            <DanhSachSanPham></DanhSachSanPham>
        </div>
  );
}

export default HomePage;