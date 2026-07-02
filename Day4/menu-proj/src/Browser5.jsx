import { BrowserRouter, Routes, Route, Link, Outlet, NavLink, useParams } from 'react-router-dom';

const navLinkStyles = ({ isActive }) => ({
    color: isActive ? '#184ef0' : '#333',
    textDecoration: isActive ? 'none' : 'underline',
    fontWeight: isActive ? 'bold' : 'normal',
    padding: '5px 10px'
});

function Home() {
    return <h1>Home Page</h1>;
}

function About() {
    return <h1>About Page</h1>;
}

function GPU() {
    return (
        <>
            <h1>GPU</h1>
            <nav style={{ marginBottom: '20px' }}>
                <NavLink to="/gpu/nvidia" style={navLinkStyles}>Nvidia</NavLink> |{" "}
                <NavLink to="/gpu/amd" style={navLinkStyles}>AMD</NavLink>
            </nav>
            <Outlet/>
        </>
    );
}

function NvidiaGPU() {
    return (
        <>
            <h2>Nvidia-GPU</h2>
            <ul>
                <li>GeForce RTX 5090</li>
                <li>GeForce RTX 5080</li>
                <li>GeForce RTX 5070 Ti</li>
                <li>GeForce RTX 5070</li>
            </ul>
        </>
    );
}

function AMDGPU() {
    return (
        <>
            <h2>AMD-GPU</h2>
            <ul>
                <li>Radeon RX 9070 XT</li>
                <li>Radeon RX 9070</li>
                <li>Radeon RX 9060 XT</li>
                <li>Radeon RX 9060</li>
            </ul>
        </>
    );
}

function Hello() {
    return (
        <>
            <h1>Hello</h1>
            <nav style={{ marginBottom: '20px' }}>
                <NavLink to="hello/helloinfo/Emil" style={navLinkStyles}>Emil</NavLink> |{" "}
                <NavLink to="hello/helloinfo/Alex" style={navLinkStyles}>Alex</NavLink> |{" "}
                <NavLink to="hello/helloinfo/Tim" style={navLinkStyles}>Tim</NavLink>
            </nav>
            <Outlet/>
        </>
    );
}

function HelloInfo() {
    const { firstname } = useParams();
    return (
        <>
            <h1>안녕하세요, { firstname }</h1>
            <p>이 페이지에 오셔서 반갑습니다.</p>
        </>
    );
}

function Contact() {
    return <h1>Contact Page</h1>;
}

function Browser5() {
    return (
        <BrowserRouter>
            <h1>Browser 5-Custom</h1>
            <nav>
                <NavLink to="/" style={navLinkStyles}>Home</NavLink> |{" "}
                <NavLink to="/about" style={navLinkStyles}>About</NavLink> |{" "}
                <NavLink to="/gpu" style={navLinkStyles}>GPU</NavLink> |{" "} 
                {/* NvidiaGPU, AMDGPU */}
                <NavLink to="/hello" style={navLinkStyles}>Hello</NavLink> |{" "}
                <NavLink to="/contact" style={navLinkStyles}>Contact</NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/gpu" element={<GPU />} >
                    <Route path="nvidia" element={<NvidiaGPU />} />
                    <Route path="amd" element={<AMDGPU />} />
                </Route>
                <Route path="/hello" element={<Hello />}>
                    <Route path="hello/helloinfo/:firstname" element={<HelloInfo />} />
                </Route>
                <Route path="contact" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Browser5;