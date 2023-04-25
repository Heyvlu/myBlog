import React, {Suspense, useEffect, useState} from "react";
import styles from "./index.scss";
import {useLocation,useNavigate} from "react-router-dom";
import getSortArticleList from "@/utils/getSortArticleList";
import ArticlePreview from "@/pages/ArticlePreview";
import Loading from "@/components/Loading";
import Header from "@/components/Header";
import {Button, Timeline} from "@douyinfe/semi-ui";

function TagDetail(){
    const location=useLocation();
    const navigate=useNavigate();
    const tag=location.state;
    const arr=[];

    const [tagArList,setTagArList]=useState([]);

    useEffect(()=>{
        const sortArticleList=getSortArticleList();
        for (const item of sortArticleList) {
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
                    <Timeline mode={"center"} style={{width:"100vw"}}>
                        <Timeline.Item type={"ongoing"}>
                            <div className={styles["tagTitle"]}>标签-{tag}</div>
                            <Button className={styles["goBack"]} theme={"light"} onClick={()=>navigate(-1)}>返回</Button>
                        </Timeline.Item>
                        {
                            tagArList.map((item,index)=>{
                                const imgName=item.fileName.match(/([\w\W]+)\./)[1];
                                return (
                                    <Timeline.Item time={item.time} type={"ongoing"} key={index}>
                                        <div className={styles["preview"]}>
                                            <div className={styles["titleDiv"]}>
                                                <img src={`assets/images/titleBgs/${imgName}.png`} alt={"图片"} className={styles["titleBg"]}/>
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