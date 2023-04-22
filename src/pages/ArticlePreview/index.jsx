import React,{useState,useEffect} from "react";
import styles from "./index.scss";
import {IconCalendar,IconPriceTag} from "@douyinfe/semi-icons";
import getInfo from "@/utils/getInfo";

function ArticlePreview(props){
    const {text,filename,articleDetail}=props;
    const articleTitle=text.match(/\s*#+\s*([\w\W]*?)\n/)[1];
    const articleContent=text.replaceAll(/[#*!`]/g,'').replace(new RegExp(articleTitle),'');
    const articleText=articleContent.replace(new RegExp(/export const info = {time:".*/),'');
    const info=getInfo();

    const [time,setTime]=useState('');
    const [tags,setTags]=useState([]);

    useEffect(()=>{
        info.map( item => {
            if(item.fileName===filename){
                setTime(item.time)
            }
        })
    },[])

    useEffect(()=>{
        info.map( item => {
            if(item.fileName===filename){
                const arr=Array.from(new Set(item.tags));
                setTags(arr);
            }
        })
    },[])

    return (
        <div className={styles["preview"]} onClick={()=>articleDetail(articleTitle,filename)}>
            <div className={styles["title"]}>
                {articleTitle}
            </div>
            <div className={styles["content"]}>
                {articleText}
            </div>
            <div className={styles["preFooter"]}>
                {
                    time?<div className={styles["time"]}>
                    <IconCalendar style={{position:"relative",top:"3px",marginRight:"3px"}}/>
                    <span>{time}</span>
                    </div>:''
                }
                {
                    tags.length?<div>
                        <IconPriceTag style={{position:"relative",top:"3px",marginRight:"3px"}}/>
                        {tags.map(tag=>{
                            return <span key={tag} style={{marginRight:"5px"}}>{tag}</span>
                        })}
                    </div>:''
                }
            </div>
        </div>
    )
}

export default ArticlePreview;