import React from "react";
import QuickPointProp from "./QuickPointProp";
import "./HPSection1Style.css";

const HPSection1 = () => {
	return (
		<div className="HPSec1MainContainer">
			<div className="HPSec1Content">
				<h1>Protect yourself against unexpected costs</h1>
				<QuickPointProp text="Quick" />
				<QuickPointProp text="Easy" />
				<QuickPointProp text="Affordable" />
				<button>Find Out More</button>
			</div>
		</div>
	);
};

export default HPSection1;
