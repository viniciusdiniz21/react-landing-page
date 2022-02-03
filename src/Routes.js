import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"

import Page from "./Pages/main"
import Register from "./Pages/register"

export function AppRotas(){
    return(
        <Router>
            <Routes>
                <Route path="/main" element={<Page/>}/>
                 
                <Route path="/register" element={<Register/>}/>

            </Routes>
        </Router>
    )
};
