import React, {useEffect} from 'react';
import ArticlePreview from "../ArticlePreview";
import {useNavigate} from "react-router-dom";
import styles from "./index.scss";
import Personal from "@/pages/Personal";
import Notice from "@/pages/Notice";
import Tag from "@/pages/Tag";
import {IconChevronDown} from "@douyinfe/semi-icons";
import Header from "@/components/Header";

function Home(){
    const navigate=useNavigate();

    function articleDetail(articleTitle,filename){
        navigate('/articleDetail',{
            state:{articleTitle,filename}
        })
    }



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
                        articleList.map((text,index)=>{
                            const imgName=text[1].match(/([\w\W]+)\./)[1];
                            return <div className={styles["preview"]} key={index}>
                                <div className={styles["titleDiv"]}>
                                    <img src={`/assets/images/titleBgs/${imgName}.png`} alt={"图片"} className={styles["titleBg"]} onClick={()=>articleDetail(text[1])}/>
                                </div>
                                <ArticlePreview text={text[0]} filename={text[1]} articleDetail={articleDetail}/>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;