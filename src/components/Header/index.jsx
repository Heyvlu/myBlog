import React from "react";
import styles from './index.scss';
import {IconGithubLogo, IconHome, IconLikeHeart} from "@douyinfe/semi-icons";
import {useNavigate} from "react-router-dom";

function Header(){
    const navigate=useNavigate();

    function goToGithub(){
        window.open("https://github.com/Heyvlu")
    }
    function goToHome(){
        navigate('/home')
    }
    function goToAbout(){
        navigate('/about')
    }
    return(
        <div className={styles["header"]}>
            <div className={styles["headerLeft"]} onClick={goToGithub}><IconGithubLogo size={"large"} style={{position:"relative",top:"4px"}}/></div>
            <div className={styles["headerCenter"]} onClick={goToHome}><IconHome size={"large"} style={{marginRight:"3px",position:"relative",top:"3px"}}/>首页</div>
            <div className={styles["headerRight"]} onClick={goToAbout}><IconLikeHeart size={"large"} style={{marginRight:"3px",position:"relative",top:"3px"}}/>关于</div>
        </div>
    )
}

export default Header;