import React, {Suspense, useEffect} from "react";
import './app.scss';
import {useRoutes} from "react-router-dom";
import routes from "./routes";
import Loading from "./components/Loading";
import styles from "./app.scss";
import eventBus from "./utils/pubSub";


function App(){
    const element=useRoutes(routes);
    // 节流
    const throttle=(fn,time)=>{
        let timer=null;
        return ()=>{
            if(timer) return;
            timer=setTimeout(()=>{
                fn();
                timer=null;
            },time)
        }
    }

    const emitScroll=()=>{
        eventBus.emit("scrollTop",document?.documentElement?.scrollTop);
    }

    useEffect(()=>{
        window.addEventListener("scroll",throttle(emitScroll,100));
        return ()=>{
            window.removeEventListener("scroll",throttle(emitScroll,100));
        }
    },[])

    return(
        <div className={styles["app"]}>
            <Suspense fallback={<Loading/>}>{element}</Suspense>
        </div>
    )
}

export default App;