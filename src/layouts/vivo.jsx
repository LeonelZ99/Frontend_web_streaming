
import { Card} from 'react-bootstrap';
import imgCard from '../img/pelota.jpeg';
import { ImFeed } from "react-icons/im";
import imgPerfil from '../img/avatar1.png';

const Vivo = () => {

    return (
        <div className="container-fluid fondoVivo">
            {/* FILA 1 */}
            <div className='row my-4'>
                <div className='col-md-1'>
                    <div className="contenedorIconVivo"><ImFeed/></div> 
                </div>
                <div className='col-md-2 d-flex align-items-center'>
                    <h1 className='textoVivo'>En vivo</h1>
                </div>
            </div>

            {/* FILA 2*/}
            <div className='row'>
                <hr className='hr' />
            </div>

            {/* FILA 3*/}
            <div className="row d-flex flex-wrap filaCard3">
                {/* Card 1 */}
                <div className="col-md-3 position-relative">
                    <Card className='styleCard'>
                        <Card.Img variant="top" src={imgCard} className='imagenVivo'/>
                        <div className='vivoOverlay'> <ImFeed className='iconoVivo'/> EN VIVO</div>
                        <Card.Body className='bodyCard'>
                            <div className='perfilCard'>
                                <img src={imgPerfil} alt="Profile Avatar" className='imagenCard' />
                            </div>
                            
                            <div className='descripcionCard'>
                                <Card.Title className='tituloCard'>PARTIDO DE FUTBOL</Card.Title>
                                <Card.Text className='nombrePerfil'> Todo Noticias </Card.Text>
                                <Card.Text className='perfilesViendo'> 32 k lo están viendo </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                {/* Card 1/ */}
                {/* Card 2 */}
                <div className="col-md-3 position-relative">
                    <Card className='styleCard'>
                        <Card.Img variant="top" src={imgCard} className='imagenVivo'/>
                        <div className='vivoOverlay'> <ImFeed className='iconoVivo'/> EN VIVO</div>
                        <Card.Body className='bodyCard'>
                            <div className='perfilCard'>
                                <img src={imgPerfil} alt="Profile Avatar" className='imagenCard' />
                            </div>
                            
                            <div className='descripcionCard'>
                                <Card.Title className='tituloCard'>PARTIDO DE FUTBOL</Card.Title>
                                <Card.Text className='nombrePerfil'> Todo Noticias </Card.Text>
                                <Card.Text className='perfilesViendo'> 32 k lo están viendo </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                {/* Card 2/ */}
                {/* Card 3 */}
                <div className="col-md-3 position-relative">
                    <Card className='styleCard'>
                        <Card.Img variant="top" src={imgCard} className='imagenVivo'/>
                        <div className='vivoOverlay'> <ImFeed className='iconoVivo'/> EN VIVO</div>
                        <Card.Body className='bodyCard'>
                            <div className='perfilCard'>
                                <img src={imgPerfil} alt="Profile Avatar" className='imagenCard' />
                            </div>
                            
                            <div className='descripcionCard'>
                                <Card.Title className='tituloCard'>PARTIDO DE FUTBOL</Card.Title>
                                <Card.Text className='nombrePerfil'> Todo Noticias </Card.Text>
                                <Card.Text className='perfilesViendo'> 32 k lo están viendo </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                {/* Card 3/ */}
                {/* Card 4 */}
                <div className="col-md-3 position-relative">
                    <Card className='styleCard'>
                        <Card.Img variant="top" src={imgCard} className='imagenVivo'/>
                        <div className='vivoOverlay'> <ImFeed className='iconoVivo'/> EN VIVO</div>
                        <Card.Body className='bodyCard'>
                            <div className='perfilCard'>
                                <img src={imgPerfil} alt="Profile Avatar" className='imagenCard' />
                            </div>
                            
                            <div className='descripcionCard'>
                                <Card.Title className='tituloCard'>PARTIDO DE FUTBOL</Card.Title>
                                <Card.Text className='nombrePerfil'> Todo Noticias </Card.Text>
                                <Card.Text className='perfilesViendo'> 32 k lo están viendo </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                {/* Card 4/ */}
            </div>



            {/* FILA 4*/}
            <div className="row d-flex flex-wrap filaCard4">
                {/* Card 5 */}
                <div className="col-md-3 position-relative">
                    <Card className='styleCard'>
                        <Card.Img variant="top" src={imgCard} className='imagenVivo'/>
                        <div className='vivoOverlay'> <ImFeed className='iconoVivo'/> EN VIVO</div>
                        <Card.Body className='bodyCard'>
                            <div className='perfilCard'>
                                <img src={imgPerfil} alt="Profile Avatar" className='imagenCard' />
                            </div>
                            
                            <div className='descripcionCard'>
                                <Card.Title className='tituloCard'>PARTIDO DE FUTBOL</Card.Title>
                                <Card.Text className='nombrePerfil'> Todo Noticias </Card.Text>
                                <Card.Text className='perfilesViendo'> 32 k lo están viendo </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                {/* Card 5/ */}
                {/* Card 6 */}
                <div className="col-md-3 position-relative">
                    <Card className='styleCard'>
                        <Card.Img variant="top" src={imgCard} className='imagenVivo'/>
                        <div className='vivoOverlay'> <ImFeed className='iconoVivo'/> EN VIVO</div>
                        <Card.Body className='bodyCard'>
                            <div className='perfilCard'>
                                <img src={imgPerfil} alt="Profile Avatar" className='imagenCard' />
                            </div>
                            
                            <div className='descripcionCard'>
                                <Card.Title className='tituloCard'>PARTIDO DE FUTBOL</Card.Title>
                                <Card.Text className='nombrePerfil'> Todo Noticias </Card.Text>
                                <Card.Text className='perfilesViendo'> 32 k lo están viendo </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                {/* Card 6/ */}
                {/* Card 7 */}
                <div className="col-md-3 position-relative">
                    <Card className='styleCard'>
                        <Card.Img variant="top" src={imgCard} className='imagenVivo'/>
                        <div className='vivoOverlay'> <ImFeed className='iconoVivo'/> EN VIVO</div>
                        <Card.Body className='bodyCard'>
                            <div className='perfilCard'>
                                <img src={imgPerfil} alt="Profile Avatar" className='imagenCard' />
                            </div>
                            
                            <div className='descripcionCard'>
                                <Card.Title className='tituloCard'>PARTIDO DE FUTBOL</Card.Title>
                                <Card.Text className='nombrePerfil'> Todo Noticias </Card.Text>
                                <Card.Text className='perfilesViendo'> 32 k lo están viendo </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                {/* Card 7/ */}
                {/* Card 8 */}
                <div className="col-md-3 position-relative">
                    <Card className='styleCard'>
                        <Card.Img variant="top" src={imgCard} className='imagenVivo'/>
                        <div className='vivoOverlay'> <ImFeed className='iconoVivo'/> EN VIVO</div>
                        <Card.Body className='bodyCard'>
                            <div className='perfilCard'>
                                <img src={imgPerfil} alt="Profile Avatar" className='imagenCard' />
                            </div>
                            
                            <div className='descripcionCard'>
                                <Card.Title className='tituloCard'>PARTIDO DE FUTBOL</Card.Title>
                                <Card.Text className='nombrePerfil'> Todo Noticias </Card.Text>
                                <Card.Text className='perfilesViendo'> 32 k lo están viendo </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                {/* Card 8/ */}
            </div>
        </div>
    );
};

export default Vivo;    
