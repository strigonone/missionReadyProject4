import React from "react";
// import QuickPointProp from "./QuickPointProp";
import "./HPSection1Style.css";
import { Link } from "react-router-dom";
import "../../ReusableBlueButton/ReusableBlueButton.css";
import TrustedBrand from "../../../Images/trustedLogo.png";

const HPSection1 = () => {
	return (
		<div className="HPSec1MainContainer">
			<div className="HPSec1Content">
				<div className="HPSec1SideBySide">
					<img src={TrustedBrand} alt="NZ Trusted Brand" />
					<h1 style={{ textAlign: "center" }}>
						NZ Most Trusted Used Vehicle Dealership
					</h1>
				</div>
				<h2 style={{ textAlign: "center" }}>2 years and Counting</h2>
				{/* 
				<QuickPointProp text="Quick" />
				<QuickPointProp text="Easy" />
				<QuickPointProp text="Affordable" /> */}
				<Link to="/carinsurance" className="BlueBtnStyle">
					Find Out More
				</Link>
			</div>
		</div>
	);
};

export default HPSection1;
