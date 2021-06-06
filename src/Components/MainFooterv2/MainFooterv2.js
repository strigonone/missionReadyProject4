import React from "react";
// Remove import link once finalized
// import { Link, NavLink } from "react-router-dom";
import "./MainFooterStylev2.css";

// Main reusable footer that could be called upon on different pages

const MainFooterv2 = () => {
	return (
		<div className="MainFooterLayoutv2">
			<div className="FooterContainerv2">
				<div className="ContentContainerv2">
					<h4>CARS</h4>
					<li>How to Buy</li>
					<li>Sell Your Car</li>
					<li>Finance & Insurance</li>
					<li>Auctions & Events</li>
					<li>Buyer & Seller Fees</li>
					<li>Vehicle Sale Price History Tool</li>
					<li>Shipping Costs</li>
				</div>
				<div className="ContentContainerv2">
					<h4>TRUNERS FINANCE</h4>
					<li>Finance Homepage</li>
					<li>Car & Personal Finance</li>
					<li>Loan Calculator</li>
					<li>Car Insurance</li>
					<li>Mechanical Breakdown Insurance</li>
					<li>General Insurances</li>
					<li>Trucks Finance</li>
					<li>Finanical Information</li>
				</div>
				<div className="ContentContainerv2">
					<h4>SEARCH FOR</h4>
					<li>Cars</li>
					<li>Trucks & Machinery</li>
					<li>Damaged & End of Life Cars</li>
					<li>Boats & Marine</li>
					<li>Motorcycles & Scooters</li>
					<li>General Goods</li>
					<li>Buses, Caravans & Motorhomes</li>
					<li>Turners Auction Schedule</li>
				</div>
				<div className="ContentContainer">
					<h4>ABOUT US</h4>
					<li>Overview</li>
					<li>Turners Careers</li>
					<li>Privacy Policy</li>
					<li>Turners Live</li>
					<li>The Good Oil Blog</li>
					<li>Email Alerts</li>
					<li>Contact Us</li>
				</div>
			</div>
		</div>
	);
};

export default MainFooterv2;
