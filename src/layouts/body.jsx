import React, { useState, useEffect } from 'react';
import '../styles/carousel.css';
import { Card, Button } from 'react-bootstrap';
import img from '../img/img2.jpg';

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
        /*<div className="row">
            <div className="proximos">
                <h1>Próximos Eventos</h1>
            </div>
            <div className="col-sm-8 text-white">
                {eventos.map((evento) => (
                    <div key={evento.id_evento}>
                        <h2>{evento.nombre_evento}</h2>
                        <p>Tipo de Deporte: {evento.tipo_deporte}</p>
                        <p>Fecha del Evento: {evento.fecha_evento}</p>
                        <p>Lugar del Evento: {evento.lugar_evento}</p>
                        <img src={evento.img_evento} alt={evento.nombre_evento} />
                        <p>Patrocinador Principal: {evento.patrocinador_principal}</p>
                        <p>Horario del Evento: {evento.horario_evento}</p>
                        <a href={`/detalle_evento/${evento.id_evento}`}>Ver detalles</a>
                    </div>
                ))}
            </div>
        </div>*/
        <div className="container-fluid main-content text-center text-white">
            <div className="row">
                <div className='div1'><h2>Próximos</h2></div>
                <div className="col-sm-8"><div><img src={img} alt="" style={{ width: '100%', height:'50vh', objectFit:'fill', borderRadius:10 }} /></div></div>
                <div className="col-sm-4"><div><img src={img} alt="" style={{ width: '100%', height:'50vh', borderRadius:10 }} /></div></div>
            </div>
            <div className="row d-flex flex-wrap">
                <div className='div1 mt-3'><h4>Más adelante</h4></div>
                {/* Card 1 */}
                <div className="col-md-3">
                    <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </div>
                {/* Card 1/ */}
                {/* Card 2 */}
                <div className="col-md-3">
                    <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </div>
                {/* Card 2/ */}
                {/* Card 3 */}
                <div className="col-md-3">
                    <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </div>
                {/* Card 3/ */}
                {/* Card 4 */}
                <div className="col-md-3"><Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </div>
                {/* Card 4/ */}
            </div>
            <div className="row d-flex flex-wrap mt-3">
                {/* Card 5 */}
                <div className="col-md-3">
                    <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </div>
                {/* Card 5/ */}
                {/* Card 6 */}
                <div className="col-md-3">
                    <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </div>
                {/* Card 6/ */}
                {/* Card 7 */}
                <div className="col-md-3">
                    <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </div>
                {/* Card 7/ */}
                {/* Card 8 */}
                <div className="col-md-3"><Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </div>
                {/* Card 8/ */}
            </div>
        </div>
    );
};

export default Body;    
