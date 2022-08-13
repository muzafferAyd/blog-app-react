import Navbar from "../components/navbar/Navbar"
import {BrowserRouter, Route, Switch} from "react-router-dom";
import CardDetail from "../pages/CardDetail";
import HomePage from "../pages/HomePage";



export const MainRouter = () => {


    return(
        <div>
            <Navbar />
{/*            <Switch>
                <Route path="/detail" component={CardDetail} exact />
                <Route path="/" component={HomePage} exact />
            </Switch>*/}
        </div>
    )
}
