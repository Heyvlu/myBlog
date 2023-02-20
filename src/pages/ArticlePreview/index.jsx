import React from "react";

function ArticlePreview(props){
    const {text}=props;
    console.log(text)
    return (
        <div>
            <div>
                {
                    text.match()
                }
            </div>
        </div>
    )
}

export default ArticlePreview;