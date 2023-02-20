import React from "react";
import Article1 from "../../articles/Article1.mdx";



function Articles(){
    return (
        <div>
            <Article1 components={{
                img:({src})=>{
                    return <img src={"/assets/images/1/"+src}/>
                },
                code:({children})=>{
                    return <div style={{backgroundColor:"#282c34",color:"#abb2bf"}}>{children}</div>
                }
            }}/>
        </div>
    )
}

export default Articles;