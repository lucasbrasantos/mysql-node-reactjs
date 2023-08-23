import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import data from '../resources/carsList.json'

const Update = () => {
	
	const navigate = useNavigate();
	const location = useLocation();
	
	const carId = location.pathname.split('/')[2]
	const [carros, setCarros] = useState({
		brand: "",
		color: "",
		year: "",
	})
	
	useEffect(()=> {
		
		const fetchAllCars = async () => {
			try {
				const res = await axios.get('http://localhost:8800/cars')
				setCarros(res.data.find(e => e.id== carId))
				
			} catch (err) {
				console.log(err);
			}
		}		
		
		fetchAllCars()
		
	}, [])

	
	const handleChange = async (e) => {
		setCarros(prev => ({...prev, [e.target.name]: e.target.value}))
	}
	
	const handleClick = async (e) => {
		e.preventDefault();
		
		try {
			await axios.put("http://localhost:8800/cars/" + carId, carros);
			navigate('/')
		} catch (err) {
			console.log(err);
		}
	}	
	
	return (
		<div className="container">
			<Navbar/>
			
			<h1 className="title">Update car - {carId}</h1>
			<form action="" className="addForm">
				<div>
					<label htmlFor="marca">marca</label>
					<input onChange={handleChange} name='brand' id='marca' type="text" placeholder='marca' defaultValue={carros.brand && carros.brand}/>
				</div>
				<div>
					<label htmlFor="cor">cor</label>
					<input onChange={handleChange} name='color' id='cor' type="text" placeholder='cor' defaultValue={carros.color && carros.color}/>
				</div>
				<div>
					<label htmlFor="ano">ano</label>
					<input onChange={handleChange} name='year' id='ano' type="text" placeholder='ano' defaultValue={carros.year && carros.year}/>
				</div>


				<button type='submit' className='formButton' onClick={handleClick} >enviar</button>
			</form>

		</div>
	)
}

export default Update