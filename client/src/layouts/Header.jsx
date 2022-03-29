import './header.css';
import Logo from './logo.png';
import Arrow from './arrow.png';

import React from 'react'

const Header = () => {
	return (
		<div className='header'>
			{/* <div className='header-logo'>Logo</div> */}
			<img src={Logo} alt='logo' className='header-logo' />
			<div className='drop-downs'>
				<ul className='list'>
					<li className='list-item' >Countries<img src={Arrow} alt='arrow' className='arrow' /></li>
					<li className='list-item' >Universities<img src={Arrow} alt='arrow' className='arrow' /></li>
					<li className='list-item' >Courses<img src={Arrow} alt='arrow' className='arrow' /></li>
					<li className='list-item' >Exams<img src={Arrow} alt='arrow' className='arrow' /></li>
					<li className='list-item' >Events<img src={Arrow} alt='arrow' className='arrow' /></li>
				</ul>
			</div>
			<div className='button'>Store</div>
			<div className='button'>TALK TO COUNCELLOR</div>
			<div>
			<ul className='list'>
				<li className='list-item' >Login</li>
				<li className='list-item' >Sign up</li>
			</ul>
			</div>
		</div>
	)
}

export default Header