//? Css imports
import "./stylesheets/App.css";

//? Page Imports
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import HomePage from "./pages/HomePage";
import NotFound404Error from "./pages/NotFound404Error";
import TestPage from "./misc/TestPage";

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
								<Route exact path="/">
									<HomePage />
								</Route>
								<Route exact path="/test">
									<TestPage />
								</Route>
								<Route exact path="*">
									<NotFound404Error />
								</Route>
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
