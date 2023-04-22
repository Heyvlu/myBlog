import React, {useEffect, useState} from "react";
import styles from "./index.scss";
import {IconCreditCard} from "@douyinfe/semi-icons";
import getSortArticleList from "@/utils/getSortArticleList";
import {useNavigate} from "react-router-dom";

function Archive(){
    const sortArticleList=getSortArticleList();
    const navigate=useNavigate();
    const upperCaseMonth=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]
    const [time,setTime]=useState({});


    useEffect(()=>{
        const timeObj={};
        sortArticleList.map(item=>{
            let yearMonth=item.time.slice(0,7);
            if(!(yearMonth in timeObj)){
                timeObj[yearMonth]=1;
            }else{
                timeObj[yearMonth]+=1;
            }
        })
        setTime({...timeObj});
    },[])

    function goToArchiveDetail(yearMonth){
        navigate("/archiveDetail",{
            state:yearMonth
        })
    }

    return(
        <div className={styles["archive"]}>
            <div className={styles["archiveTitle"]}>
                <IconCreditCard size={"large"} style={{marginRight:"5px"}}/>归档
            </div>
            <div className={styles["archiveContent"]}>
                {
                    Object.keys(time).map((item,index)=>{
                        let year=Number(item.slice(0,4));
                        let month=Number(item.slice(5,7));
                        return(
                            <div key={index} className={styles["archiveItem"]} onClick={()=>goToArchiveDetail(item)}>
                                <span style={{paddingLeft:"7px"}}>{upperCaseMonth[month-1]} {year}</span>
                                <span style={{paddingRight:"7px"}}>{time[item]}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Archive;