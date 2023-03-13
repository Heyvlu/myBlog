import React from "react";
import {Spin} from "@douyinfe/semi-ui";
import styles from './index.scss';

function Loading() {
    return(
        <div className={styles["loading"]}>
            <Spin
                tip={"加载中"}
                size={"large"}
                style={{width:"100vw"}}/>
        </div>
    )
}

export default Loading;