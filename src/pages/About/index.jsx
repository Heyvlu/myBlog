import React from "react";
import styles from './index.scss';
import Header from "@/components/Header";
import {Card,Typography} from "@douyinfe/semi-ui";
import {useNavigate} from "react-router-dom";

function About(){
    const {Text}=Typography;
    const navigate=useNavigate();

    return(
        <div className={styles["about"]}>
            <Header/>
            <Card
                title={"ABOUT"}
                shadows={"always"}
                style={{width:"600px",height:"400px",background:"rgba(255,255,255,.9)"}}
                headerExtraContent={
                    <Text link onClick={()=>navigate(-1)} style={{fontSize:"17px"}}>
                        返回
                    </Text>
                }>
                <div className={styles["aboutContent"]}>
                    这里是贺鱼璐的个人博客项目，使用了webpack、React、jsx、mdx.js、react-router-dom、node.js等技术，欢迎各位大佬一起探讨交流。
                </div>
            </Card>
        </div>
    )
}

export default About;