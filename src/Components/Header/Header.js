// import React from "react";
import "./Header.scss"
import React, {useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import MicIcon from '@material-ui/icons/Mic';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import tui from "./img/tui.jpg"
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import SettingsIcon from '@material-ui/icons/Settings';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import TranslateIcon from '@material-ui/icons/Translate';
import LanguageIcon from '@material-ui/icons/Language';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import FeedbackIcon from '@material-ui/icons/Feedback';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const Header = (props) => {
    const [searchTerm,setsearchTerm] = useState('')
    const [showUser,setShowUser] = useState(false)
    const toggle = () => {
        props.toggle(true)
    }
    const showMenuUser = () => {
        console.log(showUser)
        return setShowUser(!showUser)
    }
    const handlesearchchage = (e) => {
        setsearchTerm(e.target.value)
    }


    return(
        <div className="header">
            <div className="header_left">
                <div className="header_input">
                    <input className="header-text"  type="search" value={searchTerm}
                    onInput ={handlesearchchage} placeholder="Tìm Kiếm"/>
                    <button className="header_input-btn"><KeyboardIcon/></button>
                </div>
                <div className="header_button">
                    <button className="header_button-search"><SearchIcon/></button>
                    <button className="header_button-mic"><MicIcon/></button>
                </div>
            </div>

            <div className="header_right">

                <div className="header_icon"><VideoCallIcon/></div>
                <div className="header_icon" onClick={toggle}><AppsIcon/></div>
                <div className="header_icon"><NotificationsNoneIcon/></div>
                <div className="header_icon" onClick={showMenuUser}><AccountCircleIcon/></div>



                <div className={showUser ? "header_user_menu" : "user_menu"}>
                    <div className="user_menu_img">
                        <div className="head_img">
                            <img  src={tui}  alt=""/>
                        </div>
                        <div className="user_menu_info">
                            <h4> Nguyễn Thị Nghĩa</h4>
                            <h5> Quản lý tài khoản Google của  bạn</h5>
                        </div>
                    </div>
                    <hr/>
                    <div className="user_menu_section">
                        <ul className="user_menu_section_icon-1">
                            <li><i> <PermIdentityIcon/> </i></li> 
                            <li><i> <MonetizationOnIcon/> </i></li>
                            <li><i> <SettingsIcon/> </i></li>
                            <li><i> <PeopleOutlineIcon/> </i></li>
                            <li><i> <ExitToAppIcon/> </i></li>
                        </ul>
                        <ul className="user_menu_section_title-1">
                            <li><p> Kênh của bạn </p></li>
                            <li><p> Giao dịch và gói hội viên </p></li>
                            <li><p> Youtube studio </p></li>
                            <li><p> Chuyển đổi tài khoản </p></li>
                            <li><p> Đăng xuất </p></li>
                        </ul>
                    </div>
                
                    <hr/>
                    <div className="user_menu_section">
                        <ul className="user_menu_section_icon">
                            <li><i> <Brightness3Icon/> </i></li>
                            <li><i> <TranslateIcon/> </i></li>
                            <li><i> <LanguageIcon/> </i></li>
                            <li><i> <SettingsApplicationsIcon/> </i></li>
                            <li><i> <AccountBoxIcon/> </i></li>
                            <li><i> <HelpOutlineIcon/>  </i></li>
                            <li><i>  <FeedbackIcon/> </i></li>
                            <li><i>  <KeyboardHideIcon/> </i></li>
                        </ul>
                        <ul className="user_menu_section_title">
                            <li><p> Giao diện: Giao diện sáng </p></li>
                            <li><p> Ngôn ngữ: Tiếng Việt </p></li>
                            <li><p> Địa điểm: Việt Nam</p></li>
                            <li><p> Cài đặt </p></li>
                            <li><p> Dữ liệu của bạn trong Youtube </p></li>
                            <li><p> Trợ giúp</p></li>
                            <li><p> Gửi phản hồi </p></li>
                            <li><p> Phím tắt </p></li>
                        </ul>
                    </div>
                    <hr/>
                    <ul className="user_menu_bot">
                        <li><p> Chế độ hạn chế: Đã tắt </p></li>
                        <li><i>  <KeyboardArrowRightIcon/> </i></li>
                    </ul>
                </div>

            </div>
            <p className="searchTerm">Giá trị tìm kiếm: {searchTerm} </p>
        </div>
    )
}

export default Header;