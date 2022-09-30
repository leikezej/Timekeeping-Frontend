import React, { useState } from "react";
import "./navbar.css";
import { AiOutlineHome, AiOutlineFieldTime,  AiOutlineClockCircle, AiOutlineLineChart, AiOutlineUser } from "react-icons/ai";

const NavBar = () => {
	const [activeHam, setActiveHam] = useState(false);
	const menuItems = (
		<>
			<a href="/">
				<AiOutlineHome size="17px" style={{ marginBottom: '4px'}} 
				/>Home
			</a>
			
			<a href="/timein">
				<AiOutlineClockCircle size="17px" style={{ marginBottom: '4px'}} 
				/>Timein
			</a>
			
			<a href="/timeout">
				<AiOutlineFieldTime size="17px" style={{ marginBottom: '4px'}} 
				/>Timeout
			</a>
			
			<a href="/reports">
				<AiOutlineLineChart size="17px" style={{ marginBottom: '4px'}} 
				/>Reports
			</a>
			
			
			<a href="/profile">
				<AiOutlineUser size="17px" style={{ marginBottom: '4px'}} 
					// onMouseOver={({target})=>target.style.color="#171515"}
					// onMouseOut={({target})=>target.style.color="#"}
				/>Profile
			</a>
		</>
	);
	return (
		<div className="navbar-container">
			<nav>
				<div className="nav-container">
					<h1 className="nav-brand">Bugtech</h1>
					<div className="menu">{menuItems}</div>
					<button
						className={activeHam ? "hamburger active-hamburger" : "hamburger"}
						onClick={() => setActiveHam(!activeHam)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
			</nav>
			{activeHam && <div className="nav-dropdown">{menuItems}</div>}
		</div>
	);
};

export default NavBar;