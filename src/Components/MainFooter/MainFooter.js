import React from "react";
import "./MainFooter.css";
import * as FaIcons from "react-icons/fa";
import * as GoIcons from "react-icons/go";
import * as GrIcons from "react-icons/gr";
import * as HiIcons from "react-icons/hi";

const MainFooter = () => {
	return (
		<div className="MainFooterContainer">
			<div className="FooterContent">
				<div className="FooterLogos">
					<GoIcons.GoLocation />
					<GrIcons.GrFacebook />
					<FaIcons.FaInstagram />
					<HiIcons.HiOutlineMailOpen />
				</div>
				<h4>© 2021 Turners</h4>
			</div>
		</div>
	);
};

export default MainFooter;
