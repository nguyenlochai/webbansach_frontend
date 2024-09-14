import React, { useEffect, useState } from "react";
import SachModel from "../../../models/SachModel";
import HinhAnhModel from "../../../models/HinhAnhModel";
import { lay1HinhAnhSach } from "../../../api/HinhAnhAPI";

interface CarouselPropsInterface {

  sach: SachModel;
}

const CarouselItems: React.FC<CarouselPropsInterface> = ({ sach }) => {

  const maSach: number = sach.maSach;

  const [danhSachAnh, setDanhSachAnh] = useState<HinhAnhModel[]>([]);
  const [dangTaiDuLieu, setDangTaiDuLieu] = useState<boolean>(true);
  const [baoLoi, setBaoLoi] = useState<string | null>(null);

  useEffect(() => {
    lay1HinhAnhSach(maSach)
      .then(hinhAnhData => {
        setDanhSachAnh(hinhAnhData);
        setDangTaiDuLieu(false);
      })
      .catch(error => {
        setBaoLoi(error.message);
        setDangTaiDuLieu(false); // Đảm bảo cập nhật trạng thái khi lỗi xảy ra
      });
  }, [maSach]); // Chạy lại khi maSach thay đổi

  if (dangTaiDuLieu) {
    return (
      <div>
        <h1>Đang tải dữ liệu...</h1>
      </div>
    );
  }

  if (baoLoi) {
    return (
      <div>
        <h1>Gặp lỗi: {baoLoi}</h1>
      </div>
    );
  }

  return (
        <div className="row align-items-center">
          <div className="col-5 text-center">
            {danhSachAnh[0] && danhSachAnh[0].duLieuAnh ? (
              <img
                src={danhSachAnh[0].duLieuAnh}
                className="card-img-top"
                alt={sach.tenSach}
                style={{ height: "350px" }}
              />
            ) : (
              <div className="no-image-placeholder">Không có hình ảnh</div> // Thêm placeholder nếu không có ảnh
            )}
          </div>
          <div className="col-7">
          <h5>{sach.tenSach}</h5>
          <p>{sach.moTa}</p>
          </div>
        </div>

  );
};

export default CarouselItems;
