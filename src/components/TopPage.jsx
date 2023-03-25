import grid from "../assets/grid.png"

export default function Navbar() {
    return(
        <section className="topPage--section">
            <img src={grid} alt="Image Grid" className="grid--photo"/>
            <h1 className="topPage--header">Online Experiences</h1>
            <p className="topPage--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )   
}