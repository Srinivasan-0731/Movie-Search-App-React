import React from "react";
// import Logo from "/favicon.png";

function NavBar() {
	return (
		<nav className="navbar bg-dark " data-bs-theme="dark">
			<div className="container-fluid">
				<a className="navbar-brand font-bold bg-purple-500 shadow-lg shadow-purple-900 w-full p-2 flex h-14 justify-center items-center text-5xl text-black " href="#">

					 Movie Search
				</a>
			</div>
		</nav>
	);
}

export default NavBar;