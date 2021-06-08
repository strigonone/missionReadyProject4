import React from "react";
import "../AboutYourCar/AboutYourCarStyle.css";
import "../../ReusableBlueButton/ReusableBlueButton.css";

function QuotePropV2(props) {
	return (
		<div className="QuotePropContainerv2">
			<h1>{props.heading}</h1>
			<h5>{props.subHeading}</h5>
			<h2>{props.text}</h2>
		</div>
	);
}

export default QuotePropV2;
