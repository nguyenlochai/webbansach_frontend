import React from "react";

interface PhanTrangInterface {
  trangHienTai: number;
  tongSoTrang: number;
  phanTrang: any;
}

export const PhanTrang: React.FC<PhanTrangInterface> = (props) => {

  const danhSachTrang = [];

  //Nếu đang ở trang 1, hiển thị trang 1, 2 và 3.
  if (props.trangHienTai === 1) {
    danhSachTrang.push(props.trangHienTai)
    if (props.tongSoTrang >= props.trangHienTai + 1) {
      danhSachTrang.push(props.trangHienTai + 1);
    }
    if (props.tongSoTrang >= props.trangHienTai + 2) {
      danhSachTrang.push(props.trangHienTai + 2);
    }
  } 
  //Nếu ở trang giữa, hiển thị 2 trang trước và 2 trang sau trang hiện tại.
  else if (props.trangHienTai > 1) {
    if (props.trangHienTai >= 3) {
      danhSachTrang.push(props.trangHienTai - 2);
    }
    if (props.trangHienTai >= 2) {
      danhSachTrang.push(props.trangHienTai - 1);
    }

    danhSachTrang.push(props.trangHienTai);


    if (props.tongSoTrang >= props.trangHienTai + 1) {
      danhSachTrang.push(props.trangHienTai + 1);
    }

    if (props.tongSoTrang >= props.trangHienTai + 2) {
      danhSachTrang.push(props.trangHienTai + 2);
    }


  }

  return (
    <nav aria-label="...">
      <ul className="pagination justify-content-center">
        <li className="page-item">
        <button className="page-link" onClick={() => props.phanTrang(1)}>
            Trang đầu
          </button>
        </li>


        {
          danhSachTrang.map(trang => (
            <li className={"page-item " + (props.trangHienTai === trang ? "active" : "")} key={trang}>
              <button className="page-link" onClick={() => props.phanTrang(trang)}>
                {trang}
              </button>
            </li>
          ))
        }


        <li className="page-item" onClick={()=>props.phanTrang(props.tongSoTrang)}>
          <button className="page-link">
            Trang Cuối
          </button>
        </li>
      </ul>
    </nav>
  );
};
