import './intro.css';

import React from 'react'

const Intro = () => {
	return (
		<div>
			<div className='Intro'>
				<div className='head'>MASTERS IN <span className='underline'>COMPUTER</span> SCIENCE IN US</div>
				<div className='intro-text'>Grow Your skill to Advance Your Career Path</div>
			</div>
			<div className='text'>
				<h1 className='top'>Introduction</h1>
				<div className='content'>
					Computer Science is the study of processes to develop mathematical models that bridge human interaction with computers by writing programs for software, application or a website. In this age of computers and technology and given the field's broad range and flexibility, It has become one of the most preferred courses in the world. <br /><br />
					With Computer Science being the most popular course, Masters in Computer Science in the USA is naturally one of the preferred choices for aspiring Indian students. The US is home to some of the top tech companies like Microsoft, IBM, Google, and many others, and this provides Computer Science graduates in the US with innumerable job options in this field. <br /> <br />
					Here you will be finding all the details you will need to pursue your MS in Computer Science in the USA
				</div>
			</div>
			<div className='special'>
				<div className='special-top'>Popular Specialization</div>
				<div className='special-content'> Below are some of the popular specializations of Computer Science </div>
				<ul className='courses'>
					<li className='course'>Artificial Intelligence</li>
					<li className='course'>Big Data</li>
					<li className='course'>Cloud Computing</li>
					<li className='course'>Computer Architecture</li>
					<li className='course'>Computer Graphics</li>
					<li className='course'>Computer Networks</li>
					<li className='course'>Cyber Security</li>
					<li className='course'>Data Structures</li>
					<li className='course'>Embedded Systems</li>
					<li className='course'>Information Management and Data Analytics</li>
					<li className='course'>Machine Learning</li>
					<li className='course'>Mobile and Web Computing</li>
					<li className='course'>Software Engineering</li>
				</ul>
			</div>
			<div className='requirements'>
				<div className='requirements-top'>Requirements</div>
				<ul className='req-list'>
					<li>
						<div className='req'>Degree</div>
					</li>
					<li>
						<div className='des'>a four year bachelor's degree in related field from an accredited intitution with a minimum 65%</div>
					</li>
					<li>
						<div className='req'>ILETS</div>
					</li>
					<li>
						<div className='des'>A minimum of 6.5</div>
					</li>
					<li>
						<div className='req'>TOEFL iBT</div>
					</li>
					<li>
						<div className='des'>Acceptable Overall Score Range: 79-100</div>
					</li>
					<li>
						<div className='req'>General GRE</div>
					</li>
					<li>
						<div className='des'>A minimum of 300 is required to get into a reasonably good university. Top universities like Stanford require close to 330 range </div>
					</li>
					<li>
						<div className='req'>Statement of Purpose (SOP)</div>
					</li>
					<li>
						<div className='des'>2 SOPs </div>
					</li>
					<li>
						<div className='req'>Letter of Recommendation (LOR)</div>
					</li>
					<li>
						<div className='des'>Three letters of recommendation (including at least two academic references) </div>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Intro