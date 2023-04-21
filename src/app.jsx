import React, {Suspense, useEffect} from "react";
import './app.scss';
import {useRoutes} from "react-router-dom";
import routes from "./routes";
import Loading from "./components/Loading";
import styles from "./app.scss";
import eventBus from "./utils/pubSub";


function App(){
    const element=useRoutes(routes);
    const emitScroll=()=>{
        // eventBus.emit("winScroll",window.scrollY);
        eventBus.emit("scrollTop",document?.documentElement?.scrollTop);
    }

    useEffect(()=>{
        window.addEventListener("scroll",emitScroll);
        return ()=>{
            window.removeEventListener("scroll",emitScroll);
        }
    },[])

    return(
        <div className={styles["app"]}>
            <Suspense fallback={<Loading/>}>{element}</Suspense>
        </div>
    )
}

export default App;