import React from "react";
import MainFooter from "../../MainFooter/MainFooter";
import TopNavV2 from "../../TopNav/TopNavV2";
import "./AboutYourCarStyle.css";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import "../../ReusableBlueButton/ReusableBlueButton.css";
import { Link } from "react-router-dom";
import * as RiIcons from "react-icons/ri";
import { useHistory } from "react-router-dom";

const AboutYourCar = () => {
	const history = useHistory();

	return (
		<div>
			<TopNavV2 />
			<div className="AboutYourCarContent">
				<Progress percent={20} />
				{/* https://reactjs.org/docs/forms.html */}
				<h1>About your car</h1>

				<form>
					<label>
						<h3>What is your car registration?*</h3>
						<input type="text" name="name" placeholder="FPG125..." />
					</label>
					<div className="AboutYourCarSideContent">
						<label>
							<h3>Make*</h3>
							<input type="text" name="Make" placeholder="Subaru..." />
						</label>
						<label>
							<h3>Model*</h3>
							<input type="text" name="Model" placeholder="WRX STi..." />
						</label>
						<label>
							<h3>Year*</h3>
							<input type="number" name="Year" placeholder="2004..." />
						</label>
					</div>

					<label className="AboutYourCarSideContent">
						<h3>Do you use your car for Business?*</h3>
						<label>Yes</label>
						<input type="radio" id="Yes" name="business" value="Yes" />
						<label>No</label>
						<input type="radio" id="No" name="business" value="No" />
					</label>
					<label>
						<h3>What is your Address?*</h3>
						<input
							type="text"
							name="address"
							placeholder="69 Zanarkand Street..."
						/>
					</label>
					<label>
						<h3>Select your start date.*</h3>
						<input type="date" name="startDate" />
					</label>
				</form>
				<div className="AboutYourCarBottomRightButtons">
					<RiIcons.RiArrowLeftSFill
						onClick={() => {
							history.goBack();
						}}
						style={{ fontSize: "3em", cursor: "pointer" }}
					/>

					{/* <button className="BlueBtnStyle"> */}
					<Link to="/quote/aboutyou" className="BlueBtnStyle">
						Continue
					</Link>
					{/* </button> */}
				</div>
			</div>
			<MainFooter />
		</div>
	);
};

export default AboutYourCar;
