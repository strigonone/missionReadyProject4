import React from "react";
import "./CISection2Style.css";
import QuickPointProp from "../../HomePage/HPSection1/QuickPointProp";
import QuoteProp from "./QuoteProp";

const CISection2 = () => {
	return (
		<div className="CISection2Container">
			<h2>Why Insure with us?</h2>
			<div className="CISection2Content">
				<QuickPointProp text="Multi-Vehicle Discount" />
				<QuickPointProp text="Turner's Breakdown Assitance" />
				<QuickPointProp text="Member Benefits & discounts" />
			</div>
			<h2>Find the right cover for you</h2>
			<div className="CISection2Content">
				<QuoteProp
					heading="Comprehensive Everyday Plus"
					text="Everyday cover helps with day-to-day medical expenses like dental, GP consultations, physio and optical, so you can focus on maintaining your health. Everyday cover is a simple insurance policy that"
					button="Get a Quote"
				/>
				<QuoteProp
					heading="Third Party Property Damage"
					text="Looking for a car insurance comparison? Get a Third Party insurance quote from New Zealand’s Most Trusted General Insurer."
					button="Get a Quote"
				/>
				<QuoteProp
					heading="Third Party Fire & Theft"
					text="Looking for a car insurance comparison? Get a Third Party, Fire & Theft car insurance quote from New Zealand’s Most Trusted General Insurer"
					button="Get a Quote"
				/>
				<QuoteProp
					heading="Mechanical Breakdown"
					text="We understand that sinking feeling you get when something happens to your car. So if you suffer a mechanical breakdown we’re here to make sure your claim is as easy and stress-free as possible."
					button="Get a Quote"
				/>
			</div>
		</div>
	);
};

export default CISection2;
