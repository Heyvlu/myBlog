import React, {useState} from "react";
import styles from './index.scss';
import {IconCopy} from "@douyinfe/semi-icons";
import {Toast} from "@douyinfe/semi-ui";

function CodeBlock(props){
    const {children}=props;
    const codes = children.split("\n");
    const [copySuccess,setCopySuccess]=useState(false);

    function copyCodes(codes){
        if(navigator.clipboard){
            navigator.clipboard.writeText(codes).then(()=>{
                setCopySuccess(true);
                setTimeout(()=>{
                    setCopySuccess(false);
                },1000)
            })
        }else{
            Toast.error({
                content:"你的浏览器不支持此功能！",
                duration:3,
                theme:'light',
                top:"70px"
            })
        }
    }

    return(
        <div className={styles["codeBlock"]}>
            <IconCopy className={styles["iconCopy"]} onClick={()=>copyCodes(children)}/>
            <div style={{transition:"opacity 0.4s ease"}} className={copySuccess ? styles["copySuccess"]:styles["copyDefault"]}>复制成功</div>
            <pre className={styles["articleCode"]}>
                {
                    codes.map((code,index)=>{
                        if(index===codes.length-1 && !code){
                            return null
                        }
                        return <code key={index}>{code}</code>
                    })
                }
            </pre>
        </div>
    )
}

export default CodeBlock;