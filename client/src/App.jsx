import React from "react";
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";

import Carros from "./pages/Carros";
import Add from "./pages/Add";
import Update from "./pages/Update";



function App() {
	return(
		<BrowserRouter>
			<Routes>
				<Route index element={ <Carros/> } />
				<Route path="add" element={ <Add/> } />
				<Route path="update" element={ <Update/> } />
			</Routes>
		</BrowserRouter>
	)

}

export default App;
