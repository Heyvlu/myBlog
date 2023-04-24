import getSortArticleList from "@/utils/getSortArticleList";

function getTags(){
    const res=[];
    const sortArticleList=getSortArticleList();
    for (const item of sortArticleList) {
        item.tags.map(value=>{
            res.push(value);
        })
    }
    const arr=Array.from(new Set(res));
    return arr;
}

export default getTags;