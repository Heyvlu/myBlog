import React, {useEffect, useState} from 'react';
import ArticlePreview from "../ArticlePreview";
import {useNavigate} from "react-router-dom";
import styles from "./index.scss";
import Personal from "@/pages/Personal";
import Notice from "@/pages/Notice";
import Tag from "@/pages/Tag";
import {IconChevronDown} from "@douyinfe/semi-icons";
import {Pagination} from "@douyinfe/semi-ui";
import Header from "@/components/Header";

function Home(){
    const navigate=useNavigate();
    const [page, setPage]=useState(1);
    const [list,setList]=useState(articleList.slice(0,6));

    function articleDetail(articleTitle,filename){
        navigate('/articleDetail',{
            state:{articleTitle,filename}
        })
    }

    function onPageChange(currentPage){
        setPage(currentPage);
        let see=(currentPage-1)*6;
        let newList;
        if(see+6>=articleList.length){
            newList=articleList.slice(see,articleList.length);
        }else{
            newList=articleList.slice(see,see+6);
        }
        setList(newList);
        window.scrollTo(0,0);
    }

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])


    return (
        <div className={styles["home"]}>
            <Header/>
            <div className={styles["top"]}>
                <div style={{fontSize:"32px",fontWeight:"bold",letterSpacing:"5px"}}>贺鱼璐的个人博客</div>
                <div style={{fontSize:"20px",marginTop:"10px"}}>Study and make progress</div>
                <IconChevronDown size={"extra-large"} className={styles["arrow"]}/>
            </div>
            <div className={styles["center"]}>
                <div className={styles["left"]}>
                    <Personal/>
                    <Notice/>
                    <Tag/>
                </div>
                <div className={styles["right"]}>
                    {
                        list.map((text,index)=>{
                            const imgName=text[1].match(/([\w\W]+)\./)[1];
                            return <div className={styles["preview"]} key={index}>
                                {
                                    index % 2 ?
                                        <>
                                            <ArticlePreview text={text[0]} filename={text[1]} articleDetail={articleDetail}/>
                                            <div className={styles["titleDiv"]}>
                                                <img src={`/assets/images/titleBgs/${imgName}.png`} alt={"图片"} className={styles["titleBg"]}/>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div className={styles["titleDiv"]}>
                                                <img src={`/assets/images/titleBgs/${imgName}.png`} alt={"图片"} className={styles["titleBg"]}/>
                                            </div>
                                            <ArticlePreview text={text[0]} filename={text[1]} articleDetail={articleDetail}/>
                                        </>
                                }
                            </div>
                        })
                    }
                    <Pagination total={articleList.length} showTotal pageSize={6} currentPage={page} onPageChange={onPageChange}></Pagination>
                </div>
            </div>
        </div>
    )
}

export default Home;