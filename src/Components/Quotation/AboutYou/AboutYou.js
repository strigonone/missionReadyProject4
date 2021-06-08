import React from "react";
import MainFooter from "../../MainFooter/MainFooter";
import TopNavV2 from "../../TopNav/TopNavV2";
import "../AboutYourCar/AboutYourCarStyle.css";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import "../../ReusableBlueButton/ReusableBlueButton.css";
import { Link } from "react-router-dom";
import * as RiIcons from "react-icons/ri";
import { useHistory } from "react-router-dom";

const AboutYou = () => {
	const history = useHistory();

	return (
		<div>
			<TopNavV2 />
			<div className="AboutYourCarContent">
				<Progress percent={40} />
				{/* https://reactjs.org/docs/forms.html */}
				<h1>About you</h1>

				<form>
					<label>
						<h3>Main Drive / Owner*</h3>
						<input type="text" name="name" placeholder="Tidus..." />
					</label>
					<div className="AboutYourCarSideContent">
						<label>
							<h3>What license do you hold?*</h3>
							<input type="text" name="license" placeholder="Full License.." />
						</label>
						<label>
							<h3>Date of Birth*</h3>
							<input type="date" name="dob" />
						</label>
					</div>
					<div className="AboutYourCarSideContent">
						<label>
							<h3>How many years have you had your license?*</h3>
							<input type="number" name="HowLongLicense" />
						</label>
						<label className="AboutYourCarSideContent">
							<h3>Gender?*</h3>
							<label>Male</label>
							<input type="radio" id="Male" name="gender" value="Male" />
							<label>Female</label>
							<input type="radio" id="Female" name="gender" value="Female" />
						</label>
					</div>

					<label className="AboutYourCarSideContent">
						<h3>
							In the last 5 years have you had any car accidents or theft of a
							vehicle?*
						</h3>
						<label>Yes</label>
						<input type="radio" id="Yes" name="business" value="Yes" />
						<label>No</label>
						<input type="radio" id="No" name="business" value="No" />
					</label>
				</form>

				<button className="BlueBtnStyle">Additional Driver</button>

				<div className="QuoteTandC">
					<h1>Adding an additional driver to your policy</h1>
					<p>
						You may think, because you have fully comprehensive car insurance
						you're covered to drive someone else's car, or because a friend has
						car insurance of their own they can drive your car. Well, in the
						interest of avoiding points on your driving licence or a driving
						ban, the only thing you should ever assume about car insurance is
						that every policy is different and all insurers offer different
						types of cover. Age, car type and occupation can all affect whether
						you're covered to drive another car.
					</p>
				</div>

				<div className="AboutYourCarBottomRightButtons">
					<RiIcons.RiArrowLeftSFill
						onClick={() => {
							history.goBack();
						}}
						style={{ fontSize: "3em", cursor: "pointer" }}
					/>

					{/* <button className="BlueBtnStyle"> */}
					<Link to="/quote/hereisyourquote" className="BlueBtnStyle">
						Continue
					</Link>
					{/* </button> */}
				</div>
			</div>
			<MainFooter />
		</div>
	);
};

export default AboutYou;
