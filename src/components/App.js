import React   from "react";
import {Route} from "react-router-dom";
import Index   from "./pages/Index";

function App() {
	return (
		<div className="App">
			{/* Header goes here */}
			
			<Route path="/" component={Index} />
		</div>
	);
}

export default App;
