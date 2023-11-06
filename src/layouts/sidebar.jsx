import React from 'react';
import '../styles/sidebar.css';
import { SlActionRedo } from 'react-icons/sl';
import { ImFeed } from "react-icons/im";
import { BiCaretRightSquare } from "react-icons/bi";
import { BiBookmark } from "react-icons/bi";
import { BsKanban } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import { HiHome } from 'react-icons/hi';
import logo from '../img/pico-deportes-1.png';




const Sidebar = () => {
    return (
        <div id="sidebar" className="custom-bg-color">
            <div className="logo-container">
                {/* <button className='btn'><img src={logo} className="icon"></img><div className="logo">Pico <br></br>Deportes</div></button> */}
                <Button variant="link" className="d-flex align-items-center" style={{textDecoration: 'none', color: 'white'}}>
          <img src={logo} alt="Mi Ícono" className="mr-2 ml-3" style={{width:'60px', height:'60px', marginLeft:'10px', textDecoration: 'none'}}/>
          <span style={{cursor: 'pointer', marginLeft:'10px' }}>
              Pico Deportes
            </span>
        </Button>
            </div>
            <div className="position-sticky" style={{ paddingTop: '100px' }}>
                <ul className="nav flex-column  align-items-center">
                    <h4 className='text-white'>Menu</h4>
                    <li className="nav-item">
                        <a className="nav-link active text-white" href="#">
                            <SlActionRedo /> Proximos
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">
                            <ImFeed />  En vivo
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">
                            <BiCaretRightSquare /> Pasados
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">
                            <BiBookmark />Guardados
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">
                            <BsKanban /> Resultados
                        </a>
                    </li>
                </ul>
            </div>
            <div><hr className='text-white' /></div>
            <div className="position-sticky">
                <ul className="nav flex-column  align-items-center">
                    <h4 className='text-white'>Categoria</h4>
                    <li className="nav-item">
                        <a className="nav-link active text-white" href="#">
                            Fubol
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">
                            <i className="bi bi-broadcast">Basquet</i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">
                            Cesto
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">
                            Running
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">
                            Tenis
                        </a>
                    </li>
                </ul>
            </div>

        </div>

    );
};

export default Sidebar;
