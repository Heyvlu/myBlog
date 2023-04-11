import React from "react";
import jsxRuntime from 'react/jsx-runtime'
import {compileSync,runSync} from "@mdx-js/mdx";


function getFileNames(){
    let files=[];
    for (const item of articleList) {
        files.push(item[0]);
    }
    return files;
}

const fileNames=getFileNames();
function getInfo(){
    const info=[];
    for (const item of fileNames) {

        const value =compileSync(item,{
            format:"mdx",
            outputFormat:'function-body'
        });

        const res =runSync(value,{
            jsx:jsxRuntime
        })
        // console.log(res.info)
        info.push(res.info);
    }
    return info;
}

export default getInfo;