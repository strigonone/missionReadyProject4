import React from "react";
import MainFooter from "../../MainFooter/MainFooter";
import TopNavV2 from "../../TopNav/TopNavV2";
import "../AboutYourCar/AboutYourCarStyle.css";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import "../../ReusableBlueButton/ReusableBlueButton.css";
import { Link } from "react-router-dom";
import * as RiIcons from "react-icons/ri";
import * as FaIcons from "react-icons/fa";
import { useHistory } from "react-router-dom";
import QuotePropV2 from "./QuotePropV2";
import QuickPointProp from "../../HomePage/HPSection1/QuickPointProp";

const HereIsYourQuote = () => {
	const history = useHistory();

	return (
		<div>
			<TopNavV2 />
			<div className="AboutYourCarContent">
				<Progress percent={60} />
				{/* https://reactjs.org/docs/forms.html */}
				<h1>Here is your Quote</h1>
				<h3>Quote # XXXX1234 </h3>

				<h5>
					<FaIcons.FaExclamation />
					This quote is valid only until DD / MM / YYYY
				</h5>

				<div className="QuoteBigContainer">
					<div className="QuotePropContainerBigMain">
						<h2>Comprehensive Everyday Plus</h2>
						<h1>$XXX.XX</h1>
						<h5>Annual Payment (SAVE 10%)</h5>
						<QuickPointProp text="Lifetime guarantee on repairs we arrange" />
						<QuickPointProp text="Personal property stolen/damaged" />
						<QuickPointProp text="In an incident involving your car (Up to $500)" />
						<QuickPointProp text="Replacement of stolen keys and recording of locks (Up to $1000)" />
						<QuickPointProp text="Hire car after theft of up to 14 days" />
					</div>

					<div className="AboutYourCarSideContent">
						<QuotePropV2
							heading="$XXX.XX"
							subHeading="Annual Payment"
							text="Third Party Property Damage"
						/>
						<QuotePropV2
							heading="$XXX.XX"
							subHeading="Annual Payment"
							text="Third Party Fire & Theft"
						/>
						<QuotePropV2
							heading="$XXX.XX"
							subHeading="Annual Payment"
							text="Mechanical Breakdown"
						/>
					</div>
				</div>

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

export default HereIsYourQuote;
