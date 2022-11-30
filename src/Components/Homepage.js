import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "./assets/logo-header.png";
import sublogo from "./assets/logo-subheader.png";
import "./css/Homepage.css";
import {RiFolderZipFill} from "react-icons/ri";
import {SiHotjar} from "react-icons/si";
import {GiTrade,GiDeathNote} from "react-icons/gi";
import {RiUploadCloud2Fill} from "react-icons/ri";
import {ImDatabase} from "react-icons/im";


export default function Homepage() {
  return (
    <div className='border border-danger' id="backgroundGify">
        <div className="text-center">
            <img src={logo} alt="logo-header" width="100%" />
            <img src={sublogo} width="50%" alt="  Our world are
wonder and fabulos" />
        </div>
        <div>
            <h4 className="fw-bold text-white text-decoration-underline">FEATURES:</h4>
        </div>
        <div className="d-flex justify-content-evenly">
            <div className="border m-1 p-5" id="OneFeature">
              <RiFolderZipFill className="text-primary fs-1" id="IconShadow" />
              <p className="text-white">Website chia sẽ các tập tin tài nguyên miễn phí và nhanh chóng. Có hướng dẫn sử dụng file cụ thể, giúp bạn tiếp cận được tài liệu mong muốn nhanh chóng.</p>
            </div>
            <div className="border m-1 p-5" id="OneFeature">
              <SiHotjar className="text-warning fs-1" id="IconShadow" />
              <p className="text-white">Chia sẽ các tập plugin máy chủ minecraft có bản việt hóa và hướng dẫn sử dụng chi tiết từ nhiều admin. Giúp bạn nhanh chóng tìm thấy plugin yêu thích cho việc setup máy chủ.</p>
            </div>
            <div className="border m-1 p-5" id="OneFeature">
              <GiTrade className="text-success fs-1" id="IconShadow" />
              <p className="text-white">Website có bán (giao dịch tự động) các file server làm sẵn, bán các tệp plugin việt hóa (crack plugin), hướng dẫn sử dụng dễ hiểu => Giao dịch tri thức</p>
            </div>
            <div className="border m-1 p-5" id="OneFeature">
              <GiDeathNote className="text-danger fs-1" id="IconShadow" />
              <p className="text-white">Hệ thống điểm danh ngày nhận điểm token miễn phí tha mồ mua sắm cửa hàng điểm.</p>
            </div>
            <div className="border m-1 p-5" id="OneFeature">
              <ImDatabase className="text-white fs-1" id="IconShadow" />
              <p className="text-white">Lưu trữ tập tin, hình ảnh, video... đa dạng file như một media và hoàn toàn miễn phí khi đăng ký một tài khoản trở thành thành viên của nhinguyenmc.</p>
            </div>
            <div className="border m-1 p-5" id="OneFeature">
              <RiUploadCloud2Fill className="text-white fs-1" id="IconShadow" />
              <p className="text-white">Đăng tải, chia sẽ tập tin file minecraft server do chính bạn làm lên trang web này. Chúng tôi nhận làm trung gian miễn phí nếu bạn muốn mọi người sử dụng file của bạn để biết đến bạn là tác giả nhiều hơn.</p>
            </div>
        </div>
    </div>
  );
}
