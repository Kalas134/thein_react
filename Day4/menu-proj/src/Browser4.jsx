import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";

function Info() {
    const { firstname } = useParams();
    return <h1>Hello, {firstname}!</h1>;
}

function Browser4() {
    return (
        <BrowserRouter>
            <h1>Browser 4</h1>
            <nav>
                <Link to="/customer/Emil">Emil</Link> | 
                <Link to="/customer/Tobias">Tobias</Link> | 
                <Link to="/customer/Linus">Linus</Link>
            </nav>

            <Routes>
                <Route path="/customer/:firstname" element={<Info />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Browser4;