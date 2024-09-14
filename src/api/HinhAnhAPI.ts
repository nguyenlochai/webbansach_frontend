import React from "react";
import HinhAnhModel from "../models/HinhAnhModel";
import { my_request } from "./Request";

async function layHinhAnh(duongDan: string):Promise<HinhAnhModel[]> {
    const ketQua:HinhAnhModel[] = [];

    

    // gọi phương thức request
    const response = await my_request(duongDan);
    
    //lấy ra json sach
    const responseData = response._embedded.hinhAnhs;

    

    //console.log(responseData)
    
    for(const key in responseData){
        ketQua.push({
            maHinhAnh: responseData[key].maHinhAnh,
            tenHinhAnh: responseData[key].tenHinhAnh,
            laIcon: responseData[key].laIcon,
            duongDan: responseData[key].duongDan,
            duLieuAnh: responseData[key].duLieuAnh,
        });
    }
    

    return ketQua;
}

// trả về mã hình ảnh
export async function layToanBoAnhCuaMotQuyenSach(maSach: number):Promise<HinhAnhModel[]> {
    
    const duongDan:string = `http://localhost:8080/sach/${maSach}/danhSachHinhAnh`;

    return layHinhAnh(duongDan);
}

// trả về mã hình ảnh
export async function lay1HinhAnhSach(maSach: number):Promise<HinhAnhModel[]> {
    
    const duongDan:string = `http://localhost:8080/sach/${maSach}/danhSachHinhAnh?sort=maHinhAnh,asc&page=0&size=1`;
    return layHinhAnh(duongDan);
}