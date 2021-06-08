import React from "react";
import videoSource from "../../../Images/sampleVid.mp4";
import "./CISection1Style.css";
// import QuickPointProp from "../../HomePage/HPSection1/QuickPointProp";
// import { Link } from "react-router-dom";

const CISection1 = () => {
	return (
		<div>
			<video controls autoPlay loop muted className="VideoBkGround">
				<source src={videoSource} type="video/mp4" />
			</video>

			{/* Learn to overlay text etc ontop of video another time  */}
			{/* <div className="CISection1Content">
				<h1 style={{ textAlign: "center" }}>
					Protect yourself against unexpected costs
				</h1>
				<QuickPointProp text="Quick" />
				<QuickPointProp text="Easy" />
				<QuickPointProp text="Affordable" />
				<Link to="/carinsurance">
					<button className="BlueBtnStyle">Find Out More</button>
				</Link>
			</div> */}
		</div>
	);
};

export default CISection1;
