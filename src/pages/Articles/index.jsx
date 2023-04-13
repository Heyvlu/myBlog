import React, {lazy, Suspense, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import Loading from "@/components/Loading";
import styles from "./index.scss";
import Header from "@/components/Header";
import {IconCalendar, IconPriceTag,IconCopy} from "@douyinfe/semi-icons";
import getInfo from "@/utils/getInfo";
import BackToTop from "@/components/BackToTop";
const getArticle=(filename)=>lazy(()=>import(`@/articles/${filename}`));


function Articles(){
    const location=useLocation();
    const {articleTitle,filename}=location.state;
    const Article=getArticle(filename);
    const imgName=filename.match(/([\w\W]+)\./)[1];
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

    function copyCodes(){

    }

    return (
        <div className={styles["article"]}>
            <Header/>
            <BackToTop/>
            <div className={styles["top"]}>
                <img src={`/assets/images/titleBgs/${imgName}.png`} alt={"图片"}/>
                <div className={styles["topText"]}>
                    <div className={styles["topArticleTitle"]}>{articleTitle}</div>
                    <div className={styles["topInfo"]}>
                        {
                            time?<span style={{marginRight:"15px"}}>
                                <IconCalendar style={{position:"relative",top:"3px",marginRight:"3px"}}/>
                                <span>{time}</span>
                            </span>:''
                        }
                        {
                            tags.length?<span>
                                <IconPriceTag style={{position:"relative",top:"3px",marginRight:"3px"}}/>
                                {tags.map(tag=>{
                                    return <span key={tag} style={{marginRight:"5px"}}>{tag}</span>
                                })}
                            </span>:''
                        }
                    </div>
                </div>
            </div>
            <div className={styles["detailFather"]}>
                <div className={styles["articleDetail"]}>
                    <Suspense fallback={<Loading/>}>
                        <Article className={styles["oneArticle"]} components={{
                            img:({src})=>{
                                return <img src={"/assets/images/articles/"+src} className={styles["articleImg"]}/>
                            },
                            code:({children})=>{
                                const codes = children.split("\n");
                                return <pre className={styles["articleCode"]}>
                                    {
                                        codes.map((code,index)=>{
                                            if(index===codes.length-1 && !code){
                                                return null
                                            }
                                            return <code key={index}>{code}</code>
                                        })
                                    }
                                    <IconCopy className={styles["iconCopy"]} onClick={copyCodes}/>
                                </pre>
                            }
                        }}/>
                    </Suspense>
                </div>
            </div>
        </div>
    )
}

export default Articles;