import React from 'react'

import '../style.css'

const Navbar = () => {
	return (
		<div className="navbar">

			<a href="/">carros</a>
			<a href="/add">add</a>
			<a  className='isDisabled'>update</a>

		</div>	
	)
}

export default Navbar