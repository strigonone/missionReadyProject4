import React from "react";
import HPSection2ImageProp from "./HPSection2ImageProp";
import "./HPSection2Style.css";
import SubaruSTifind from "../../../Images/Subaru2015Sti.png";
import Evo10sell from "../../../Images/evo10.png";
import BRZinsurance from "../../../Images/subarubrz.png";
import gtrfinance from "../../../Images/r32gtr.png";
import SearchField from "react-search-field";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import * as MdIcons from "react-icons/md";

const HPSection2 = () => {
	return (
		<div className="HPSec2MainContainer">
			<div className="HPSec2Content">
				<div className="HPSec2repo">
					<HPSection2ImageProp
						background={SubaruSTifind}
						icon={<AiIcons.AiOutlineSearch />}
					/>
					<h2>FIND A CAR</h2>
					<SearchField placeholder="Search..." />
					<p>Biggest range of cars, find your dream car today!</p>
				</div>

				<div className="HPSec2repo">
					<HPSection2ImageProp
						background={Evo10sell}
						icon={<GiIcons.GiMoneyStack />}
					/>
					<h2>SELL CAR</h2>
					Book an Appraisal
				</div>

				<div className="HPSec2repo">
					<HPSection2ImageProp
						background={BRZinsurance}
						icon={<AiIcons.AiOutlineCarryOut />}
					/>
					<h2>CAR INSURANCE</h2>
					<li>Comprehensive Everyday Plus</li>
					<li>Third Party Property Damage</li>
					<li>Third Party, Fire & Theft</li>
					<li>Mechanical Breakdown Insurance</li>
				</div>
				<div className="HPSec2repo">
					<HPSection2ImageProp
						background={gtrfinance}
						icon={<MdIcons.MdAttachMoney />}
					/>
					<h2>FINANCE</h2>
					<li>Get Pre-aproval</li>
					<li>Finance Calculator</li>
					<li>Drive away today!</li>
				</div>
			</div>
		</div>
	);
};

export default HPSection2;
