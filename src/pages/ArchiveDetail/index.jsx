import React, {Suspense, useEffect, useState} from "react";
import styles from "./index.scss";
import {useLocation,useNavigate} from "react-router-dom";
import Loading from "@/components/Loading";
import Header from "@/components/Header";
import {Button, Timeline} from "@douyinfe/semi-ui";
import ArticlePreview from "@/pages/ArticlePreview";
import getSortArticleList from "@/utils/getSortArticleList";

function ArchiveDetail(){
    const navigate=useNavigate();
    const location=useLocation();
    const yearMonth=location.state;
    const sortArticleList=getSortArticleList();
    const [timeArList,setTimeArList]=useState([]);

    useEffect(()=>{
        const list=[];
        sortArticleList.map(item=>{
            let v=item.time.slice(0,7);
            if(v==yearMonth){
                list.push(item);
            }
        })
        setTimeArList([...list]);
    },[])

    function articleDetail(articleTitle,filename){
        navigate('/articleDetail',{
            state:{articleTitle,filename}
        })
    }

    return(
        <Suspense fallback={<Loading/>}>
            <div className={styles["archiveDetail"]}>
                <Header/>
                <div className={styles["previewList"]}>
                    <Timeline mode={"center"} style={{width:"100vw"}}>
                        <Timeline.Item type={"ongoing"}>
                            <div className={styles["tagTitle"]}>归档 : {yearMonth}</div>
                            <Button className={styles["goBack"]} theme={"light"} onClick={()=>navigate(-1)}>返回</Button>
                        </Timeline.Item>
                        {
                            timeArList.map((item,index)=>{
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

export default ArchiveDetail;