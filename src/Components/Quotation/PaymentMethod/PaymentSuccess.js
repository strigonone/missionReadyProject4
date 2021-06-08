import React from "react";
import MainFooter from "../../MainFooter/MainFooter";
import TopNavV2 from "../../TopNav/TopNavV2";
import "../AboutYourCar/AboutYourCarStyle.css";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import "../../ReusableBlueButton/ReusableBlueButton.css";
import { Link } from "react-router-dom";
import * as TiIcons from "react-icons/ti";

// import { useHistory } from "react-router-dom";

const PaymentSuccess = () => {
	// const history = useHistory();

	return (
		<div>
			<TopNavV2 />

			<div className="AboutYourCarContent">
				<Progress percent={100} />
				<div className="QuoteBigContainer">
					<TiIcons.TiTick
						style={{ fontSize: "6em", textAlign: "center", color: "green" }}
					/>
					<h1>Congratulations!</h1>
					<h4>
						You have made the right choice in insuring your car. You can now
						drive your car and feel secure!
					</h4>
					<p>A copy of your policy has been sent to desired mailing</p>
				</div>
				<Link to="/" className="BlueBtnStyle">
					Back to Home Page
				</Link>
			</div>
			<MainFooter />
		</div>
	);
};

export default PaymentSuccess;
