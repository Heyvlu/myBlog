import React from "react";
import styles from './index.scss';
import {BackTop} from "@douyinfe/semi-ui";
import {IconArrowUp} from "@douyinfe/semi-icons";

function BackToTop(){
    return(
        <BackTop className={styles["backTop"]}>
            <IconArrowUp/>
        </BackTop>
    )
}

export default BackToTop;