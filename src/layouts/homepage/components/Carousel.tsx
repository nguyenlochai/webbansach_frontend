import React, { useEffect, useState } from "react";
import SachModel from "../../../models/SachModel";
import { lay4QuyenSachMoiNhat } from "../../../api/SachAPI";

import CarouselItems from "./CarouselItems";

const Carousel: React.FC = () => {


    const [danhSachQuyenSach, setDanhSachQuyenSach] = useState<SachModel[]>([]);
    const [dangTaiDuLieu, setDangTaiDuLieu] = useState<boolean>(true);
    const [baoLoi, setBaoLoi] = useState(null);


    // goi api
    useEffect(() => {
        //then là thành công
        //catch là thất bại
        lay4QuyenSachMoiNhat().then(
            kq => {
                setDanhSachQuyenSach(kq.ketQua);
                setDangTaiDuLieu(false);
            }
        ).catch(
            error => {
                setBaoLoi(error.message);
            }
        );
    }, [] // gọi 1 lần
    )
    if (dangTaiDuLieu) {
        return (
            <div>
                <h1>dang tai du lieu</h1>
            </div>
        );
    }

    if (baoLoi) {
        return (
            <div>
                <h1>gap loi {baoLoi}</h1>
            </div>
        );
    }


    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active " data-bs-interval="10000" >
                    {
                        <CarouselItems key={0} sach={danhSachQuyenSach[0]} />
                    }

                </div>
                <div className="carousel-item" data-bs-interval="10000" >
                    {
                        <CarouselItems key={1} sach={danhSachQuyenSach[1]} />
                    }

                </div>
                <div className="carousel-item" data-bs-interval="10000" >
                    {
                        <CarouselItems key={2} sach={danhSachQuyenSach[2]} />
                    }

                </div>
                <div className="carousel-item" data-bs-interval="10000" >
                    {
                        <CarouselItems key={3} sach={danhSachQuyenSach[3]} />
                    }

                </div>

            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>


            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carousel;
