import React, { useContext, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Row } from 'react-bootstrap';
import './LoginPage.css'
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [mail,setMail] = useState("");
    const [pass,setPass] = useState("");
    const {estadoToken} = useContext(UserContext);
    const navigate = useNavigate();
    const validarLogin =(e)=>{
        e.preventDefault();
        if(mail === "" || pass===""){
            alert("Complete todos los campos");
            return false;
        }
        if(pass.length<6){
            alert("La contraseña contiene menos de 6 caracteres");
            return false;
        }
        estadoToken(true);
        navigate('/pizzeria');
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