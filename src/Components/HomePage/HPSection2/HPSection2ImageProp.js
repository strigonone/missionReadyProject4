import React from "react";
import "./HPSection2Style.css";

function HPSection2ImageProp(props) {
	return (
		<div
			className="HPSec2ImgContainer"
			style={{
				backgroundImage: `url(${props.background})`,
				backgroundSize: "contain",
				backgroundRepeat: "no-repeat",
			}}
		>
			{props.icon}
		</div>
	);
}

export default HPSection2ImageProp;
