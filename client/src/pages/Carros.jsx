import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Carros = () => {

	const [carros, setCarros] = useState([]);
	const navigate = useNavigate();

	useEffect(()=> {
		
		const fetchAllCars = async () => {
			try {
				const res = await axios.get('http://localhost:8800/cars')
				setCarros(res.data)
			} catch (err) {
				console.log(err);
			}
		}

		fetchAllCars()

	}, [])


	const handleDelete = async( id ) => {
		
		try {
			await axios.delete("http://localhost:8800/cars/"+id)
			window.location.reload()
		} catch (err) {
			console.log(err);
		}
	}


  	return (
		<div className="container">
			
			<Navbar/>

			<h1 className="title">Shermano's - Cars Dealership</h1>

			<div className="cars">
				{
					carros.map((car) => (
						<div className="car" key={car.id}>
							<div className="info">
								<span className='carid'>{car.id}</span>
								<h3>marca: <span style={{color:'gold'}}>{car.brand}</span></h3>
								<h3>cor: <span style={{color:'red'}}>{car.color}</span></h3>
								<h3>ano: <span style={{color:'green'}}>{car.year}</span></h3>
							</div>
							<div className="buttons">
								<button name='delete' onClick={() => handleDelete(car.id)}>deletar</button>
								<button name='update' onClick={() => navigate(`/update/${car.id}`)} >update</button>
							</div>
						</div>
					))
				}
			</div>						

		</div>
	)
}

export default Carros