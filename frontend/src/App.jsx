import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home,About,Cart,Login_or_Registration, NotFound, MyGames } from "./pages/router.js";
import NavBar from "./components/NavBar.jsx";
import LoggedNav from "./components/LoggedNav.jsx";
import Footer from "./components/Footer.jsx";
import { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";

export default () => {
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLogged(!!token);
    }, []);

    return (
        <BrowserRouter>
            {isLogged ? <LoggedNav></LoggedNav> : <NavBar></NavBar>}
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/mycart" element={<Cart></Cart>}></Route>
                <Route path="/login-or-registration" element={<Login_or_Registration></Login_or_Registration>}></Route>
                <Route path="/mygames" element={<MyGames></MyGames>}></Route>

                {/*Ide a többi oldalt*/}
                <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
            <Footer></Footer>
        </BrowserRouter>
    );
}