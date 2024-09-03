import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Row } from 'react-bootstrap';
import './LoginPage.css'

const LoginPage = () => {
    const [mail,setMail] = useState("");
    const [pass,setPass] = useState("");
    const validarLogin =(e)=>{
        e.preventDefault();
        if(mail === "" || pass===""){
            alert("Complete todos los cambios");
            return false;
        }
        if(pass.length<6){
            alert("La contraseña contiene menos de 6 caracteres");
            return false;
        }
        alert("Usuario validado");
    }
    return (
        <form className='formulario'>
                <Row className='row'>
                    <Col>Email:
                    </Col>
                    <Col><input type="email" onChange={(e) => setMail(e.target.value)}/>
                    </Col>
                </Row>
                <Row className='row'>
                    <Col>Contraseña:
                    </Col>
                    <Col><input type="password" onChange={(e) => setPass(e.target.value)}/>
                    </Col>
                </Row>
                <Button className='boton' onClick={(e)=>validarLogin(e)}>Enviar</Button>
        </form>
    )
}

export default LoginPage