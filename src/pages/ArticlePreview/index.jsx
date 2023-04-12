import React from "react";
import styles from "./index.scss";
import {IconCalendar,IconPriceTag} from "@douyinfe/semi-icons";
import getInfo from "@/utils/getInfo";

function ArticlePreview(props){
    const {text,filename,articleDetail}=props;
    const articleTitle=text.match(/\s*#+\s*([\w\W]+?)\s/)[1];
    const articleContent=text.replaceAll(/[#*!`]/g,'').replace(new RegExp(articleTitle),'');
    const info=getInfo();

    return (
        <div className={styles["preview"]} onClick={()=>articleDetail(filename)}>
            <div className={styles["title"]}>
                {articleTitle}
            </div>
            <div className={styles["content"]}>
                {articleContent}
            </div>
            <div className={styles["preFooter"]}>
                <div className={styles["time"]}>
                    <IconCalendar style={{position:"relative",top:"3px",marginRight:"3px"}}/>
                    {info.map((item,index)=>{
                        if(item.fileName===filename){
                            return<span key={index}>{item.time}</span>
                        }
                    })}
                </div>
                <div>
                    <IconPriceTag style={{position:"relative",top:"3px",marginRight:"3px"}}/>
                    {info.map((item,index)=>{
                        if(item.fileName===filename){
                            const arr=Array.from(new Set(item.tags));

                            const element=arr.map(tag=>{
                                return <span key={tag} style={{marginRight:"5px"}}>{tag}</span>
                            })
                            return element
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default ArticlePreview;