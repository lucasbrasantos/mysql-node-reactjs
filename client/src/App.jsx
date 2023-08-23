import React from "react";
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";

import Carros from "./pages/Carros";
import Add from "./pages/Add";
import Update from "./pages/Update";

import './style.css'

function App() {
	return(
		<BrowserRouter>
			<Routes>
				<Route index element={ <Carros/> } />
				<Route path="/add" element={ <Add/> } />
				<Route path="/update/:id" element={ <Update/> } />
			</Routes>
		</BrowserRouter>
	)

}

export default App;
