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
import * as CgIcons from "react-icons/cg";
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

				<h1>OPTIONAL ADD-ONS</h1>

				<div className="BoxContainer">
					<div className="BoxBorderContainer">
						<div className="BoxBorderContent">
							<h1>
								<CgIcons.CgScreenShot />
								Windscreen and glass claims
							</h1>
							<h5>$XX.XX per year</h5>
							<p>Claims for broken windscreen or window glass is excess free</p>
							<input
								type="radio"
								id="selection"
								name="selection"
								value="selection"
							/>
						</div>
					</div>
					<div className="BoxBorderContainer">
						<div className="BoxBorderContent">
							<h1>
								<FaIcons.FaCar />
								Car Rental Cover
							</h1>
							<h5>$XX.XX per year</h5>
							<p>
								Car rental is set up for you while your car is being repaired or
								stolen
							</p>
							<input
								type="radio"
								id="selection"
								name="selection"
								value="selection"
							/>
						</div>
					</div>
				</div>

				<label className="AboutYourCarSideContent">
					<h3>Renewal Reminder</h3>

					<input type="radio" id="email" name="reminder" value="email" />
					<label>Email</label>
					<input
						type="radio"
						id="textMessage"
						name="reminder"
						value="textMessage"
					/>
					<label>Text Message</label>
				</label>

				<div className="QuoteTandC">
					<h1>Terms and Agreement</h1>
					<p>
						The following terminology applies to these Terms and Conditions,
						Privacy Statement and Disclaimer Notice and any or all Agreements:
						"Client", “You” and “Your” refers to you, the person accessing this
						website and accepting the Company’s terms and conditions. "The
						Company", “Ourselves”, “We” and "Us", refers to our Company.
						“Party”, “Parties”, or “Us”, refers to both the Client and
						ourselves, or either the Client or ourselves. All terms refer to the
						offer, acceptance and consideration of payment necessary to
						undertake the process of our assistance to the Client in the most
						appropriate manner, whether by formal meetings of a fixed duration,
						or any other means, for the express purpose of meeting the Client’s
						needs in respect of provision of the Company’s stated
						services/products, in accordance with and subject to, prevailing
						English Law. Any use of the above terminology or other words in the
						singular, plural, capitalisation and/or he/she or they, are taken as
						interchangeable and therefore as referring to same.
						<h5>Please tick the box if you accept the terms and agreement*</h5>
						<input type="radio" id="Yes" name="business" value="Yes" />
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
					<Link to="/quote/payment" className="BlueBtnStyle">
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
