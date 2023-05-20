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
import { useState } from "react";
import Session from "./lib/Session";
import Loader from "./components/Loader";
import CreateWork from "./pages/CreateWork";

function App() {
	const location = useLocation();
	const [isLoggedIn, setIsLoggedIn] = useState(Session.get('loggedIn'));
	const [token, setToken] = useState(Session.get('Token'));
	const [loading, setLoading] = useState(false);
	setToken(Session.get('Token'));


	return (
		<div className="bg-black pb-28 min-h-screen">
			{loading ? <Loader /> : ''}
			<AnimatePresence>
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Home loading={loading} setLoading={setLoading} />} />
					<Route path="/works" element={<Works loading={loading} setLoading={setLoading} isLoggedIn={isLoggedIn} />} />
					<Route path="/techs" element={<Technology isLoggedIn={isLoggedIn} token={token} loading={loading} setLoading={setLoading} />} />
					<Route path="/blogs" element={<Blogs isLoggedIn={isLoggedIn} token={token} loading={loading} setLoading={setLoading} />} />
					<Route path="/contact" element={<Contact loading={loading} setLoading={setLoading} />} />
					<Route path="/about" element={<About loading={loading} setLoading={setLoading} />} />
					<Route path="/post/:id" element={<SinglePost isLoggedIn={isLoggedIn} token={token} loading={loading} setLoading={setLoading} />} />

					{/* Private routes */}

					<Route path='/login' element={isLoggedIn ? <Navigate to='/dashboard' /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
					<Route path='/dashboard' element={isLoggedIn ? <Dashboard setIsLoggedIn={setIsLoggedIn} /> : <Navigate to='/login' />} />
					<Route path='/createpost' element={isLoggedIn ? <CreatePost isLoggedIn={isLoggedIn} token={token} setLoading={setLoading} /> : <Navigate to='/login' />} />
					<Route path='/creatework' element={isLoggedIn ? <CreateWork isLoggedIn={isLoggedIn} token={token} setLoading={setLoading} /> : <Navigate to='/login' />} />
				</Routes>
			</AnimatePresence>
			<Navbar />
		</div>
	);
}

export default App;
