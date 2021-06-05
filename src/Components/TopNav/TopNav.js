import React from "react";
import "./TopNav.css";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import TLogo from "../../Images/turnersTLogo.png";

const TopNav = () => {
	return (
		<div className="TopNavMainContainer">
			<img src={TLogo} alt="Logo" />
			<div className="TopNavigationContainer">
				<div className="TopNavigation">
					<li>Find a car</li>
					<li>Sell Car</li>
					<li>Car Insurance</li>
					<li>Finance</li>
					<li>Auctions & Events</li>
				</div>
			</div>
			<div className="TopRightContent">
				<BiIcons.BiUser />
				<AiIcons.AiOutlineSearch />
				<AiIcons.AiFillPhone />
				0800 887 637
			</div>
		</div>
	);
};

export default TopNav;
