import React, { useContext, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Row } from 'react-bootstrap';
import './LoginPage.css'
import { UserContext } from '../../context/UserContext';

const LoginPage = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const {handleSubmit} = useContext(UserContext);
    const validarLogin =(e)=>{
        e.preventDefault();
        if(email === "" || password===""){
            alert("Complete todos los campos");
            return false;
        }
        if(password.length<6){
            alert("La contraseña contiene menos de 6 caracteres");
            return false;
        }
        handleSubmit(e,'login',email,password);
        
    }
    return (
        <form className='formulario' onSubmit={validarLogin}>
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
                <Button className='boton' type="submit">Enviar</Button>
        </form>
    )
}

export default LoginPage