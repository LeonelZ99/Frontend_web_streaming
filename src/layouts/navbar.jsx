import '../styles/navbar.css';
import { BiSearch, BiChevronDown, BiBell } from "react-icons/bi"; // Importa los íconos de React Icons
import imgAvatar from '../img/avatar1.jpg';
import { Dropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { HiHome } from 'react-icons/hi';
import logo from '../img/pico-deportes-1.png';

const NavbarExample = () => {
    return (
        <>
            <nav className="navbar container-fluid">
                <div className="container-fluid">
                <div className="logo-container">
                {/* <button className='btn'><img src={logo} className="icon"></img><div className="logo">Pico <br></br>Deportes</div></button> */}
                <Button variant="link" className="d-flex align-items-center" style={{textDecoration: 'none', color: 'white'}}>
          <img src={logo} alt="Mi Ícono" className="mr-2 ml-3" style={{width:'60px', height:'60px', marginLeft:'10px', textDecoration: 'none'}}/>
          <span style={{cursor: 'pointer', marginLeft:'10px' }}>
              Pico Deportes
            </span>
        </Button>
            </div>
                    <form className="mx-auto d-flex" role="buscar">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <div className='profile'>
                        <div className='avatar-container'>
                            <img src={imgAvatar} alt="Profile Avatar" className='avatar' />
                        </div>
                    </div>
                    <span className="user-name">Javier</span>
                    <Dropdown>
                        <Dropdown.Toggle id="profileButton" as='button' className='btn btn-transparent'>
                            <BiChevronDown className='dropdown' />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item className='text-white' href="#/action-1">Action 1</Dropdown.Item>
                            <Dropdown.Item className='text-white' href="#/action-2">Action 2</Dropdown.Item>
                            <Dropdown.Item className='text-white' href="#/action-3">Action 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <button className='btn'>
                        <BiBell className='bibell' />
                    </button>
                </div>
            </nav>
        </>
    )
}

export default NavbarExample