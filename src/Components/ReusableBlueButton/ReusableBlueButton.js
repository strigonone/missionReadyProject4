import React from "react";
import "./ReusableBlueButton.css";
// import { Link } from "react-router-dom";

function ReusableBlueButton(props) {
	return (
		<button className="BlueBtnStyle">
			{props.btnText}
			{props.link}

			{/* exact path="/carinsurance" component={CarInsurance} */}
		</button>
	);
}

export default ReusableBlueButton;
