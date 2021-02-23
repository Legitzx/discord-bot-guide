//? Css imports
import "./stylesheets/App.css";

//? import deps
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import SideBar from "./components/js/SideBar";

//? Page Imports
import LandingPage from "./pages/LandingPage";
import NotFound404Error from "./pages/NotFound404Error";
import TestPage from "./misc/TestPage";
import IntroductionPage from "./pages/componets/introduction/introPage";

//? Dep imports
// If using github pages then you need HashRouter not Brower
import { HashRouter as Router, Route, Switch } from "react-router-dom";
// Not needed anymore
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//? React Build

function App() {
	return (
		<Router>
			<div className="App">
				<SideBar /> <Header />
				<div className="router-rap-class">
					<div className="page-skeleton">
						<div>
							<Switch>
								{/* Using "/discordjs-guide" as root */}
								<Route path="/" exact component={LandingPage}></Route>
								<Route
									exact
									path="/introduction-start"
									component={IntroductionPage}
								></Route>
								<Route exact path="/test" component={TestPage}></Route>
								<Route exact path="*" component={NotFound404Error}></Route>
							</Switch>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
