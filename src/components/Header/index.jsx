import React, {useEffect, useRef, useState} from "react";
import styles from './index.scss';
import {IconGithubLogo, IconHome, IconLikeHeart} from "@douyinfe/semi-icons";
import {useNavigate} from "react-router-dom";
import eventBus from "@/utils/pubSub";
import {logger} from "@douyinfe/semi-ui/lib/es/table/utils";

function Header(){
    const navigate=useNavigate();
    const wheelRef=useRef(false);
    const [isTop,setIsTop]=useState(true);

    useEffect(()=>{
        const divHeader=document.getElementById("header");
        let topValue=0;
        const scTop=(scrollTop)=>{
            // console.log(scrollTop)
            if(scrollTop===0){
                setIsTop(true);
            }else{
                setIsTop(false);
                if(scrollTop>=90){
                    if(scrollTop<=topValue){
                        // console.log("向上")
                        divHeader.style.top="-48px";
                        divHeader.style.transform="translate3d(0,100%,0)";
                    }else{
                        // console.log("向下")
                        divHeader.style.transform="translate3d(0,-100%,0)";
                    }
                }
                topValue=scrollTop;
            }
        }
        eventBus.on("scrollTop",scTop);
        return()=>{
            eventBus.off("scrollTop",scTop);
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
        <div id={"header"} className={styles["header"]} style={isTop ? {background:"rgba(255,255,255,0)"} :{background:"rgba(255,255,255,.4)",backdropFilter:"blur(8px)"}}>
            <div className={styles["headerLeft"]} onClick={goToGithub}><IconGithubLogo size={"large"} style={{position:"relative",top:"4px"}}/></div>
            <div className={styles["headerCenter"]} onClick={goToHome}><IconHome size={"large"} style={{marginRight:"3px",position:"relative",top:"3px"}}/>首页</div>
            <div className={styles["headerRight"]} onClick={goToAbout}><IconLikeHeart size={"large"} style={{marginRight:"3px",position:"relative",top:"3px"}}/>关于</div>
        </div>
    )
}

export default Header;