import React from "react";
import "./TopNav.css";
import * as AiIcons from "react-icons/ai";
// import * as BiIcons from "react-icons/bi";
import TLogo from "../../Images/turnersTLogo.png";
import { Link } from "react-router-dom";

const TopNavV2 = () => {
	return (
		<div className="TopNavMainContainer2">
			<Link to="/">
				<img src={TLogo} alt="Logo" />
			</Link>

			<div className="TopRightContent2">
				Need Help?
				<div className="TopRightCombined2">
					<AiIcons.AiFillPhone />
					0800 887 637
				</div>
			</div>
		</div>
	);
};

export default TopNavV2;
