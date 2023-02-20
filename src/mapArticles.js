const fs=require('fs')


const mapArticles =()=>{
    const result=[];
    const data=fs.readdirSync('./src/articles');
    data.map(item=>{
        const article=fs.readFileSync(`./src/articles/${item}`,'utf8');
        result.push(article)
    })
    return result;
}

module.exports =mapArticles;