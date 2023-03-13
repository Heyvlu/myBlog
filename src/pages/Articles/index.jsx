import React,{lazy,Suspense} from "react";
import {useLocation} from "react-router-dom";
import Loading from "@/components/Loading";
import styles from "./index.scss";
const getArticle=(filename)=>lazy(()=>import(`@/articles/${filename}`));


function Articles(){
    const location=useLocation();
    const {filename}=location.state;
    const Article=getArticle(filename);
    return (
        <div className={styles["article"]}>
            <div className={styles["articleDetail"]}>
                <Suspense fallback={<Loading/>}>
                    <Article components={{
                        img:({src})=>{
                            return <img src={"/assets/images/articles/"+src} className={styles["articleImg"]}/>
                        },
                        code:({children})=>{
                            return <pre className={styles["articleCode"]}>{children}</pre>
                        }
                    }}/>
                </Suspense>
            </div>
        </div>
    )
}

export default Articles;