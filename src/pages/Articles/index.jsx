import React,{lazy,Suspense} from "react";
import {useLocation} from "react-router-dom";
import Loading from "@/components/Loading";
import styles from "./index.scss";
const getArticle=(filename)=>lazy(()=>import(`@/articles/${filename}`));


function Articles(){
    const location=useLocation();
    const {filename}=location.state;
    const Article=getArticle(filename);
    console.log(Article,"Article")
    return (
        <div className={styles["article"]}>
            <div className={styles["articleDetail"]}>
                <Suspense fallback={<Loading/>}>
                    <Article components={{
                        img:({src})=>{
                            return <img src={"/assets/images/articles/"+src} className={styles["articleImg"]}/>
                        },
                        code:({children})=>{
                            const codes = children.split("\n");
                            return <pre className={styles["articleCode"]}>
                                {codes.map(code=><code>{code}</code>)}
                            </pre>
                        }
                    }}/>
                </Suspense>
            </div>
        </div>
    )
}

export default Articles;