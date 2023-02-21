import React from "react";
import styles from "./index.scss";

function ArticlePreview(props){
    const {text}=props;
    const articleTitle=text.match(/\s*#+\s*([\w\W]+?)\s/)[1];
    const articleContent=text.replaceAll(/[#*!`]/g,'');
    return (
        <div className={styles["preview"]}>
            <div className={styles["title"]}>
                {articleTitle}
            </div>
            <div className={styles["content"]}>
                {articleContent}
            </div>
        </div>
    )
}

export default ArticlePreview;