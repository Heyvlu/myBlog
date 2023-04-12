import React from "react";
import styles from "./index.scss";
import {IconPriceTag} from"@douyinfe/semi-icons";
import getTags from "@/utils/getTags";

function Tag(){
    const tags=getTags();

    return(
        <div className={styles["tag"]}>
            <div className={styles["tagTitle"]}>
                <IconPriceTag size={"large"} style={{marginRight:"5px"}}/>标签
            </div>
            <div className={styles["tagContent"]}>
                {
                    tags.map((tag,index)=>{
                        return <span className={styles["one"]} key={index}>{tag}</span>
                    })
                }
            </div>
        </div>
    )
}

export default Tag;