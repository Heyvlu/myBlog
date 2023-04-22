import React from "react";
import jsxRuntime from 'react/jsx-runtime'
import {compileSync,runSync} from "@mdx-js/mdx";

function getInfo(){
    const info=[];
    for (const item of articleList) {

        const value =compileSync(item[0],{
            format:"mdx",
            outputFormat:'function-body'
        });

        const res =runSync(value,{
            jsx:jsxRuntime
        })

        if(res.info){
            res.info.text=item[0];
            res.info.fileName=item[1];
            info.push(res.info);
        }
    }
    return info;
}

export default getInfo;