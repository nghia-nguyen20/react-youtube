import React from "react";
import "./Feed.scss"
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import AssignmentIcon from '@material-ui/icons/Assignment';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

const Feed = () => {
    return(
        <div className="Feed">
            <button className="Feed_button">
                <div style={{color:"red"}}><AccountBalanceIcon/></div>
                <b> Thịnh Hành </b>
            </button>
            <button className="Feed_button">
                <div style={{color:"rgb(247, 212, 19)"}}><MusicVideoIcon/></div>
                <b> Âm nhạc </b>
            </button>
            <button className="Feed_button">
                <div style={{color:"rgb(175, 87, 5)"}}><SportsEsportsIcon/></div>
                <b> Trò chơi </b>
            </button>
            <button className="Feed_button">
                <div style={{color:"rgb(7, 33, 180)"}}><AssignmentIcon/></div>
                <b> Tin tức </b>
            </button>
            <button className="Feed_button">
                <div style={{color:"rgb(7, 33, 180)"}}><EmojiEventsIcon/></div>
                <b> Thể thao </b>
            </button>
            
        </div>

        
        
    )
}

export default Feed