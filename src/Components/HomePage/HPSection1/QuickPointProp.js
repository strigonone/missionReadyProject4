import React from "react";
import * as TiIcons from "react-icons/ti";
import "./HPSection1Style.css";

function QuickPointProp(props) {
	return (
		<div className="QuickPointContainer">
			<TiIcons.TiTick style={{ color: "green" }} />
			{props.text}
		</div>
	);
}

export default QuickPointProp;
