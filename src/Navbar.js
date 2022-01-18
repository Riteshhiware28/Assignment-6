import React from 'react'
import './Navbar.css'
import Popup from './Popup'
import {useState} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import abc from './abc.png'
import { Link } from 'react-router-dom'

function Navbar() {
    const [buttonPopup , setButtonPopup] = useState(false);
    return (
        <div className='navbar'>
            {/* <nav class="navbar navbar-expand-lg navbar-light blue-grey lighten-5 mb-4 "> */}

                <div className='navbar1'>

                <i className="bi bi-list"></i>

                <img className='navbar__image' src='https://www.fullfreecoding.com/wp-content/uploads/2019/12/gaana.png'  alt="" />
            <div className='navbar__search'>
                <i className="bi bi-search"></i>
                <input type='text'className='search' placeholder='Search Artists, Songs , Albums' />
            </div>

                
                 <button class="ads">Go Ad Free</button>
                <button class="ads-pro">Get Gaana Plus</button>   

                <button class="bi bi-translate"></button>

                <i class="bi bi-moon"></i>

               <button class="user" onClick={()=>setButtonPopup(true)}>Log In / Sign up</button>
                 <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
		  <Row>
                   <Col><img  className="d-block w-100 img" src="https://static.toiimg.com/thumb/msid-76924993,width-400,resizemode-4/76924993.jpg" alt=""/>
                         <h1 class="login" ><b>Login/Signup</b></h1>
                        <p className='edit'><b>Get a personalized experience, and access all your music</b></p>
                       <input type='text'className='standard' placeholder='Enter Email or Mobile Number' />
                       <button class="Continue"><b>Continue</b></button> 
                        <div className='or'><p><b>Or Continue with</b></p></div>
                             <div classname="social">
                                <button class="bi bi-facebook">facebook</button>
                               <button class="bi bi-google">Google</button>
                             </div>  
                    </Col>
                   
                    <Col><img  className="logimg" src={abc} alt=""/></Col>
	       </Row>
                 </Popup>
                </div>
           
                <div className='navbar2'>
                       <Link to='/' className='route'>
                     <p className='route'>All</p>
                       </Link>
                <Link to='/trending' className='route'>
                    <p className='route'>Trending Songs</p>
                </Link>
                <Link to='/newsongs' className='route'>
                    <p className='route'>New Songs</p>
                </Link>
                <Link to='/oldsongs' className='route'>
                    <p className='route'>Old Songs</p>
                </Link>
                <Link to='/moods' className='route'>
                    <p className='route'>Moods & Genre</p>
                </Link>
                <Link to='/album' className='route'>
                    <p className='route'>Album</p>
                </Link>
                <Link to='/radio' className='route'>
                    <p className='route'>Radio</p>
                </Link>
                <Link to='/podcast' className='route'>
                    <p className='route'>Podcast</p>
                </Link>
                <Link to='/mymusic' className='route'>
                    <p className='route'>My Music</p>
                </Link>


                </div>

            {/* </nav> */}
        </div>
    )
}

export default Navbar

