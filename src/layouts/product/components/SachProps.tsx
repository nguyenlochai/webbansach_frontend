import React, { useEffect, useState } from "react";
import SachModel from "../../../models/SachModel";
import HinhAnhModel from "../../../models/HinhAnhModel";
import { layToanBoAnhCuaMotQuyenSach } from "../../../api/HinhAnhAPI";

interface SachPropsInterface {
  sach: SachModel;
}

const SachProps: React.FC<SachPropsInterface> = ({ sach }) => {
  const maSach: number = sach.maSach;

  const [danhSachAnh, setDanhSachAnh] = useState<HinhAnhModel[]>([]);
  const [dangTaiDuLieu, setDangTaiDuLieu] = useState<boolean>(true);
  const [baoLoi, setBaoLoi] = useState<string | null>(null);

  useEffect(() => {
    layToanBoAnhCuaMotQuyenSach(maSach)
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
    <div className="col-md-3 mt-2">
      <div className="card">
        {danhSachAnh[0] && danhSachAnh[0].duLieuAnh ? (
          <img
            src={danhSachAnh[0].duLieuAnh}
            className="card-img-top"
            alt={sach.tenSach}
            style={{ height: "200px" }}
          />
        ) : (
          <div className="no-image-placeholder">Không có hình ảnh</div> // Thêm placeholder nếu không có ảnh
        )}
        <div className="card-body">
          <h5 className="card-title">{sach.tenSach}</h5>
          <p className="card-text">{sach.moTa}</p>
          <div className="price">
            <span className="original-price">
              <del>{sach.giaNiemYet}</del>
            </span>
            <span className="discounted-price">
              <strong>{sach.giaBan}</strong>
            </span>
          </div>
        </div>
        <div className="row mt-2" role="group">
          <div className="col-6">
            <a href="#" className="btn btn-secondary btn-block">
              <i className="fas fa-heart"></i>
            </a>
          </div>
          <div className="col-6">
            <button className="btn btn-danger btn-block">
              <i className="fas fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SachProps;
