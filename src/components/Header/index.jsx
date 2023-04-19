import React, {useEffect, useState} from "react";
import styles from './index.scss';
import {IconGithubLogo, IconHome, IconLikeHeart} from "@douyinfe/semi-icons";
import {useNavigate} from "react-router-dom";
import eventBus from "@/utils/pubSub";

function Header(){
    const navigate=useNavigate();
    const [isTop,setIsTop]=useState(true);

    useEffect(()=>{
        const scrollTop=(scrollY)=>{
            if (scrollY===0){
                setIsTop(true);
                console.log("true")
            }else{
                setIsTop(false);
                console.log("false")
            }
        }
        eventBus.on("winScroll",scrollTop);
        return()=>{
            eventBus.off("winScroll",scrollTop);
        }
    },[])

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
        <div className={styles["header"]} style={isTop ? {background:"rgba(255,255,255,0)",backdropFilter:"blur(0)"} :{background:"rgba(255,255,255,.4)",backdropFilter:"blur(8px)"}}>
            <div className={styles["headerLeft"]} onClick={goToGithub}><IconGithubLogo size={"large"} style={{position:"relative",top:"4px"}}/></div>
            <div className={styles["headerCenter"]} onClick={goToHome}><IconHome size={"large"} style={{marginRight:"3px",position:"relative",top:"3px"}}/>首页</div>
            <div className={styles["headerRight"]} onClick={goToAbout}><IconLikeHeart size={"large"} style={{marginRight:"3px",position:"relative",top:"3px"}}/>关于</div>
        </div>
    )
}

export default Header;