import React from "react";
import jsxRuntime from 'react/jsx-runtime'
import {compileSync,runSync} from "@mdx-js/mdx";


function getFileNames(){
    let files=[];
    for (const item of articleList) {
        files.push(item);
    }
    return files;
}

const fileNames=getFileNames();
function getInfo(){
    const info=[];
    for (const item of fileNames) {

        const value =compileSync(item[0],{
            format:"mdx",
            outputFormat:'function-body'
        });

        const res =runSync(value,{
            jsx:jsxRuntime
        })

        if(res.info){
            res.info.fileName=item[1];
            info.push(res.info);
        }
    }
    // console.log(info)
    return info;
}

export default getInfo;