import React,{Suspense} from "react";
import './app.scss';
import {useRoutes} from "react-router-dom";
import routes from "./routes";
import Loading from "./components/Loading";
import styles from "./app.scss";


function App(){
    const element=useRoutes(routes);
    return(
        <div className={styles["app"]}>
            <Suspense fallback={<Loading/>}>{element}</Suspense>
        </div>
    )
}

export default App;