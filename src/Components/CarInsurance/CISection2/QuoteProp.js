import React from "react";
import "./CISection2Style.css";
import "../../ReusableBlueButton/ReusableBlueButton.css";
import { Link } from "react-router-dom";

function QuoteProp(props) {
	return (
		<div className="QuotePropContainer">
			<h3>{props.heading}</h3>
			<p>{props.text}</p>
			<Link to="/quote/aboutyourcar" className="BlueBtnStyle">
				{props.button}
			</Link>
		</div>
	);
}

export default QuoteProp;
