import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home,About,Cart,Login_or_Registration, NotFound } from "./pages/router.js";
import NavBar from "./components/NavBar.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';


export default () => {
    return (
        <Router>
            <NavBar></NavBar>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/cart" element={<Cart></Cart>}></Route>
                <Route path="/login_or_registration" element={<Login_or_Registration></Login_or_Registration>}></Route>

                {/*Ide a többi oldalt*/}
                <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
            {/*Footer*/}
        </Router>
    );
}