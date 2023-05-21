import Navbar from "./components/Navbar";
import './App.css';
import Home from "./pages/Home";
import Works from "./pages/Works";
import Technology from "./pages/Technology";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import SinglePost from "./pages/SinglePost";
import { AnimatePresence } from "framer-motion";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import Dashboard from "./pages/Dashboard";
import { useEffect, useState } from "react";
import Session from "./lib/Session";
import Loader from "./components/Loader";
import CreateWork from "./pages/CreateWork";

function App() {
	const location = useLocation();
    const [title, setTitle] = useState("Monzurul Hasan")
	const [isLoggedIn, setIsLoggedIn] = useState(Session.get('loggedIn'));
	const [token, setToken] = useState(Session.get('Token'));
	const [loading, setLoading] = useState(false);

	useEffect(() => {
        document.title = title;
    }, [title]);

	return (
		<div className="bg-black pb-28 min-h-screen">
			{loading ? <Loader /> : ''}
			<AnimatePresence>
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Home setTitle={setTitle} loading={loading} setLoading={setLoading} />} />
					<Route path="/works" element={<Works setTitle={setTitle} loading={loading} setLoading={setLoading} isLoggedIn={isLoggedIn} />} />
					<Route path="/techs" element={<Technology setTitle={setTitle} isLoggedIn={isLoggedIn} token={token} loading={loading} setLoading={setLoading} />} />
					<Route path="/blogs" element={<Blogs setTitle={setTitle} isLoggedIn={isLoggedIn} token={token} loading={loading} setLoading={setLoading} />} />
					<Route path="/contact" element={<Contact setTitle={setTitle} loading={loading} setLoading={setLoading} />} />
					<Route path="/about" element={<About setTitle={setTitle} loading={loading} setLoading={setLoading} />} />
					<Route path="/blog/:id" element={<SinglePost setTitle={setTitle} isLoggedIn={isLoggedIn} token={token} loading={loading} setLoading={setLoading} />} />

					{/* Private routes */}

					<Route path='/login' element={isLoggedIn ? <Navigate to='/dashboard' /> : <Login setTitle={setTitle} setToken={setToken} setIsLoggedIn={setIsLoggedIn} />} />
					<Route path='/dashboard' element={isLoggedIn ? <Dashboard setTitle={setTitle} setIsLoggedIn={setIsLoggedIn} /> : <Navigate to='/login' />} />
					<Route path='/createpost' element={isLoggedIn ? <CreatePost setTitle={setTitle} isLoggedIn={isLoggedIn} token={token} setLoading={setLoading} /> : <Navigate to='/login' />} />
					<Route path='/creatework' element={isLoggedIn ? <CreateWork setTitle={setTitle} isLoggedIn={isLoggedIn} token={token} setLoading={setLoading} /> : <Navigate to='/login' />} />
				</Routes>
			</AnimatePresence>
			<Navbar />
		</div>
	);
}

export default App;