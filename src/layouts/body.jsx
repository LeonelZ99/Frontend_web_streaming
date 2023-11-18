import React, { useState, useEffect } from 'react';
import '../styles/body.css';
import { Card, Button } from 'react-bootstrap';
import img from '../img/img2.jpg';
import imgCard from '../img/pelota.jpeg';


const Body = () => {
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        // Realiza una solicitud a la API para obtener los datos de eventos
        fetch('http://localhost/Backend_web_/evento.php')
            .then((response) => response.json())
            .then((data) => {
                // Actualiza el estado con los datos obtenidos de la API
                setEventos(data);
            })
            .catch((error) => {
                console.error('Error al obtener datos de eventos:', error);
            });
    }, []);

    return (
        <div className="container-fluid fondo">
            {/*PARTE PRINCIPAL*/}
            <div className="row">
                <h2 className='subtitulo'>Próximos</h2>
                <div className="col-sm-8">
                    <div className="position-relative">
                    <img src={img} alt="" className='imagenPrincipal' />
                    <div className='degradado'></div>
                    <h3 className='textoOverlay'>Pre-Federal: <br></br> Independiente jvs <br /> Cultural Argentino</h3>
                    </div> 
                </div>
                
                <div className="col-sm-4">
                    <img src={img} alt="" className='imagenPrincipal' />
                </div>
            </div>

            {/* PARTE CARDS */}
            <div className="row d-flex flex-wrap">
                <h3 className='subtitulo mt-4'>Más adelante</h3>

                {/* Card 1 */}
                <div className="col-md-3">
                    <Card className='styleCard'>
                    <Card.Img variant="top" src={imgCard} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the cards content.
                        </Card.Text>
                        <Button variant="secondary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </div>
                {/* Card 1/ */}
                {/* Card 2 */}
                <div className="col-md-3">
                    <Card className='styleCard'>
                    <Card.Img variant="top" src={imgCard} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the cards content.
                        </Card.Text>
                        <Button variant="secondary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </div>
                {/* Card 2/ */}
                {/* Card 3 */}
                <div className="col-md-3">
                    <Card className='styleCard'>
                        <Card.Img variant="top" src={imgCard} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the cards content.
                            </Card.Text>
                            <Button variant="secondary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
                {/* Card 3/ */}
                {/* Card 4 */}
                <div className="col-md-3">
                    <Card className='styleCard'>
                        <Card.Img variant="top" src={imgCard} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the cards content.
                            </Card.Text>
                            <Button variant="secondary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
                {/* Card 4/ */}
            </div>

            <div className="row d-flex flex-wrap my-3">
                {/* Card 5 */}
                <div className="col-md-3">
                    <Card className='styleCard'>
                    <Card.Img variant="top" src={imgCard} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the cards content.
                        </Card.Text>
                        <Button variant="secondary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </div>
                {/* Card 5/ */}
                {/* Card 6 */}
                <div className="col-md-3">
                    <Card className='styleCard'>
                    <Card.Img variant="top" src={imgCard} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the cards content.
                        </Card.Text>
                        <Button variant="secondary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </div>
                {/* Card 6/ */}
                {/* Card 7 */}
                <div className="col-md-3">
                    <Card className='styleCard'>
                    <Card.Img variant="top" src={imgCard} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the cards content.
                        </Card.Text>
                        <Button variant="secondary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </div>
                {/* Card 7/ */}
                {/* Card 8 */}
                <div className="col-md-3">
                    <Card className='styleCard'>
                        <Card.Img variant="top" src={imgCard} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the cards content.
                            </Card.Text>
                            <Button variant="secondary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
                {/* Card 8/ */}
            </div>
        </div>
    );
};

export default Body;    
