
import React from "react"

//async là tạo ra hàm bất động bộ
export async function my_request(duongDan: string) {

    //  Truy vấn đến đường đẫn
    const response = await fetch(duongDan);

    // nểu trả về lỗi
    if(!response.ok){
        throw new Error(`khong the truy cap ${duongDan}`)
    }

    // nếu trả về data dạng json
    return response.json();
}