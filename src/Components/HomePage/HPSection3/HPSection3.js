import React from "react";
import Dropdown from "react-dropdown";
import "./HPSection3Style.css";
import * as AiIcons from "react-icons/ai";

const HPSection3 = () => {
	const options = [
		"All",
		"Auckland",
		"Wellington",
		"Hamilton",
		"Christchurch",
		"Dunedin",
	];

	return (
		<div className="HPSec3MainContainer">
			<h1>UPCOMING AUCTIONS, SALES & EVENTS</h1>
			<div className="HPSec3Content">
				<Dropdown
					options={options}
					// onChange={this._onSelect}
					placeholder="Location"
					arrowClosed={<AiIcons.AiOutlineArrowDown />}
					arrowOpen={<AiIcons.AiOutlineArrowUp />}
				/>
			</div>
		</div>
	);
};

export default HPSection3;
