import React from "react";
import SachModel from "../models/SachModel";
import { my_request } from "./Request";

interface ketQuaInterface{
    ketQua: SachModel[];
    tongSoTrang: number;
    tongSoSach: number;
}

async function laySach(duongDan: string):Promise<ketQuaInterface>{
    const ketQua:SachModel[] = [];

    // //xác định endpoint
    // const duongDan:string = 'http://localhost:8080/sach';

    // gọi phương thức request
    const response = await my_request(duongDan);
    
    //lấy ra json sach
    const responseData = response._embedded.saches;


    //lấy thông tin trang
    const tongSoTrang: number = response.page.totalPages;
    const tongSoSach: number = response.page.totalElements;

    
    for(const key in responseData){
        ketQua.push({
            maSach: responseData[key].maSach,
            tenSach: responseData[key].tenSach,
            giaBan: responseData[key].giaBan,
            giaNiemYet: responseData[key].giaNiemYet,
            moTa: responseData[key].moTa,
            soLuong: responseData[key].soLuong,
            tenTacGia: responseData[key].tenTacGia,
            trungBinhXepHang: responseData[key].trungBinhXepHang
        });
    }
    

    return {ketQua: ketQua, tongSoSach: tongSoTrang, tongSoTrang: tongSoTrang};
}

export async function layToanBoSach(trangHienTai: number):Promise<ketQuaInterface> {
    

    //xác định endpoint
    const duongDan:string = `http://localhost:8080/sach?sort=maSach,asc&size=14&page=${trangHienTai}`;

    return laySach(duongDan);
}

export async function lay4QuyenSachMoiNhat():Promise<ketQuaInterface> {
    

    //xác định endpoint
    const duongDan:string = 'http://localhost:8080/sach?sort=maSach,desc&page=0&size=4';

    return laySach(duongDan);
}