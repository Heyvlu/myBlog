import React, {Suspense, useEffect, useState} from "react";
import styles from "./index.scss";
import {useLocation,useNavigate} from "react-router-dom";
import getInfo from "@/utils/getInfo";
import ArticlePreview from "@/pages/ArticlePreview";
import Loading from "@/components/Loading";
import Header from "@/components/Header";
import {Timeline} from "@douyinfe/semi-ui";

function TagDetail(){
    const location=useLocation();
    const navigate=useNavigate();
    const tag=location.state;
    const arr=[];

    const [tagArList,setTagArList]=useState([]);

    useEffect(()=>{
        const info=getInfo();
        for (const item of info) {
            const tags=Array.from(new Set(item.tags))
            for (const arTag of tags) {
                if(arTag == tag){
                    arr.push(item);
                }
            }
        }
        setTagArList([...arr]);
    },[])

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    function articleDetail(articleTitle,filename){
        navigate('/articleDetail',{
            state:{articleTitle,filename}
        })
    }


    return (
        <Suspense fallback={<Loading/>}>
            <div className={styles["tagDetail"]}>
                <Header/>
                <div className={styles["previewList"]}>
                    <Timeline mode={"center"}>
                        <Timeline.Item type={"ongoing"}>
                            <div className={styles["tagTitle"]}>标签-{tag}</div>
                        </Timeline.Item>
                        {
                            tagArList.map((item,index)=>{
                                const imgName=item.fileName.match(/([\w\W]+)\./)[1];
                                return (
                                    <Timeline.Item time={item.time} type={"ongoing"}>
                                        <div className={styles["preview"]} key={index}>
                                            <div className={styles["titleDiv"]}>
                                                <img src={`/assets/images/titleBgs/${imgName}.png`} alt={"图片"} className={styles["titleBg"]}/>
                                            </div>
                                            <ArticlePreview text={item.text} filename={item.fileName} articleDetail={articleDetail}/>
                                        </div>
                                    </Timeline.Item>
                                )
                            })
                        }
                    </Timeline>
                </div>
            </div>
        </Suspense>
    )
}

export default TagDetail;