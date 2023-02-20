import React from 'react';
import ArticlePreview from "../ArticlePreview";

function Home(){
    return (
        <div>
            {
                articleList.map((text,index)=>{
                    return <ArticlePreview text={text} key={index}/>
                })
            }
        </div>
    )
}

export default Home;