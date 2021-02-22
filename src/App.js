//? Css imports
import "./stylesheets/App.css";

//? Page Imports
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import LandingPage from "./pages/LandingPage";
import NotFound404Error from "./pages/NotFound404Error";
import TestPage from "./misc/TestPage";
import IntroductionPage from "./pages/componets/introduction/introPage";

//? Dep imports
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//? React Build

function App() {
	return (
		<Router>
			<div className="App">
				<div className="router-rap-class">
					<div className="page-skeleton">
						<Header />
						<div>
							<Switch>
								{/* Using "/discordjs-guide" as root */}
								<Route exact path="/" exact component={LandingPage}></Route>
								<Route
									exact
									path="/introduction"
									exact
									component={IntroductionPage}
								></Route>
								<Route exact path="/test" exact component={TestPage}></Route>
								<Route
									exact
									path="*"
									exact
									component={NotFound404Error}
								></Route>
							</Switch>
						</div>
						<Footer />
					</div>
				</div>
			</div>
		</Router>
	);
}

export default App;
