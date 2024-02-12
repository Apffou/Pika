import { NavLink } from 'react-router-dom';
import './Nav.scss';
function Nav() {

    return (
        <nav >
            <NavLink to="/" className="home" >  Accueil</NavLink>
            <NavLink to="/about">À propos</NavLink>
        </nav >
    )

}

export default Nav;