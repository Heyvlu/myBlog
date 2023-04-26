import getSortArticleList from "@/utils/getSortArticleList";
const sortArticleList=getSortArticleList();

const initHomeState={
    list:sortArticleList.slice(0,6),
    currentPage:1
}
export function setHomeStateReducer(preState=initHomeState, action){
    if(action===undefined){
        return preState;
    }

    switch (action.type) {
        case "setHomeState":
            return action.data;
        case "clearHomeState":
            return initHomeState;
        default:
            return preState;
    }
}