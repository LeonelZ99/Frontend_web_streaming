import '../styles/navbar.css';
import { BiSearch, BiChevronDown, BiBell } from "react-icons/bi"; // Importa los íconos de React Icons
import imgAvatar from '../img/avatar1.jpg';
import { Dropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import logo from '../img/pico-deportes-1.png';

const NavbarExample = () => {
    return (
        <>
            <nav className="navbar contenedorNav">

                {/* BOTON CON LOGO Y NOMBRE*/}
                <Button variant="link" className="d-flex align-items-center botonHome">
                    <img src={logo} alt="Mi Ícono" className="logo"/>
                    <h1 className='tituloPagina'>Pico Deportes</h1>
                </Button>

                {/* BUSCADOR */}
                <form className="mx-auto d-flex buscador" role="buscar">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-secondary" type="submit">Search</button>
                </form>

                {/* AVATAR */}
                <div className='profile'>
                    <div className='avatar-container'>
                        <img src={imgAvatar} alt="Profile Avatar" className='avatar' />
                    </div>
                </div>
                <span className="user-name"> Javier</span>
                <Dropdown>
                    <Dropdown.Toggle id="profileButton" as='button' className='btn btn-transparent mx-2 text-white'>
                        <BiChevronDown className='dropdown' />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item className='text-black' href="#/action-1">Action 1</Dropdown.Item>
                        <Dropdown.Item className='text-black' href="#/action-2">Action 2</Dropdown.Item>
                        <Dropdown.Item className='text-black' href="#/action-3">Action 3</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </nav>
        </>
    )
}

export default NavbarExample