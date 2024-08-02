import "../styles/style.css"
import logo from "../assets/logo.png"

function Banner(){
  return <div className="header">
            <img src={logo} alt="la maison de la jungle" className="logo" />
            <h1 className="titre">La maison jungle</h1>
         </div>
}

export default Banner