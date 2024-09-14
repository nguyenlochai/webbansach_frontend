import React, { useEffect } from "react";
import SachProps from "./components/SachProps";
import { useState } from "react";
import SachModel from "../../models/SachModel";
import { layToanBoSach } from "../../api/SachAPI";
import { PhanTrang } from "../utils/PhanTrang";




const DanhSachSanPham: React.FC = () =>{

    const [danhSachQuyenSach, setDanhSachQuyenSach] = useState<SachModel[]>([]);
    const [dangTaiDuLieu, setDangTaiDuLieu] = useState<boolean>(true);
    const [baoLoi, setBaoLoi] = useState(null);
    const [trangHienTai, setTrangHienTai] = useState(1);
    const [tongSoTrang, setTongSoTrang] = useState(0);
    const [tongSoSach, setTongSoSach] = useState(0);


    useEffect(()=>{
        //then là thành công
        //catch là thất bại
        layToanBoSach(trangHienTai-1).then(
            kq => {
                setDanhSachQuyenSach(kq.ketQua);
                setTongSoTrang(kq.tongSoTrang);
                
                setDangTaiDuLieu(false);
            }
        ).catch(
            error =>{
                setBaoLoi(error.message);
            }
        );
    }, [trangHienTai  ] // gọi 1 lần
    )

    const phanTrang = (trang: number) => setTrangHienTai(trang);


    if(dangTaiDuLieu){
        return(
            <div>
                <h1>dang tai du lieu</h1>
            </div>
        );
    }

    if(baoLoi){
        return(
            <div>
                <h1>gap loi {baoLoi}</h1>
            </div>
        );
    }


    return(

       

        <div className="container">
            
            <div className="row mt-4 mb-4">

                {
                    danhSachQuyenSach.map((sach) =>(
                        <SachProps key={sach.maSach} sach= {sach}/>
                    ))
                }

            </div>
            <PhanTrang trangHienTai={trangHienTai} tongSoTrang={tongSoTrang} phanTrang={phanTrang} />

        </div>

    );

}
export default DanhSachSanPham;