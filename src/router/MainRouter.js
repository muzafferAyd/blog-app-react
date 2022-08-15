import Navbar from "../components/navbar/Navbar"
import { Route, Routes} from 'react-router-dom'
import CardDetail from "../pages/CardDetail";
import HomePage from "../pages/HomePage";



export const MainRouter = () => {


    return(
        <div>
            <Navbar />
            <Routes>
                <Route path="/detail/:slug" element={<CardDetail/>} exact />
                <Route path="/" element={<HomePage/>} exact />
            </Routes>
        </div>
    )
}
