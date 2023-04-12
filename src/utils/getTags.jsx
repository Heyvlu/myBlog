import getInfo from "./getInfo";

function getTags(){
    const res=[];
    const info=getInfo();
    for (const item of info) {
        item.tags.map(value=>{
            res.push(value);
        })
    }
    const arr=Array.from(new Set(res));
    return arr;
}

export default getTags;