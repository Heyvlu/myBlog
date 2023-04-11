import React from "react";
import styles from "./index.scss";
import {IconPriceTag} from"@douyinfe/semi-icons";

function Tag(){
    return(
        <div className={styles["tag"]}>
            <div className={styles["tagTitle"]}>
                <IconPriceTag size={"large"} style={{marginRight:"5px"}}/>标签
            </div>
            <div className={styles["tagContent"]}>
                chatGpt 这里 是贺 鱼璐的个 人博客，分享 学习过 程中 的笔 记，有问 题欢迎 探讨 交流
            </div>
        </div>
    )
}

export default Tag;