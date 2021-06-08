import React from "react";
import MainFooter from "../MainFooter/MainFooter";
import MainFooterv2 from "../MainFooter/MainFooterv2";
import TopNav from "../TopNav/TopNav";
import CISection1 from "./CISection1/CISection1";
import CISection2 from "./CISection2/CISection2";
import InsuranceTable from "./InsuranceTable/InsuranceTable";

const CarInsurance = () => {
	return (
		<div>
			<TopNav />
			<CISection1 />
			<CISection2 />
			<InsuranceTable />
			<MainFooterv2 />
			<MainFooter />
		</div>
	);
};

export default CarInsurance;
