import { Link } from "react-router-dom";
import "../componentStyle/navBar.css";
import { relative } from "path";


export default function NavBar(){
  return (  
  <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow p-6">
      <div className="container-fluid">
        <Link className="navbar-brand"  to="/home">
          <img src="logoSinFondoNegro.png" style={{width:100, height:100, position:"absolute",bottom:-25}}></img>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/quienessomos">Quienes somos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/servicios">Servicios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto</Link>
            </li>
          </ul>
            </div>
      </div>
    </nav>

    <div className="offcanvas offcanvas-start bg-dark" style={{color:"white"}} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div className="offcanvas-header">
        <Link className="offcanvas-title" id="offcanvasExampleLabel" to="/home" style={{color:"white", padding:10, paddingTop:0}}>Valdovinos Industrial Care</Link>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <div className="dropdown mt-3">
          <ul className="list-group" aria-labelledby="dropdownMenuButton" style={{listStyle: "none", paddingTop:0}}>
            <li><Link className="dropdown-item"  to="/quienessomos" >Quienes somos</Link></li>
            <li><Link className="dropdown-item"  to="/servicios" >Servicios</Link></li>
            <li><Link className="dropdown-item"  to="/contacto" >Contacto</Link></li>
          </ul>
        </div>
      </div>
    </div>

  </>
  );
};

/*<Link to="/principal" className="site-title">
      <img src="./imagenesCarrusel/logo.jpg" alt=" "></img>
</Link>*/