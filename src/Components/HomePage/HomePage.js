import React from "react";
import MainFooter from "../MainFooter/MainFooter";
import MainFooterv2 from "../MainFooterv2/MainFooterv2";
import TopNav from "../TopNav/TopNav";
import HPSection1 from "./HPSection1/HPSection1";
import HPSection2 from "./HPSection2/HPSection2";
import HPSection3 from "./HPSection3/HPSection3";
import HPSection4 from "./HPSection4/HPSection4";

const HomePage = () => {
	return (
		<div>
			<TopNav />
			<HPSection1 />
			<HPSection2 />
			<HPSection3 />
			<HPSection4 />
			<MainFooterv2 />
			<MainFooter />
		</div>
	);
};

export default HomePage;
