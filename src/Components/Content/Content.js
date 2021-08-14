import React from "react";
import "./Content.scss"
import img1 from "./img/img1.png"
import img2 from "./img/img2.png"
import img3 from "./img/img3.png"
import img4 from "./img/img4.png"
import img5 from "./img/img5.png"
import img6 from "./img/img6.png"
import img7 from "./img/img7.png"

const Content = () =>{
    return(
        <div className="Content">
            <div className="Content_title"> 
                <b> Tom & Jerry</b>
            </div>

            <div className="Content_story">
                <div className="Content_story-img">
                    <img src={img1} width="98%" height="70%" />
                    <p>Tuyển Tập Hoạt Hình Tom and Jerry Tales - Tập 1 - Hoạt Hình...</p>
                    <p className="story-p">19Tr lượt xem • 1 năm trước </p>
                </div>
                <div className="Content_story-img">
                    <img src={img2} width="98%" height="70%" />
                    <p>Tuyển Tập Hoạt Hình Tom and Jerry Tales - Tập 2 - Hoạt Hình...</p>
                    <p className="story-p">23Tr lượt xem • 2 năm trước </p>
                </div>
                <div className="Content_story-img">
                    <img src={img3} width="98%" height="70%" />
                    <p>Tuyển Tập Hoạt Hình Tom and Jerry Tales - Tập 3 - Hoạt Hình...</p>
                    <p className="story-p">26Tr lượt xem • 3 năm trước </p>
                </div>
                <div className="Content_story-img">
                    <img src={img4} width="98%" height="70%" />
                    <p>Tuyển Tập Hoạt Hình Tom and Jerry Tales - Tập 4 - Hoạt Hình...</p>
                    <p className="story-p">20Tr lượt xem • 2 năm trước </p>
                </div>
                <div className="Content_story-img">
                    <img src={img5} width="98%" height="70%" />
                    <p>Tuyển Tập Hoạt Hình Tom and Jerry Tales - Tập 5 - Hoạt Hình...</p>
                    <p className="story-p">25Tr lượt xem • 3 năm trước </p>
                </div>
            </div>

            <div className="popular">
                <h4> Video Thịnh Hành</h4>
                <div className="popular_content">

                    <div className="popular_content-img">
                        <div className="popular_content-img-1-1">
                            <img src={img6} width="48%" height="80%" />
                        </div>
                        <div className="popular_content-img-1">
                            <h5>3107-3 | W/n x Nâu x Duongg x Titie | OFFICIAL MV</h5>
                            <p >13Tr lượt xem • 1 tháng trước </p>
                            <p>► SUBSCRIBE CHANNEL:  https://wn.fanlink.to/youtube
                                 #31073 #Wn #Winhmm #UFO #UMG #3107 #Win
                            </p>
                        </div>
                    </div>

                    <div className="popular_content-img">
                        <div className="popular_content-img-1-1">
                            <img src={img7} width="48%" height="77%"/>
                        </div>
                        <div className="popular_content-img-2">
                            <h5>Xuân Hạ Thu Đông Rồi Lại Xuân / Ái Phương (Lyrics)</h5>
                            <p>25Tr lượt xem • 3 năm trước </p>
                            <p>♪ Xuân Hạ Thu Đông Rồi Lại Xuân / Ái Phương (Lyrics)
                                * Sáng tác: Châu Đăng Khoa
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}


export default Content;
