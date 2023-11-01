import '../styles/navbar.css';
import { BiSearch, BiChevronDown, BiBell } from "react-icons/bi"; // Importa los íconos de React Icons
import imgAvatar from '../img/avatar1.jpg';
import { Dropdown } from 'react-bootstrap';

const NavbarExample = () => {
    return (
        <>
            <nav className="navbar">
                <div className="container">
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