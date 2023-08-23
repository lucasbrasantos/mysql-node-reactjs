import React, { useState } from 'react'
import Navbar from '../components/navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import data from '../resources/carsList.json'

const Add = () => {
	
	const [carros, setCarros] = useState({
		brand: "",
		color: "",
		year: "",
	})


	const navigate = useNavigate();

	const handleChange = async (e) => {
		setCarros(prev => ({...prev, [e.target.name]: e.target.value}))
	}
	
	const handleClick = async (e) => {
		e.preventDefault();
		
		try {
			await axios.post("http://localhost:8800/cars", carros);
			navigate('/')
		} catch (err) {
			console.log(err);
		}
		// const brand = e.target[0].value;
		// const color = e.target[1].value;
		// const year = e.target[2].value;
	}	
	
	const handleRandomSubmit = async(e) => {
		e.preventDefault()
		// console.log(data[Math.floor(Math.random() * 100)]);
		const randomCar = data[Math.floor(Math.random() * 100)]
		try {
			await axios.post("http://localhost:8800/cars", randomCar);
			// navigate('/')
		} catch (err) {
			console.log(err);
		}
	}
	return (
		<div className="container">
			<Navbar/>
			
			<h1 className="title">Add</h1>
			<form action="" className="addForm">
				<div>
					<label htmlFor="marca">marca</label>
					<input onChange={handleChange} name='brand' id='marca' type="text" placeholder='marca' />
				</div>
				<div>
					<label htmlFor="cor">cor</label>
					<input onChange={handleChange} name='color' id='cor' type="text" placeholder='cor' />
				</div>
				<div>
					<label htmlFor="ano">ano</label>
					<input onChange={handleChange} name='year' id='ano' type="text" placeholder='ano' />
				</div>


				<button type='submit' className='formButton' onClick={handleClick} >enviar</button>
				<button type='submit' name='random' className='formButton' onClick={handleRandomSubmit}>enviar random</button>
			</form>

		</div>
	)
}

export default Add