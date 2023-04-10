import React from 'react';
import ArticlePreview from "../ArticlePreview";
import {useNavigate} from "react-router-dom";
import styles from "./index.scss";

function Home(){
    const navigate=useNavigate();

    function articleDetail(filename){
        navigate('/articleDetail',{
            state:{filename}
        })
    }
    return (
        <div className={styles["home"]}>
            {
                articleList.map((text,index)=>{
                    const imgName=text[1].match(/([\w\W]+)\./)[1];
                    console.log(imgName)
                    return <div className={styles["preview"]}>
                        <div className={styles["titleDiv"]}>
                            <img src={`/assets/images/titleBgs/${imgName}.png`} alt={"图片"} className={styles["titleBg"]} onClick={()=>articleDetail(text[1])}/>
                        </div>
                        <ArticlePreview text={text[0]} filename={text[1]} key={index} articleDetail={articleDetail}/>
                    </div>
                })
            }
        </div>
    )
}

export default Home;