import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "./assets/logo-header.png";
import sublogo from "./assets/logo-subheader.png";
import "./css/Homepage.css";
import "./css/Common.css";
import {RiFolderZipFill} from "react-icons/ri";
import {SiHotjar} from "react-icons/si";
import {GiTrade,GiDeathNote,GiSeaStar} from "react-icons/gi";
import {RiUploadCloud2Fill,RiStarLine} from "react-icons/ri";
import {HiUserGroup} from "react-icons/hi";
import {ImEyePlus,ImDatabase} from "react-icons/im";
import {BsStars} from "react-icons/bs";
import {FaUser} from "react-icons/fa";


export default function Homepage() {
  return (
    <div className='border border-danger' id="backgroundGify">
        <div className='position-fixed top-0 end-0 bg-secondary opacity-75 border rounded p-5 text-center text-white m-1'>
          <FaUser className="fs-3" />
          <br />
          <span className='text-decoration-underline fw-bold fs-3 ncs'>Tài khoản</span>
        </div>
        <div className="text-center">
            <img src={logo} alt="logo-header" width="100%" />
            <img src={sublogo} width="50%" alt="  Our world are
wonder and fabulos" />
        </div>
        <div className="d-flex justify-content-around my-3">
          <div className='border text-center bg-white flex-fill mx-5 p-3 rounded'>
            <GiSeaStar className="text-success fs-2" />
            <br />
            <span className='fs-3 text-dark'>Chất lượng website</span>
            <br />
            <span className='text-dark fw-bold text-decoration-underline'>5.0<BsStars /></span>
            <br />
            <RiStarLine />
            <RiStarLine />
            <RiStarLine />
            <RiStarLine />
            <RiStarLine />
          </div>
          <div className='border text-center bg-white flex-fill mx-5 p-3 rounded'>
            <HiUserGroup className='text-success fs-2'/>
            <br />
            <span className='fs-3'>Thành viên</span>
            <br />
            <span className='text-dark fw-bold text-decoration-underline'>1.0 Thành viên</span>
          </div>
          <div className='border text-center bg-white flex-fill mx-5 p-3 rounded'>
            <ImEyePlus className='text-success fs-2' />
            <br />
            <span className='fs-3'>Lượt ghé thăm</span>
            <br />
            <span className='text-dark fw-bold text-decoration-underline'>55 lượt xem</span>
          </div>
        </div>
        {/* feature */}
        <div>
            <h4 className="fw-bold text-white text-decoration-underline">FEATURES:</h4>
            <div className="d-lg-flex flex-wrap justify-content-around">
                <div className="border p-5" id="OneFeature">
                  <RiFolderZipFill className="text-white fs-1" id="IconShadow" />
                  <p className="text-white">Website chia sẽ các tập tin tài nguyên miễn phí và nhanh chóng. Có hướng dẫn sử dụng file cụ thể, giúp bạn tiếp cận được tài liệu mong muốn nhanh chóng.</p>
                </div>
                <div className="border p-5" id="OneFeature">
                  <SiHotjar className="text-white fs-1" id="IconShadow" />
                  <p className="text-white">Chia sẽ các tập plugin máy chủ minecraft có bản việt hóa và hướng dẫn sử dụng chi tiết từ nhiều admin. Giúp bạn nhanh chóng tìm thấy plugin yêu thích cho việc setup máy chủ.</p>
                </div>
                <div className="border p-5" id="OneFeature">
                  <GiTrade className="text-white fs-1" id="IconShadow" />
                  <p className="text-white">Website có bán (giao dịch tự động) các file server làm sẵn, bán các tệp plugin việt hóa (crack plugin), hướng dẫn sử dụng dễ hiểu => Giao dịch tri thức</p>
                </div>
                <div className="border p-5" id="OneFeature">
                  <GiDeathNote className="text-white fs-1" id="IconShadow" />
                  <p className="text-white">Hệ thống điểm danh ngày nhận điểm token miễn phí tha mồ mua sắm cửa hàng điểm.</p>
                </div>
                <div className="border p-5" id="OneFeature">
                  <ImDatabase className="text-white fs-1" id="IconShadow" />
                  <p className="text-white">Lưu trữ tập tin, hình ảnh, video... đa dạng file như một media và hoàn toàn miễn phí khi đăng ký một tài khoản trở thành thành viên của nhinguyenmc.</p>
                </div>
                <div className="border p-5" id="OneFeature">
                  <RiUploadCloud2Fill className="text-white fs-1" id="IconShadow" />
                  <p className="text-white">Đăng tải, chia sẽ tập tin file minecraft server do chính bạn làm lên trang web này. Chúng tôi nhận làm trung gian miễn phí nếu bạn muốn mọi người sử dụng file của bạn để biết đến bạn là tác giả nhiều hơn.</p>
                </div>
            </div>
        </div>
        {/* intro */}
        <div className='text-white my-5'>
        <h4 className="fw-bold text-white text-decoration-underline">INTRO:</h4>
            <div className="bg-success text-white rounded mx-2 p-2">
                <h6>&emsp;MINECRAFT WIKIPEDIA:</h6>
                <p className='fst-italic fs-4'>&emsp;&emsp;- Minecraft là một trò chơi điện tử độc lập trong một thế giới mở với phong cách sandbox, được phát hành vào năm 2009 bởi lập trình viên người Thụy Điển Markus "Notch" Persson và sau đó được phát triển và phát hành bởi Mojang Studio. Khả năng sáng tạo và xây dựng Minecraft cho phép người chơi xây dựng các công trình bằng cách kết hợp các khối lập phương kết cấu trong một thế giới 3D. Các hoạt động khác trong game bao gồm tìm kiếm, thu thập tài nguyên, chế tạo và chiến đấu.</p>
            </div>
            <br />
            <div className="bg-success text-white rounded mx-2 p-2">
                <h6>&emsp;NIHNGUYENMC CHANNEL:</h6>
                <p className='fst-italic fs-4'>&emsp;&emsp;- Kênh youtube được thành lập từ năm 2013 với những nội dung bình thường của 1 con người bình thường. Hiện tại kênh đã chuyển sang làm content về minecraft liên quan đến server và file chủ yếu dành cho các configer và admin tham khảo. Hiện tại mình chỉ có một kệnh YT duy nhất là : "nhinguyen". Các file từ video khác có thể do reupload lại từ mình.</p>
            </div>
            <br />
            <div className="bg-success text-white rounded mx-2 p-2">
                <h6>&emsp;SERVER GRASSMC.COM:</h6>
                <p className='fst-italic fs-4'>&emsp;&emsp;- Server minecraft này đã trải qua hơn 10 season, mặc dù chỉ là 1 server con trong 1 rừng server minecraft Việt Nam. Nhưng đã thu lại những thành tựu đáng nể. Máy chủ chính là skyblock và rễ là các server, cũng từng có vài lần update ra minigame nhưng đã thất bại. Hiện tại mình cần tuyển 1 số lượng admin (configer) từ 3-4 bạn để cùng nhau xây dựng 1 server lớn mạnh, lợi ích chia đều. Chi tiết hãy xem hướng dẫn trên.</p>
            </div>
        </div>
    </div>
  );
}
