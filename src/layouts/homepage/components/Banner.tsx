import React from "react";

function Banner() {
    return (
        <div>
            <div className="P-5 mb-2 bg-dark">
                <div className="container-fluid py-5 text-white d-flex justify-content-center aligh-items-center">
                    <div>
                        <h2 className="display-5 fw-bold">
                            Đọc sách nâng cao trí tuệ
                        </h2>
                        <p className="">Nguyen Loc Hai</p>
                        <button className="btn btn-primary bt-lg text-white float-end">Kham pha sach tai lochai.vn</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;