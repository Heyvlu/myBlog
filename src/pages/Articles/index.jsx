import React, {lazy, Suspense, useEffect, useMemo, useState} from "react";
import {useLocation,useNavigate} from "react-router-dom";
import Loading from "@/components/Loading";
import styles from "./index.scss";
import Header from "@/components/Header";
import {IconCalendar, IconPriceTag} from "@douyinfe/semi-icons";
import getSortArticleList from "@/utils/getSortArticleList";
import BackToTop from "@/components/BackToTop";
import CodeBlock from "@/components/CodeBlock";
import {IconReply} from "@douyinfe/semi-icons";
import {Tooltip} from "@douyinfe/semi-ui";
const getArticle=(filename)=>lazy(()=>import(`@/articles/${filename}`));


function Articles(){
    const navigate=useNavigate();
    const location=useLocation();
    const {articleTitle,filename}=location.state;
    const Article=useMemo(()=>getArticle(filename),[]);
    const imgName=filename.match(/([\w\W]+)\./)[1];
    const sortArticleList=getSortArticleList();

    const [time,setTime]=useState('');
    const [tags,setTags]=useState([]);

    useEffect(()=>{
        sortArticleList.map( item => {
            if(item.fileName===filename){
                setTime(item.time)
            }
        })
    },[])

    useEffect(()=>{
        sortArticleList.map( item => {
            if(item.fileName===filename){
                const arr=Array.from(new Set(item.tags));
                setTags(arr);
            }
        })
    },[])

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    return (
        <Suspense fallback={<Loading/>}>
            <div className={styles["article"]}>
                <Header/>
                <BackToTop/>
                <div className={styles["top"]}>
                    <img src={`/assets/images/titleBgs/${imgName}.png`} alt={"图片"}/>
                    <div className={styles["topText"]}>
                        <div className={styles["topArticleTitle"]}>
                            {articleTitle}
                        </div>
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
                        <Tooltip content={"返回"} position={"bottom"} style={{backgroundColor:"white",color:"black",letterSpacing:"2px"}}>
                            <IconReply size={"extra-large"} className={styles["iconReply"]} onClick={()=>navigate(-1)}/>
                        </Tooltip>
                    </div>
                </div>
                <div className={styles["detailFather"]}>
                    <div className={styles["articleDetail"]}>
                        <Article className={styles["oneArticle"]} components={{
                            img:({src})=>{
                                return <img src={"/assets/images/articles/"+src} className={styles["articleImg"]}/>
                            },
                            code:({children})=>{
                                return <CodeBlock children={children}/>
                            },
                            h1:()=> {},
                            strong:({children})=>{
                                return <span style={{fontWeight:"bold"}}>{children}</span>
                            }
                        }}/>
                    </div>
                </div>
            </div>
        </Suspense>
    )
}

export default Articles;