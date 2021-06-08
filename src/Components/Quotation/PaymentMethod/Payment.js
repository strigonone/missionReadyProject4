import React from "react";
import MainFooter from "../../MainFooter/MainFooter";
import TopNavV2 from "../../TopNav/TopNavV2";
import "../AboutYourCar/AboutYourCarStyle.css";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import "../../ReusableBlueButton/ReusableBlueButton.css";
import { Link } from "react-router-dom";
import * as GrIcons from "react-icons/gr";
import * as BsIcons from "react-icons/bs";
// import { useHistory } from "react-router-dom";

const Payment = () => {
	// const history = useHistory();

	return (
		<div>
			<TopNavV2 />
			<div className="AboutYourCarContent">
				<Progress percent={80} />
				{/* https://reactjs.org/docs/forms.html */}
				<h1>Payment</h1>
				<h3>Quote # XXXX1234 </h3>

				<div className="QuoteBigContainer">
					<h4 style={{ textAlign: "center" }}>
						Comprehensive Everyday Plus for 1 driver of your Car. You are
						covered starting DD MM YYYY{" "}
					</h4>
				</div>

				<div className="AboutYourCarSideContent">
					<h5>
						<GrIcons.GrDocumentText />
						Policy Document
					</h5>
					<Link to="/quote/aboutyourcar" className="specialCaseLink">
						<h5>
							<BsIcons.BsPencil />
							Edit my details
						</h5>
					</Link>
				</div>

				<div className="QuoteBigContainer">
					<input type="text" name="NameOnCard" placeholder="Name On car..." />
					<input
						type="number"
						name="creditCardNo"
						placeholder="1234 1234 xxxx xxx"
					/>
					<div className="AboutYourCarSideContent">
						<input type="date" name="expiryDate" />
						<input type="number" name="cvv" placeholder="CVV" />
					</div>

					<div className="AboutYourCarSideContent">
						<Link to="/quote/paymentSuccess" className="BlueBtnStyle">
							Pay Now
						</Link>
						<Link to="/" className="BlueBtnStyle">
							Cancel
						</Link>
					</div>
				</div>
			</div>
			<MainFooter />
		</div>
	);
};

export default Payment;
