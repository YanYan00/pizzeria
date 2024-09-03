import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Row } from 'react-bootstrap';
import './RegisterPage.css'

const RegisterPage = () => {
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const validarFormulario = (e) => {
        e.preventDefault();
        if(email === "" || password === "" || confirmPassword===""){
            alert("Faltan campos por completar");
            return false;
        }
        if(password.length<6){
            alert("La contraseña debe contener minimo 6 caracteres");
            return false;
        }
        if(password!==confirmPassword){
            alert("Ambas contraseñas deben ser iguales");
            return false;
        }
        alert("Formulario completado");
    }
    return (
        <form className='formulario-registro'>
            <Row className='row'>
                <Col>Email:
                </Col>
                <Col><input type="email" onChange={(e) => setEmail(e.target.value)}/>
                </Col>
            </Row>
            <Row className='row'>
                <Col>Contraseña:
                </Col>
                <Col><input type="password" onChange={(e) => setPassword(e.target.value)}/>
                </Col>
            </Row>
            <Row className='row'>
                <Col>Confirmar Contraseña:
                </Col>
                <Col><input type="password" onChange={(e) => setConfirmPassword(e.target.value)}/>
                </Col>
            </Row>
            <Button className='boton' onClick={(e)=>validarFormulario(e)}>Enviar</Button>
        </form>
    )
}

export default RegisterPage