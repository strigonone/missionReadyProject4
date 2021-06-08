import React from "react";
import "./HPSection4Style.css";
import model1 from "../../../Images/Model1.jpg";
import model2 from "../../../Images/Model2.jpg";
import model3 from "../../../Images/Model3.jpg";
import model4 from "../../../Images/Model4.jpg";

const HPSection4 = () => {
	return (
		<div className="HPSec4MainContainer">
			<h1>Stories</h1>
			<div className="HPSec4Content">
				<div className="HPSec4repo">
					<img src={model1} alt="model1" />
					<p>I found a nice JDM sports car</p>
				</div>

				<div className="HPSec4repo">
					<img src={model2} alt="model2" />
					<p>Selling my car with turners was made easy!</p>
				</div>

				<div className="HPSec4repo">
					<img src={model3} alt="model3" />
					<p>Getting Car Insurance with Turners was a breeze and affordable</p>
				</div>
				<div className="HPSec4repo">
					<img src={model4} alt="model4" />
					<p>
						I now drive a Mitsubishi EVO IX MR 2005 because of Turners! (And
						Johnny LOL)
					</p>
				</div>
			</div>
		</div>
	);
};

export default HPSection4;
