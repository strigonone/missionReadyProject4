import React from "react";
import { Switch, Route } from "react-router-dom";
import CarInsurance from "./Components/CarInsurance/CarInsurance";
import HomePage from "./Components/HomePage/HomePage";
import AboutYourCar from "./Components/Quotation/AboutYourCar/AboutYourCar";
import AboutYou from "./Components/Quotation/AboutYou/AboutYou.js";
import HereIsYourQuote from "./Components/Quotation/HereIsYourQuote/HereIsYourQuote";
import Payment from "./Components/Quotation/PaymentMethod/Payment";
import PaymentSuccess from "./Components/Quotation/PaymentMethod/PaymentSuccess";

const Router = () => {
	return (
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route exact path="/carinsurance" component={CarInsurance} />
			<Route exact path="/quote/aboutyourcar" component={AboutYourCar} />
			<Route exact path="/quote/aboutyou" component={AboutYou} />
			<Route exact path="/quote/hereisyourquote" component={HereIsYourQuote} />
			<Route exact path="/quote/payment" component={Payment} />
			<Route exact path="/quote/paymentsuccess" component={PaymentSuccess} />
		</Switch>
	);
};

export default Router;
