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
            <div className={styles["preview"]}>
                {
                    articleList.map((text,index)=>{
                        return <ArticlePreview text={text[0]} filename={text[1]} key={index} articleDetail={articleDetail}/>
                    })
                }
            </div>
        </div>
    )
}

export default Home;