import getInfo from "@/utils/getInfo";
function getSortArticleList(){
    const list=[]
    const info=getInfo();
    info.map(item=>{
        let date=new Date(item.time);
        let timestamp=date.getTime();
        item.timestamp=timestamp;
        list.push(item);
    })
    list.sort((a,b)=>{
        return (b.timestamp-a.timestamp);
    })
    return list;
}

export default getSortArticleList;