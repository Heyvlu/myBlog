import React from "react";
import styles from "./index.scss";
import {IconBell} from "@douyinfe/semi-icons";

function Notice(){
    console.log(articleList)
    return(
        <div className={styles["notice"]}>
            <div className={styles["noticeTitle"]}>
                <IconBell size={"large"} className={styles["noticeIcon"]} style={{color:"red",marginRight:"5px"}}/>公告
            </div>
            <div className={styles["noticeContent"]}>
                这里是贺鱼璐的个人博客，分享学习过程中的笔记，有问题欢迎探讨交流
            </div>
        </div>
    )
}

export default Notice;