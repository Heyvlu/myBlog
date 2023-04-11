import React, {useEffect, useState} from "react";
import styles from "./index.scss";
import {IconGithubLogo} from "@douyinfe/semi-icons";
import getInfo from "@/utils/getInfo"

function Personal(){
    function goToGithub(){
        window.open("https://github.com/Heyvlu")
    }

    // const [s,sets] = useState([<></>])
    //
    // useEffect(()=>{
    //     (async ()=>{
    //         const arr = await getInfo();
    //         console.log('aaa',arr)
    //         sets(arr)
    //     })()
    // },[])



    return(
        <div className={styles["personal"]}>
            <img src={"/assets/images/others/personal.jpeg"} alt={"头像"}/>
            <div className={styles["userName"]}>贺鱼璐</div>
            <div className={styles["signature"]}>业精于勤，荒于嬉</div>
            <div className={styles["summary"]}>
                <div>
                    <div className={styles["summaryName"]}>文章</div>
                    <div>{articleList.length}</div>
                </div>
                <div>
                    <div className={styles["summaryName"]}>标签</div>
                    <div>{getInfo().length}</div>
                </div>
            </div>
            <div className={styles["followMe"]} onClick={goToGithub}>
                <div className={styles["followMeItem"]}>
                    <IconGithubLogo size={"large"} style={{transform:"translateY(-2px)"}}/>
                    <div style={{marginLeft:"5px"}}>Follow Me</div>
                </div>
            </div>
        </div>
    )
}

export default Personal;