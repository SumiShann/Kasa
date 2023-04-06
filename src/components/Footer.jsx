import logo from '../assets/logo.svg'
import '../styles/css/Footer.css'

function Footer(){
    return(
        <footer className='footer'>
            <img className='footer-logo' src={logo} alt="logo en blanc"/>
            <p className='footer-rights'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer