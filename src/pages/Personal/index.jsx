import React, {useEffect, useState} from "react";
import styles from "./index.scss";
import {IconGithubLogo} from "@douyinfe/semi-icons";
import getTags from "@/utils/getTags";

function Personal(){
    const tags=getTags();

    function goToGithub(){
        window.open("https://github.com/Heyvlu")
    }

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
                    <div>{tags.length}</div>
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