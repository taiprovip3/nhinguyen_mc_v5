import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "./assets/logo-header.png";
import sublogo from "./assets/logo-subheader.png";
import "./css/Homepage.css";
import {RiFolderZipFill} from "react-icons/ri";
import {SiHotjar} from "react-icons/si";
import {GiTrade} from "react-icons/gi";

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
        <div className="d-flex">
            <div className="border mx-1" id="OneFeature">
              <RiFolderZipFill className="text-primary fs-1" id="IconShadow" />
              <p className="text-muted">- Website chia sẽ các tập tin tài nguyên miễn phí và nhanh chóng. Có hướng dẫn sử dụng file cụ thể, giúp bạn tiếp cận được tài liệu mong muốn nhanh chóng.</p>
            </div>
            <div className="border mx-1" id="OneFeature">
              <SiHotjar className="text-warning fs-1" id="IconShadow" />
              <p className="text-muted">- Website chia sẽ các tập plugin máy chủ minecraft có bản việt hóa và hướng dẫn sử dụng chi tiết. Giúp bạn nhanh chóng tìm thấy plugin yêu thích cho việc setup máy chủ.</p>
            </div>
            <div className="border mx-1" id="OneFeature">
              <GiTrade className="text-warning fs-1" id="IconShadow" />
              <p className="text-muted">- Website có bán (giao dịch) các file server làm sẵn, bán các tệp plugin việt hóa (crack plugin), hướng dẫn sử dụng dễ hiểu => Giao dịch tri thức</p>
            </div>
        </div>
    </div>
  );
}
