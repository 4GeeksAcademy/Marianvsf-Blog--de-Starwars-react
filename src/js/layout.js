import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import  CardsLearnMore  from "./views/learnMoreCardcharacters";
import  CardsLearnMorePlanet from "./views/learnMoreCardplanets";
import  CardsLearnMoreCar from "./views/learnMoreCardCars";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
						<Route path="/learnMoreCardcharacters/:uid" element={<CardsLearnMore/>} />
						<Route path="/home" element={<Home />} />
						<Route path="/learnMoreCardplanets/:uid" element={<CardsLearnMorePlanet/>} />
						<Route path="/learnMoreCardCars/:uid" element={<CardsLearnMoreCar/>} />

					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
