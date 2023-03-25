import logo from "../assets/airbnb.svg"

export default function Navbar() {
    return(
        <nav>
            <img src={logo} alt="Aibnb Logo" className="nav--logo"/>
        </nav>
    )   
}