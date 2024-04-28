// -----------------------------------------------------------------------------
//
// Formulario para agregar horas (Con Backend)
//
// Desarrollado por: Alessandro Cintolesi
//                   Ignacio Muñoz
//                   Benjamin Pavez
//
// Fecha Inicio: 20-04-2024
//
// Fecha Ultima Modificacion: 23-04-2024
//
//
// Este código fuente representa una parte del proyecto de Analisis y Diseño de
// Software (INF-236) e Ingenieria de Software (INF-225), para mas informacion
// revisar el README en GitHub.
//
// El código fuente se distribuye con la esperanza de que sea útil,
// pero SIN NINGUNA GARANTÍA; sin siquiera la garantía implícita de
// APTITUD PARA UN PROPÓSITO PARTICULAR.
//
//
// DESCRIPCIÓN:
// La pagina muestra un formulario para agregar otra hora dependiendo del 
// tipo de examen.
//
// -----------------------------------------------------------------------------

import React, { useState } from "react";
import { Button, Col, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { createHora } from '../redux/actions/pacienteActions.js';

//Estilos
import './../assets/profile/assets/plugins/bootstrap/css/bootstrap.min.css';
import './../assets/profile/css/style.css';
import './../assets/profile/css/colors/default-dark.css';
import './../assets/profile/assets/plugins/bootstrap/js/bootstrap.bundle.min.js';


//Funcion Nacho Alessandro
function FormatoHoras() {
	const isLogged = useSelector((store) => store.authReducer.isLogged);
	const [fecha, setFecha] = useState('');
	const [hora, setHora] = useState('');
    const [posible_diagnostico, setPosibleDiagnostico] = useState('');
    const [id_medico_deriva, setId_medico_deriva] = useState('');

	const dispatch = useDispatch();

	const handleFecha = (e) => {
		setFecha(e.target.value);
	}

	const handleHora = (e) => {
		setHora(e.target.value);
	}

	const handlePosibleDiagnostico = (e) => {
		setPosibleDiagnostico(e.target.value);
	}

    const handleId_medico_deriva = (e) => {
		setId_medico_deriva(e.target.value);
	}

	/* const handleId_paciente = (e) => {
		setId_paciente(e.target.value);
	} */

	const handleSubmit = (e) => { 
		e.preventDefault();
		axios.post('http://localhost:8080/createHoraMedica', {
			fecha: fecha,
			hora: hora,
			posible_diagnostico: posible_diagnostico,
            id_medico_deriva: id_medico_deriva,
		}, {
			headers: {
				'auth-token': localStorage.getItem('token'),
			}
		}).then((data) => {
			dispatch(createHora(data.data));
		})
	}
  

  return (
    <div className="fix-header card-no-border fix-sidebar">
        <div className="topbar">
            <nav className="navbar top-navbar navbar-expand-md navbar-light">
                <div className="navbar-header">
                    <a className="navbar-brand" href="index.html">
                        <b>
                            <img src={require("./../assets/profile/assets/images/favicon.png")} alt="homepage" className="dark-logo" />
                        </b>
                        <span>
                            <img src={require("./../assets/profile/assets/images/logo-text.png")} alt="homepage" className="dark-logo" />
                        </span>
                    </a>
                </div>
                <div className="navbar-collapse">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link nav-toggler hidden-md-up waves-effect waves-dark">
                                <i className="ti-menu"></i>
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav my-lg-0">
                        <li className="nav-item hidden-xs-down search-box">
                            <a className="nav-link hidden-sm-down waves-effect waves-dark">
                                <i className="ti-search"></i>
                            </a>
                            <form className="app-search">
                                <input type="text" className="form-control" placeholder="Search & enter" />
                                <a className="srh-btn">
                                    <i className="ti-close"></i>
                                </a>
                            </form>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link waves-effect waves-dark" href="#">
                                <img src={require("./../assets/profile/assets/images/users/doctor.jpg")} alt="user" className="profile-pic" />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <aside className="left-sidebar">
            <div className="scroll-sidebar">
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        <li>
                            <a className="waves-effect waves-dark" href="index.html" aria-expanded="false">
                                <i className="mdi mdi-gauge"></i>
                                <span className="hide-menu">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a className="waves-effect waves-dark" href="pages-profile.html" aria-expanded="false">
                                <i className="mdi mdi-account-check"></i>
                                <span className="hide-menu">Perfil</span>
                            </a>
                        </li>
                        <li>
                            <a className="waves-effect waves-dark" href="table-basic.html" aria-expanded="false">
                                <i className="mdi mdi-table"></i>
                                <span className="hide-menu">Calendario</span>
                            </a>
                        </li>
                        <li>
                            <a className="waves-effect waves-dark" href="icon-material.html" aria-expanded="false">
                                <i className="mdi mdi-emoticon"></i>
                                <span className="hide-menu">Editar Hora Urgencia</span>
                            </a>
                        </li>
                        <li>
                            <a className="waves-effect waves-dark" href="map-google.html" aria-expanded="false">
                                <i className="mdi mdi-earth"></i>
                                <span className="hide-menu">Pacientes</span>
                            </a>
                        </li>
                        <li>
                            <a className="waves-effect waves-dark" href="pages-blank.html" aria-expanded="false">
                                <i className="mdi mdi-book-open-variant"></i>
                                <span className="hide-menu">Agregar Hora</span>
                            </a>
                        </li>
                        <li>
                            <a className="waves-effect waves-dark" href="pages-error-404.html" aria-expanded="false">
                                <i className="mdi mdi-help-circle"></i>
                                <span className="hide-menu">Estado Equipos</span>
                            </a>
                        </li>
                    </ul>
                    <div className="text-center mt-4">
                        <a href="https://wrappixel.com/templates/adminpro" className="btn waves-effect waves-light btn-info hidden-md-down text-white">
                            Cerrar Sesion
                        </a>
                    </div>
                </nav>
            </div>
        </aside>
        <div className="page-wrapper">
            <div className="container-fluid">
                <div className="row page-titles">
                <div className="col-md-5 align-self-center">
                    <h3 className="text-themecolor">Agregar Hora</h3>
                </div>
				<div className="col-12 mt10">
					<div style={{ marginLeft: '500px' }}></div>
					<Form>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Fecha</Form.Label>
							<Form.Control onChange={handleFecha} type="email" placeholder="Enter nombre" />
						</Form.Group>

						<Form.Group controlId="formBasicEmail">
							<Form.Label>Hora</Form.Label>
							<Form.Control onChange={handleHora} type="email" placeholder="Enter descripción" />
						</Form.Group>

						<Form.Group controlId="formBasicEmail">
							<Form.Label>Posible diagnostico</Form.Label>
							<Form.Control onChange={handlePosibleDiagnostico} type="email" placeholder="Enter descripción" />
						</Form.Group>

						<Form.Group controlId="formBasicEmail">
							<Form.Label>Medico que lo deriva</Form.Label>
							<Form.Control onChange={handleId_medico_deriva} type="email" placeholder="Enter descripción" />
						</Form.Group>
						<Button onClick={handleSubmit} variant="primary" type="submit">
							Enviar
						</Button>
					</Form>
				</div>
            	</div>
			</div>
            <footer className="footer">
                © 2024 ImagenApp by <a href="https://www.wrappixel.com/">Grupo 17</a>
            </footer>
        </div>
    </div>
    
  );
}

export default FormatoHoras;
