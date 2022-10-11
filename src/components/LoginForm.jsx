import '../css/LoginForm.css';
import React from 'react';


function LoginForm() {
    return (
        <div className="principal-login">
            <div className="login">
                <img src={require('./img/logo.jpg')} alt='logoimg'/>
                <h1 className="text-center">Iniciar sesión</h1>   
                <form className="needs-validation">
                    <div className="form-group">
                        <label className="form-label" htmlFor="email">Correo electrónico</label>
                        <input className="form-control" type="email" id="email" placeholder="sanders@hotmail.com" required />
                    </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="password">Contraseña</label>
                    <input className="form-control" type="password" id="password" placeholder="********************" required />
                    {/* 
                    <div className="invalid-feedback">
                        Su correo electrónico o contraseña no coinciden
                    </div>
                    */}
                </div>    
                <input className="btn btn-success w-100" type="submit" value="Iniciar Sesión" />
                <div className="form-check text-center">
                    <label className="form-check-label">¿No tienes cuenta? <a href='#'>Registrate</a></label>
                </div>
                </form>
            </div>
        </div>
   );
 };
 
 export default LoginForm;
 